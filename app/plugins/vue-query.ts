import type { DehydratedState, VueQueryPluginOptions } from '@tanstack/vue-query'
import { defineNuxtPlugin, useState } from '#imports'
import { dehydrate, hydrate, QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

export default defineNuxtPlugin((nuxt) => {
    const vueQueryState = useState<DehydratedState | null>('vue-query')

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 60,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
            },
        },
    })
    const options: VueQueryPluginOptions = { queryClient }

    nuxt.vueApp.use(VueQueryPlugin, options)

    if (import.meta.server) {
        nuxt.hooks.hook('app:rendered', () => {
            vueQueryState.value = dehydrate(queryClient)
        })
    }

    if (import.meta.client)
        hydrate(queryClient, vueQueryState.value)
})
