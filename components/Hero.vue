<script setup>
const { $gsap: gsap } = useNuxtApp()
const ctx = ref()

onMounted(() => {
	ctx.value = gsap.context(() => {
		gsap.from('.animate', {
			x: -20,
			opacity: 0,
			ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
			stagger: 0.2,
			duration: 0.8,
			scrollTrigger: {
				trigger: '.animate',
			},
		})
		gsap.from('.hero__image', {
			x: -20,
			opacity: 0,
			ease: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
			delay: 0.3,
			duration: 0.8,
			scrollTrigger: {
				trigger: '.hero__image',
			},
		})
	})
})

onUnmounted(() => {
	ctx.value.revert()
})
</script>

<template>
	<section class="hero spacer-60">
		<div class="hero__body">
			<div class="hero__content animate">
				<h1 class="hero__title spacer-20 animate">Создание сайтов и веб-приложений любой сложности</h1>
				<p class="hero__description animate">
					Меня зовут Максим. С 2019 года я занимаюсь веб-разработкой. Сделано более 70 проектов по верстке сайтов и
					около десятка «под ключ». Полный цикл создания сайтов. Поддержка и сопровождение.
				</p>
				<div class="hero__chips animate">
					<div class="chip">
						<img src="/img/chips/html.svg" alt="HTML5" />
						<span>HTML5</span>
					</div>
					<div class="chip">
						<img src="/img/chips/css.svg" alt="CSS" />
						<span>CSS</span>
					</div>
					<div class="chip">
						<img src="/img/chips/vite.svg" alt="Vite" />
						<span>Vite</span>
					</div>
					<div class="chip">
						<img src="/img/chips/js.svg" alt="JavaScript" />
						<span>JavaScript</span>
					</div>
					<div class="chip">
						<img src="/img/chips/php.svg" alt="PHP" />
						<span>PHP</span>
					</div>
					<div class="chip">
						<img src="/img/chips/vue.svg" alt="Vue.js" />
						<span>Vue.js</span>
					</div>
					<div class="chip">
						<img src="/img/chips/nuxt.svg" alt="Nuxt" />
						<span>Nuxt</span>
					</div>
					<div class="chip">
						<img src="/img/chips/laravel.svg" alt="Laravel" />
						<span>Laravel</span>
					</div>
					<div class="chip">
						<img src="/img/chips/nest.svg" alt="NestJS" />
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
		gap: rem(40);
		align-items: center;
		justify-content: space-between;
	}

	// .hero__content
	&__content {
		flex: 0 1 rem(760);
		padding: rem(50) rem(40);
		background-color: var(--white-color);
		border-radius: rem(20);
		box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);
	}

	// .hero__description
	&__description {
		margin-bottom: rem(40);
		font-size: 22px;
		font-weight: 500;
		line-height: 145%;
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

		img {
			width: 100%;
			max-width: 100%;
			height: auto;
		}
	}
}
</style>
