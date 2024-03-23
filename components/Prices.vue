<script setup lang="ts">
import type { IPrices } from '@/types'

interface IProps {
	prices?: IPrices
	isLoading: boolean
}

defineProps<IProps>()
</script>

<template>
	<section class="price spacer-60 price-animate">
		<UiSpinner v-if="isLoading" />
		<div v-if="!isLoading" class="price__wrapper">
			<h2 class="price__title spacer-20 price-animate">
				{{ prices?.title }}
			</h2>
			<p class="price__description price-animate">
				{{ prices?.description }}
			</p>
			<ul class="price__list price-animate">
				<PricesItem v-for="price in prices?.block" :key="price?.service" :price="price" />
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.price {
	padding-right: rem(20);
	padding-left: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	.dark-mode & {
		background-color: var(--white-color-dark);
	}

	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	&__description {
		font-weight: 500;
		line-height: 145%;

		@include adaptiveValue('font-size', 22, 16);
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: rem(16);
		margin-top: rem(30);
	}
}
</style>
