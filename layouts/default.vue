<script setup>
gsap.config({
	nullTargetWarn: false,
})

useHead({
	htmlAttrs: {
		lang: 'ru',
	},
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} — Tresk Sites` : 'Tresk Sites'
	},
})
</script>

<template>
	<div>
		<Head>
			<Meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0" />
			<Meta name="description" content="Создание сайтов и веб-приложений любой сложности" />
		</Head>
		<NuxtLoadingIndicator color="#ff565c" />
		<div class="wrapper">
			<div class="wrapper__container">
				<LayoutHeader />
				<div class="inner">
					<LayoutNavigation />
					<div class="page">
						<main class="main">
							<slot />
						</main>
						<LayoutFooter />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
body {
	background-color: #f5f5f5;

	.lock & {
		overflow: hidden;
		overscroll-behavior: none;
		touch-action: none;
	}

	.dark-mode & {
		background-color: var(--black-color);
	}
}

[class*='__container'] {
	@if $maxWidthContainer > 0 {
		box-sizing: content-box;
		max-width: rem($maxWidthContainer);
		padding-right: rem(40);
		padding-left: rem(40);
		margin: 0 auto;

		@media (max-width: em(1199)) {
			padding-right: rem(20);
			padding-left: rem(20);
		}
	}
}

.inner {
	display: flex;
	gap: rem(20);
}

.page {
	display: flex;
	flex: 0 1 rem(1580);
	flex-direction: column;
	min-height: 100%;

	> main {
		flex: 1 1 auto;
	}
}

.layout-enter-active,
.layout-leave-active {
	transition: all 0.4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

.layout-enter-from,
.layout-leave-to {
	filter: grayscale(1) blur(2px);
	opacity: 0;
}
</style>
