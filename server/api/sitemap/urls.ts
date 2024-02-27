import { asSitemapUrl, defineSitemapEventHandler, useRuntimeConfig } from '#imports'

export default defineSitemapEventHandler(async () => {
	const pages = await $fetch<{ pages: { slug: string } }>(`${useRuntimeConfig().public.backendUrl}/api/routes`)
	return [
		...pages.map((page: { slug: string, updated_at: string }) =>
			asSitemapUrl({
				loc: `/works/${page.slug}`,
				lastmod: page.updated_at,
			}),
		),
	]
})
