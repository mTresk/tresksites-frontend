<script setup lang="ts">
const { appearLeft } = useAnimation()

onMounted(() => {
	appearLeft('.hero-animate')
	appearLeft('.hero__image', { delay: 0.3 })
})
</script>

<template>
	<section class="hero spacer-60">
		<div class="hero__body">
			<div class="hero__content hero-animate">
				<h1 class="hero__title spacer-20 hero-animate">
					Создание сайтов и веб-приложений любой сложности
				</h1>
				<p class="hero__description hero-animate">
					Меня зовут Максим. С 2019 года я занимаюсь веб-разработкой. Сделано более 70 проектов по верстке сайтов и
					около десятка «под ключ». Полный цикл создания сайтов. Поддержка и сопровождение.
				</p>
				<div class="hero__chips hero-animate">
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/html.svg" alt="HTML5"
						>
						<span>HTML5</span>
					</div>
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/css.svg" alt="CSS"
						>
						<span>CSS</span>
					</div>
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/vite.svg" alt="Vite"
						>
						<span>Vite</span>
					</div>
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/js.svg" alt="JavaScript"
						>
						<span>JavaScript</span>
					</div>
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/php.svg" alt="PHP"
						>
						<span>PHP</span>
					</div>
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/vue.svg" alt="Vue.js"
						>
						<span>Vue.js</span>
					</div>
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/nuxt.svg" alt="Nuxt"
						>
						<span>Nuxt</span>
					</div>
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/laravel.svg" alt="Laravel"
						>
						<span>Laravel</span>
					</div>
					<div class="chip">
						<img
							width="21"
							height="21" src="/img/chips/nest.svg" alt="NestJS"
						>
						<span>NestJS</span>
					</div>
				</div>
			</div>
			<div class="hero__image">
				<NuxtPicture format="webp" src="/img/hero.png" alt="Фоновое изображение" />
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.hero {
	// .hero__body
	&__body {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@include adaptiveValue('gap', 40, 20);

		@media (max-width: $tablet) {
			flex-direction: column-reverse;
		}
	}

	// .hero__content
	&__content {
		flex: 0 1 rem(760);
		background-color: var(--white-color);
		border-radius: rem(20);
		box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

		@include adaptiveValue('padding-top', 50, 20);
		@include adaptiveValue('padding-bottom', 50, 20);
		@include adaptiveValue('padding-left', 40, 20);
		@include adaptiveValue('padding-right', 40, 20);

		@media (max-width: $tablet) {
			flex: 1 1 auto;
		}
	}

	// .hero__description
	&__description {
		font-weight: 500;
		line-height: 145%;

		@include adaptiveValue('font-size', 22, 14);
		@include adaptiveValue('margin-bottom', 40, 32);
	}

	// .hero__chips
	&__chips {
		display: flex;
		flex-wrap: wrap;
		gap: rem(6);
	}

	// .hero__image
	&__image {
		flex: 0 1 rem(760);
		min-width: rem(450);

		img,
		picture {
			display: block;
			width: 100%;
			max-width: 100%;
			height: auto;
		}

		@media (max-width: $tablet) {
			flex: 1 1 auto;
			width: 100%;
			min-width: auto;
		}
	}
}
</style>
