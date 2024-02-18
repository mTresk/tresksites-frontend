<script setup>
useHead({
	htmlAttrs: {
		lang: 'ru',
	},
	titleTemplate: (titleChunk) => {
		return titleChunk ? `Tresk Sites — ${titleChunk}` : 'Tresk Sites'
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
			<LayoutHeader />
			<div class="wrapper__container">
				<div class="inner">
					<LayoutNavigation />
					<main class="page">
						<slot />
					</main>
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
}

[class*='__container'] {
	@if $maxWidthContainer > 0 {
		box-sizing: content-box;
		max-width: rem($maxWidthContainer);
		padding-right: rem(20);
		padding-left: rem(20);
		margin: 0 auto;
	}
}

.wrapper {
	display: flex;
	flex-direction: column;
	min-height: 100%;
	overflow: hidden;

	&__container {
		width: 100%;
	}

	> main {
		flex: 1 1 auto;
	}
}

.inner {
	display: flex;
	gap: rem(20);
}

.page {
	flex: 0 1 rem(1580);
}
</style>
