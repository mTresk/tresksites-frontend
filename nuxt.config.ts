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
	modules: ['@nuxt/image', 'nuxt-simple-robots', '@vite-pwa/nuxt', '@nuxtjs/sitemap'],
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
	pwa: {
		registerType: 'autoUpdate',
		workbox: { navigateFallback: null, globPatterns: ['**/*.{js,css,svg,ico}'] },
		client: { installPrompt: true, periodicSyncForUpdates: 100000 },
		manifest: {
			name: 'Tresk Sites',
			short_name: 'Tresk Sites',
			description: 'Создание сайтов и веб-приложений любой сложности',
			theme_color: '#ffffff',
			lang: 'ru',
			icons: [
				{
					src: '/android-chrome-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/android-chrome-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: '/maskable-icon.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'maskable',
				},
			],
			screenshots: [
				{
					src: 'screenshot.png',
					sizes: '3024x1600',
					type: 'image/png',
					form_factor: 'wide',
					label: 'Tresk Sites',
				},
				{
					src: 'screenshot-mobile.png',
					sizes: '958x1393',
					type: 'image/png',
					label: 'Tresk Sites Mobile',
				   },
			],
		},
	},
})
