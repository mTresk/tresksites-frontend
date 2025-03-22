import type { PageRoute } from '../../types'

export default defineSitemapEventHandler(async () => {
    const pages = await $fetch<PageRoute[]>(`${useRuntimeConfig().public.backendUrl}/api/routes`)
    return [
        ...pages.map(page =>
            asSitemapUrl({
                loc: `/works/${page.slug}`,
                lastmod: page.updated_at,
            }),
        ),
    ]
})
