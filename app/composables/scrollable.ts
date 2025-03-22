export function useScrollable(element: HTMLHtmlElement) {
    element.addEventListener('touchmove', (event) => {
        event.stopPropagation()
    })

    element.addEventListener('mousewheel', (event) => {
        event.stopPropagation()
    })
}
