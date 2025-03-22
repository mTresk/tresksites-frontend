export default defineNuxtPlugin(() => {
    const $api = $fetch.create({
        baseURL: useRuntimeConfig().public.backendUrl,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })

    return {
        provide: {
            api: $api,
        },
    }
})
