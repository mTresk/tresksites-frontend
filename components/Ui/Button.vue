<script setup>
const props = defineProps({
	transparent: Boolean,
	wide: Boolean,
	inverted: Boolean,
	light: Boolean,
	size: String,
	disabled: Boolean,
})

const classObject = computed(() => (props.size ? `button--${props.size}` : ''))
</script>

<template>
	<button
		v-ripple
		class="button"
		:class="[
			{
				'button--transparent': transparent,
				'button--wide': wide,
				'button--inverted': inverted,
				'button--light': light,
				'button--disabled': disabled,
			},
			classObject,
		]">
		<slot />
	</button>
</template>

<style lang="scss">
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

	svg {
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

		svg path {
			fill: var(--main-color);
		}

		@media (prefers-color-scheme: dark) {
			color: var(--main-color-dark);

			svg path {
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

		svg {
			path {
				fill: var(--accent-color);
			}
		}

		@media (any-hover: hover) {
			&:hover {
				color: var(--white-color);
				background-color: var(--hover-color);

				svg {
					path {
						fill: var(--white-color);
					}
				}
			}
		}
	}

	&--light {
		color: var(--main-color);
		background-color: var(--rose-color);

		svg path {
			fill: var(--main-color);
		}

		@media (any-hover: hover) {
			&:hover {
				color: var(--white-color);

				svg path {
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
