<script setup>
const { appearBottom } = useAnimation()

onMounted(() => {
	appearBottom('.logos', { duration: 1 })
})
</script>

<template>
	<div class="logos spacer-60">
		<div class="logos__body">
			<div class="logos__item">
				<img src="/img/logos/schlumberger.svg" alt="" />
			</div>
			<div class="logos__item">
				<img src="/img/logos/fctyumen.svg" alt="" />
			</div>
			<div class="logos__item">
				<img src="/img/logos/happykids.svg" alt="" />
			</div>
			<div class="logos__item">
				<img src="/img/logos/rubin.svg" alt="" />
			</div>
			<div class="logos__item">
				<img src="/img/logos/ekst.svg" alt="" />
			</div>
			<div class="logos__item">
				<img src="/img/logos/legion.svg" alt="" />
			</div>
			<div class="logos__item">
				<img src="/img/logos/arena.svg" alt="" />
			</div>
			<div class="logos__item">
				<img src="/img/logos/ano.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.logos {
	// .logos__body
	&__body {
		display: flex;
		align-items: center;
		justify-content: center;

		@include adaptiveValue('gap', 20, 10);

		@media (max-width: em(1400)) {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}

		@media (max-width: $tablet) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: $mobile) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: $mobileSmall) {
			grid-template-columns: 1fr;
		}
	}

	// .logos__item
	&__item {
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
}
</style>
