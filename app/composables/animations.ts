export function useAnimation() {
	const ctx = ref()

	const appearLeft = async (target: NodeListOf<Element> | string, options?: { [key: string]: string | number }) => {
		ctx.value = gsap.context(() => {
			if (typeof target == 'object') {
				target.forEach((element) => {
					gsap.from(element, {
						x: -20,
						opacity: 0,
						ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
						stagger: 0.2,
						duration: 1,
						delay: 0.3,
						scrollTrigger: {
							trigger: element,
						},
						...options,
					})
				})
			}
			else {
				gsap.from(target, {
					x: -20,
					opacity: 0,
					ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
					stagger: 0.2,
					duration: 1,
					delay: 0.3,
					scrollTrigger: {
						trigger: target,
					},
					...options,
				})
			}
		})
	}

	const appearBottom = async (element: NodeListOf<Element> | string, options?: { [key: string]: string | number }) => {
		ctx.value = gsap.context(() => {
			gsap.from(element, {
				y: 20,
				opacity: 0,
				ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
				duration: 0.8,
				delay: 0.3,
				scrollTrigger: {
					trigger: '.advantages',
				},
				...options,
			})
		})
	}

	const rotate = async (target: NodeListOf<Element> | string, options?: { [key: string]: string | number }) => {
		ctx.value = gsap.context(() => {
			if (typeof target == 'object') {
				target.forEach((element) => {
					gsap.from(element, {
						rotate: -0.6,
						ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
						duration: 1,
						scrollTrigger: {
							trigger: element,
						},
						delay: 0.1,
						...options,
					})
				})
			}
			else {
				gsap.from(target, {
					rotate: -0.6,
					ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
					duration: 1,
					delay: 0.1,
					scrollTrigger: {
						trigger: target,
					},
					...options,
				})
			}
		})
	}

	onUnmounted(() => {
		ctx.value.revert()
	})

	return { appearLeft, appearBottom, rotate }
}
