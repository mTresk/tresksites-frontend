import { useSmoothScroll } from '~/composables/useSmoothScroll'

export default defineNuxtRouteMiddleware((to: any, from: any) => {
	from.meta.pageTransition.onBeforeLeave = () => useSmoothScroll().destroyLenis()
	to.meta.pageTransition.onBeforeEnter = () => useSmoothScroll().initLenis()
})
