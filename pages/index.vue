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

<style lang="scss">
.chip {
	display: flex;
	gap: rem(8);
	align-items: center;
	justify-content: center;
	padding: rem(9) rem(14);
	background-color: var(--light-color);
	border-radius: rem(16);

	.dark-mode & {
		background-color: var(--light-color-dark);
	}

	span {
		font-size: 15px;
	}
}
</style>
