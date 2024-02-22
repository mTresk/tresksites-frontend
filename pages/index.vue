<script setup>
import { useQuery } from '@tanstack/vue-query'

const fetcher = async () => await $fetch(`${useRuntimeConfig().public['backendUrl']}/api/works/featured`)

const { isLoading, data: works } = useQuery({
	queryKey: ['featured'],
	queryFn: fetcher,
})
</script>

<template>
	<div>
		<Hero />
		<Advantages />
		<Logos />
		<Works :works="works" />
		<div class="spacer-60">
			<NuxtLink to="/works">
				<UiButton transparent wide size="lg">Другие работы<UiIconArrowUp /></UiButton>
			</NuxtLink>
		</div>
		<Technology />
	</div>
</template>
