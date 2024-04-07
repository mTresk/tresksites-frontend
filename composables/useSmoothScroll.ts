import Lenis from '@studio-freight/lenis'

const scrollLenis = ref()

export function useSmoothScroll() {
	function initLenis() {
		scrollLenis.value = new Lenis({
			duration: 2.0,
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
		})
	}

	initLenis()

	function destroyLenis() {
		scrollLenis.value.destroy()
	}

	scrollLenis.value.on('scroll', ScrollTrigger.update)

	function raf(time: number) {
		scrollLenis.value.raf(time)
		requestAnimationFrame(raf)
	  }

	  requestAnimationFrame(raf)

	gsap.ticker.add((time) => {
		scrollLenis.value.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(0)

	return { initLenis, destroyLenis }
}
