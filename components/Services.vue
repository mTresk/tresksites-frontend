<script setup>
import { useQuery } from '@tanstack/vue-query'

const { appearLeft } = useAnimation()

const fetcher = async () => await useNuxtApp().$api('/api/services')

const {
	isLoading,
	data: services,
	suspense,
} = useQuery({
	queryKey: ['services'],
	queryFn: fetcher,
})

await suspense()

onMounted(() => {
	appearLeft('.service-card', {
		stagger: 0.1,
	})
})
</script>

<template>
	<section class="services spacer-60">
		<UiSpinner v-if="isLoading" />
		<div v-if="!isLoading" class="services__body">
			<ServicesCard v-for="service in services" :key="service?.id" :service="service" />
		</div>
	</section>
</template>

<style lang="scss">
.services {
	// .services__body
	&__body {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		@include adaptiveValue('gap', 20, 8);

		@media (max-width: em(1500)) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: $tablet) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: em(600)) {
			grid-template-columns: 1fr;
		}
	}
}
</style>
