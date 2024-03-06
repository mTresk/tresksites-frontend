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

<style lang="scss">
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

	// .price__wrapper
	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .price__description
	&__description {
		font-weight: 500;
		line-height: 145%;

		@include adaptiveValue('font-size', 22, 16);
	}

	// .price__list
	&__list {
		display: flex;
		flex-direction: column;
		gap: rem(16);
		margin-top: rem(30);
	}

	// .price__item
	&__item {
		display: flex;
		gap: rem(30);
		align-items: flex-end;
		justify-content: space-between;
		overflow: hidden;
	}

	// .price__name
	&__name {
		position: relative;
		padding-right: rem(5);
		font-family: Montserrat, sans-serif;
		font-size: 18px;
		font-weight: 700;
		line-height: 150%;
		background-color: var(--white-color);

		@include adaptiveValue('font-size', 18, 14);

		&::before {
			position: absolute;
			bottom: -4px;
			left: 0;
			z-index: -1;
			font-weight: 400;
			color: var(--grey-color);
			white-space: nowrap;
			content: '------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------';

			.dark-mode & {
				color: var(--light-color-dark);
			}

			@include adaptiveValue('font-size', 12, 8);
		}
	}

	// .price__value
	&__value {
		position: relative;
		padding-left: rem(5);
		font-family: Montserrat, sans-serif;
		font-weight: 700;
		line-height: 150%;
		color: var(--accent-color);
		text-align: right;
		white-space: nowrap;
		background-color: var(--white-color);

		@include adaptiveValue('font-size', 18, 14);

		.dark-mode & {
			background-color: var(--white-color-dark);
		}
	}
}
</style>
