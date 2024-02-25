import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { $fetch } from 'ofetch'

const getWorksRoutes = async () => {
	const response = await $fetch(`${process.env.NUXT_PUBLIC_BACKEND_URL}/api/routes`)
	return response?.map((work: any) => `/works/${work.slug}`)
}

export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['@/assets/scss/fonts.scss', '@/assets/scss/null.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/globals.scss" as *;',
				},
			},
		},
		plugins: [ViteImageOptimizer({})],
	},
	nitro: {
		compressPublicAssets: true,
	},
	postcss: {
		plugins: {
			autoprefixer: {},
		},
	},
	modules: ['@nuxt/image', '@nuxtjs/sitemap', 'nuxt-simple-robots'],
	hooks: {
		async 'nitro:config'(nitroConfig) {
			const slugs = await getWorksRoutes()
			nitroConfig.prerender.routes.push(...slugs)
		},
	},
	runtimeConfig: {
		public: {
			backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
		},
	},
	app: {
		pageTransition: {
			name: 'layout',
			mode: 'out-in',
		},
	},
	build: {
		transpile: ['gsap'],
	},
})
