import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineNuxtConfig({
	devtools: { enabled: true },
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
	modules: ['@nuxt/image'],
})
