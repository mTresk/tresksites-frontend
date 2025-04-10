import type { DirectiveBinding } from 'vue'

export type HTMLElementEvent<T extends HTMLElement> = MouseEvent & {
    target: T
}

function handleRipple(element: HTMLElement, binding: DirectiveBinding<number>, event: HTMLElementEvent<HTMLButtonElement>) {
    const rippleElement = document.createElement('span')
    let currentDiameter = 1
    let currentOpacity = 0.65
    const animationHandler = setInterval(animateRippleSpread, 5)
    applyRippleStyle()

    function applyRippleStyle() {
        const elementCoordinates = element.getBoundingClientRect()
        const offsetY = event.clientY - elementCoordinates.y
        const offsetX = event.clientX - elementCoordinates.x

        rippleElement.style.position = 'absolute'
        rippleElement.style.height = '5px'
        rippleElement.style.width = '5px'
        rippleElement.style.borderRadius = '100%'
        rippleElement.style.backgroundColor = '#f2f2f2'
        rippleElement.style.left = `${offsetX}px`
        rippleElement.style.top = `${offsetY}px`
        event.target.appendChild(rippleElement)
    }

    function animateRippleSpread() {
        const maximalDiameter = +binding.value || 50
        if (currentDiameter <= maximalDiameter) {
            currentDiameter++
            currentOpacity -= 0.65 / maximalDiameter
            rippleElement.style.transform = `scale(${currentDiameter})`
            rippleElement.style.opacity = `${currentOpacity}`
        }
        else {
            rippleElement.remove()
            clearInterval(animationHandler)
        }
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('ripple', {
        mounted: (element, binding) => {
            element.style.position = 'relative'
            element.style.overflow = 'hidden'
            element.addEventListener('click', (event: HTMLElementEvent<HTMLButtonElement>) => handleRipple(element, binding, event))
        },
    })
})
