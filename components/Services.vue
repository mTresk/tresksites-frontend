<script setup lang="ts">
import type { IServices } from '@/types'

interface IProps {
	services: IServices[]
	isLoading: boolean
}

defineProps<IProps>()

const { appearLeft } = useAnimation()

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
			<ServicesCard v-for="service in services" :key="service.id" :service="service" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.services {
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
