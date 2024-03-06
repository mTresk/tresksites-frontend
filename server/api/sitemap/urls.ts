export default defineSitemapEventHandler(async () => {
	const pages = await $fetch<{ [x: string]: any }>(`${useRuntimeConfig().public.backendUrl}/api/routes`)
	return [
		...pages.map((page: { slug: string, updated_at: string }) =>
			asSitemapUrl({
				loc: `/works/${page.slug}`,
				lastmod: page.updated_at,
			}),
		),
	]
})
