export function useScrollState(initialState = false) {
	const scrollState = useState('scrollState', () => initialState)
	const lenisVS = useState('lenisVS', () => initialState)

	const setScrollState = (newScrollState: any) => {
	  scrollState.value = newScrollState
	}
	const setLenis = (virtualScroll: any) => {
	  lenisVS.value = virtualScroll
	}

	return {
	  scrollState: readonly(scrollState),
	  setScrollState,
	  setLenis,
	}
}
