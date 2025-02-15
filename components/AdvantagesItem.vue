<script setup lang="ts">
import type { IAdvantage } from '@/types'

defineProps<IAdvantage>()
</script>

<template>
	<div class="advantages-item">
		<h2 class="advantages-item__title">
			{{ advantage.title }}
		</h2>
		<p class="advantages-item__description">
			{{ advantage.description }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
.advantages-item {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@include adaptive-value('gap', 12, 10);

	&:not(:last-child) {
		&::before {
			position: absolute;
			top: 0;
			width: 1px;
			height: 100%;
			content: '';
			background-color: var(--light-color);

			@include adaptive-value('right', -30, -12);

			@media (max-width: $mobile) {
				top: auto;
				right: auto;
				width: 100%;
				height: 1px;

				@include adaptive-value('bottom', -30, -12);
			}
		}
	}

	&__description {
		margin-top: auto;
		font-weight: 500;
		line-height: 145%;

		@include adaptive-value('font-size', 14, 12);
	}
}
</style>
