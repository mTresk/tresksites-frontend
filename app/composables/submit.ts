import type { IApiErrorResponse, IUseSubmitOptions, ValidationErrors } from '@/types'

export function useSubmit<T>(fetchable: () => Promise<T>, options: IUseSubmitOptions<T> = {}) {
    const validationErrors = ref<ValidationErrors>({})
    const error = ref<IApiErrorResponse | null>(null)
    const isLoading = ref(false)
    const succeeded = ref<boolean | null>(null)

    async function submit() {
        validationErrors.value = {}
        error.value = null
        isLoading.value = true
        succeeded.value = null

        try {
            const data = await fetchable()
            succeeded.value = true
            options?.onSuccess?.(data)
            return data
        }
        catch (e: unknown) {
            const apiError = e as IApiErrorResponse
            error.value = apiError
            succeeded.value = false
            options?.onError?.(apiError)
            validationErrors.value = apiError.data?.errors ?? {}

            if (apiError.response?.status !== 422) {
                throw apiError
            }
        }
        finally {
            isLoading.value = false
        }
    }

    const client = async (url: string, payload: Record<string, unknown>) => {
        return $fetch(url, {
            baseURL: useRuntimeConfig().public.backendUrl,
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            ...payload,
        })
    }

    return {
        submit,
        client,
        isLoading,
        succeeded,
        validationErrors,
        error,
    }
}
