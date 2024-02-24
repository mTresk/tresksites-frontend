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

const nuxtApp = useNuxtApp()

const isLoading = ref(true)

const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value

	isMenuOpen.value
		? document.documentElement.classList.add('menu-open')
		: document.documentElement.classList.remove('menu-open')
}

const closeMenu = () => {
	isMenuOpen.value = false

	document.documentElement.classList.remove('menu-open')
}

nuxtApp.hook('page:loading:end', () => {
	isLoading.value = false
})
</script>

<template>
	<div>
		<Head>
			<Meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0" />
			<Meta name="description" content="Создание сайтов и веб-приложений любой сложности" />
			<!-- Favicon -->
			<Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			<Meta name="msapplication-TileColor" content="#da532c" />
			<Meta name="theme-color" content="#ffffff" />
			<!-- FB meta -->
			<Meta property="og:description" content="Создание сайтов и веб-приложений любой сложности" />
			<Meta property="og:image" content="/img/og.png" />
			<!-- Twitter meta -->
			<Meta name="twitter:description" content="Создание сайтов и веб-приложений любой сложности" />
			<Meta name="twitter:image" content="/img/og.png" />
		</Head>
		<NuxtLoadingIndicator color="#ff565c" />
		<div class="wrapper">
			<div class="wrapper__container">
				<LayoutHeader @toggleMenu="toggleMenu" />
				<div class="inner">
					<LayoutNavigation @closeMenu="closeMenu" />
					<UiSpinner v-if="isLoading" />
					<div v-show="!isLoading" class="page">
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

	.menu-open & {
		overflow: hidden;
		overscroll-behavior: none;
		touch-action: none;
	}

	@media (prefers-color-scheme: dark) {
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

.wrapper {
	&__container {
		@media (max-width: em(1199)) {
			padding: 0;
		}
	}
}

.inner {
	display: flex;
	gap: rem(20);

	@media (max-width: em(1199)) {
		display: block;
		padding-inline: rem(20);
		padding-top: rem(80);
	}

	@media (max-width: $mobileSmall) {
		padding-inline: rem(10);
	}
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

.chip {
	display: flex;
	gap: rem(8);
	align-items: center;
	justify-content: center;
	padding: rem(9) rem(14);
	background-color: var(--light-color);

	@include adaptiveValue('border-radius', 16, 12);
	@include adaptiveValue('gap', 8, 6);

	span {
		@include adaptiveValue('font-size', 15, 12);
	}

	img {
		width: auto;

		@include adaptiveValue('max-height', 20, 16);
	}
}
</style>
