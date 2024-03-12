import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

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
	modules: ['@nuxt/image', 'nuxt-simple-robots', 'nuxt-delay-hydration', '@nuxtjs/sitemap'],
	sitemap: {
		sources: ['/api/sitemap/urls'],
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
	delayHydration: {
		mode: 'init',
	},
})
