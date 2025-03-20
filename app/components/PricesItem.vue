<script setup lang="ts">
import type { IPriceItem } from '@/types'

interface IProps {
	priceItem: IPriceItem
}

defineProps<IProps>()
</script>

<template>
	<li class="price-item">
		<p class="price-item__name">
			{{ priceItem.service }}
		</p>
		<p class="price-item__value">
			{{ priceItem.price }}
		</p>
	</li>
</template>

<style lang="scss" scoped>
.price-item {
	display: flex;
	gap: rem(30);
	align-items: flex-end;
	justify-content: space-between;
	overflow: hidden;

	&__name {
		position: relative;
		padding-right: rem(5);
		font-family: Montserrat, sans-serif;
		font-weight: 700;
		line-height: 150%;
		background-color: var(--white-color);

		@include adaptive-value('font-size', 18, 14);

		&::before {
			position: absolute;
			bottom: rem(-4);
			left: 0;
			z-index: -1;
			font-weight: 400;
			color: var(--grey-color);
			white-space: nowrap;
			content: '------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------';

			@include adaptive-value('font-size', 12, 8);
		}
	}

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

		@include adaptive-value('font-size', 18, 14);
	}
}
</style>
