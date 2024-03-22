<script setup lang="ts">
interface IProps {
	name: string
	logo: string
}

defineProps<IProps>()
</script>

<template>
	<div class="logo">
		<img width="160" height="35" :src="`/img/logos/${logo}.svg`" :alt="name">
	</div>
</template>

<style lang="scss" scoped>
.logo{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: rem(8) rem(30);
	background-color: var(--white-color);
	border-radius: rem(16);

	@include adaptiveValue('padding-top', 8, 12);
	@include adaptiveValue('padding-bottom', 8, 10);
	@include adaptiveValue('border-radius', 16, 10);

	@media (prefers-color-scheme: dark) {
		background-color: var(--main-color);
	}

	img {
		width: auto;
		max-height: rem(35);

		@include adaptiveValue('max-height', 35, 30);
	}
}
</style>
