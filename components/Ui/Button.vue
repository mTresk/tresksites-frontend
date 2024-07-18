<script setup lang="ts">
interface IProps {
	transparent?: boolean
	wide?: boolean
	inverted?: boolean
	light?: boolean
	size?: string
	disabled?: boolean
	href?: string | undefined
}

const props = defineProps<IProps>()

const classes = [
	{
		'button--transparent': props.transparent,
		'button--wide': props.wide,
		'button--inverted': props.inverted,
		'button--light': props.light,
		'button--disabled': props.disabled,

	},
	(props.size ? `button--${props.size}` : ''),
]
</script>

<template>
	<NuxtLink
		v-if="href"
		v-ripple
		:to="href"
		class="button"
		:class="classes"
	>
		<slot />
	</NuxtLink>
	<button
		v-else
		v-ripple
		class="button"
		:class="classes"
	>
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.button {
	display: flex;
	gap: rem(12);
	align-items: center;
	justify-content: center;
	padding-top: rem(12);
	padding-bottom: rem(12);
	font-weight: 600;
	line-height: 90%;
	color: var(--white-color);
	background-color: var(--accent-color);
	transition: all 0.3s ease-in-out;

	@include adaptiveValue('font-size', 15, 14);
	@include adaptiveValue('border-radius', 16, 12);
	@include adaptiveValue('padding-left', 24, 16);
	@include adaptiveValue('padding-right', 24, 16);

	:deep(svg) {
		height: auto;

		@include adaptiveValue('max-width', 20, 16);

		path {
			fill: var(--white-color);
			transition: all 0.3s ease-in-out;
		}
	}

	@media (any-hover: hover) {
		&:hover {
			background-color: var(--hover-color);
		}
	}

	&--transparent {
		color: var(--main-color);
		background-color: var(--light-color);

		:deep(svg path) {
			fill: var(--main-color);
		}

		@media (prefers-color-scheme: dark) {
			color: var(--main-color-dark);

			:deep(svg path) {
				fill: var(--main-color);
			}
		}

		@media (any-hover: hover) {
			&:hover {
				background-color: var(--light-color);
			}
		}

		@media (any-hover: hover) {
			background-color: transparent;
		}
	}

	&--wide {
		width: 100%;
	}

	&--lg {
		padding-top: rem(18);
		padding-bottom: rem(18);
	}

	&--inverted {
		color: var(--accent-color);
		background-color: var(--white-color);

		@media (prefers-color-scheme: dark) {
			background-color: var(--main-color);
		}

		:deep(svg path) {
			fill: var(--accent-color);
		}

		@media (any-hover: hover) {
			&:hover {
				color: var(--white-color);
				background-color: var(--hover-color);

				:deep(svg path) {
					fill: var(--white-color);
				}
			}
		}
	}

	&--light {
		color: var(--main-color);
		background-color: var(--rose-color);

		:deep(svg path) {
			fill: var(--main-color);
		}

		@media (any-hover: hover) {
			&:hover {
				color: var(--white-color);

				:deep(svg path) {
					fill: var(--white-color);
				}
			}
		}
	}

	&--disabled {
		pointer-events: none;
		opacity: 0.4;
	}
}
</style>
