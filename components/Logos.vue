<script setup>
const { $gsap: gsap } = useNuxtApp()
const ctx = ref()

onMounted(() => {
	ctx.value = gsap.context(() => {
		gsap.from('.logos__body', {
			x: -20,
			opacity: 0,
			ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
			duration: 1,
			scrollTrigger: {
				trigger: '.logos__body',
			},
		})
	})
})

onUnmounted(() => {
	ctx.value.revert()
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
		gap: rem(20);
		align-items: center;
		justify-content: center;
	}

	// .logos__item
	&__item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: rem(8) rem(30);
		background-color: var(--white-color);
		border-radius: rem(16);

		img {
			width: auto;
			max-height: rem(35);
		}
	}
}
</style>
