<script setup>
defineProps({
	transparent: Boolean,
})
</script>

<template>
	<button class="button" :class="{ 'button--transparent': transparent }">
		<slot />
	</button>
</template>

<style lang="scss">
.button {
	display: flex;
	gap: rem(12);
	align-items: center;
	padding: rem(12) rem(24);
	color: var(--white-color);
	background-color: var(--accent-color);
	border-radius: rem(16);
	transition: all 0.3s ease-in-out;

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
}
</style>
