export function useAnimation() {
	const ctx = ref()

	const appearLeft = async (element, options) => {
		ctx.value = gsap.context(() => {
			gsap.from(element, {
				x: -20,
				opacity: 0,
				ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
				stagger: 0.2,
				duration: 0.8,
				scrollTrigger: {
					trigger: element,
				},
				...options,
			})
		})
	}

	const appearBottom = async (element, options) => {
		ctx.value = gsap.context(() => {
			gsap.from(element, {
				y: 20,
				opacity: 0,
				ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
				duration: 0.8,
				scrollTrigger: {
					trigger: '.advantages',
				},
				...options,
			})
		})
	}

	const rotate = async (element, options) => {
		ctx.value = gsap.context(() => {
			gsap.from(element, {
				rotate: -0.6,
				ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
				duration: 1,
				scrollTrigger: {
					trigger: element,
				},
				...options,
			})
		})
	}

	onUnmounted(() => {
		ctx.value.revert()
	})

	return { appearLeft, appearBottom, rotate }
}
