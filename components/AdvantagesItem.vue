<script setup lang="ts">
interface IProps {
	title: string
	description: string
}

defineProps<IProps>()
</script>

<template>
	<div class="advantages-item">
		<h2 class="advantages-item__title">
			{{ title }}
		</h2>
		<p class="advantages-item__description">
			{{ description }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
.advantages-item {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@include adaptiveValue('gap', 12, 10);

	&:not(:last-child) {
		&::before {
			position: absolute;
			top: 0;
			width: 1px;
			height: 100%;
			content: '';
			background-color: var(--light-color);

			@include adaptiveValue('right', -30, -12);

			@media (max-width: $mobile) {
				top: auto;
				right: auto;
				width: 100%;
				height: 1px;

				@include adaptiveValue('bottom', -30, -12);
			}
		}
	}

	&__description {
		margin-top: auto;
		font-weight: 500;
		line-height: 145%;

		@include adaptiveValue('font-size', 14, 12);
	}
}
</style>
