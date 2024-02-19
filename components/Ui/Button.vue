<script setup>
const props = defineProps({
	transparent: Boolean,
	wide: Boolean,
	inverted: Boolean,
	light: Boolean,
	size: String,
})

const classObject = computed(() => (props.size ? `button--${props.size}` : ''))
</script>

<template>
	<button
		class="button"
		:class="[
			{
				'button--transparent': transparent,
				'button--wide': wide,
				'button--inverted': inverted,
				'button--light': light,
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
	padding: rem(12) rem(24);
	font-size: 15px;
	font-weight: 600;
	line-height: 90%;
	color: var(--white-color);
	background-color: var(--accent-color);
	border-radius: rem(16);
	transition: all 0.3s ease-in-out;

	svg {
		path {
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

		@media (any-hover: hover) {
			&:hover {
				background-color: var(--light-color);
			}
		}

		background-color: transparent;
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

		svg {
			path {
				fill: var(--accent-color);
			}
		}

		@media (any-hover: hover) {
			&:hover {
				background-color: var(--rose-color);
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
}
</style>
