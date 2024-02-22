<script setup>
const { appearLeft } = useAnimation()

onMounted(() => {
	appearLeft('.technology', {
		duration: 1.2,
		delay: 0.3,
	})
})
</script>

<template>
	<section class="technology">
		<div class="technology__wrapper">
			<div class="technology__body">
				<div class="technology__avatar">
					<NuxtPicture format="webp" src="/img/avatar.jpg" alt="Маским Треск" />
				</div>
				<div class="technology__info">
					<h3 class="technology__title">Современные технологии</h3>
					<p class="technology__description">
						Я люблю новые веб-технологии и всегда стараюсь применять их в разработке своих проектов
					</p>
				</div>
				<div class="technology__links">
					<a target="_blank" href="https://t.me/tresk">
						<UiButton wide><UiIconTelegram />Telegram</UiButton>
					</a>
					<a href="mailto:djtresk@gmail.com" class="technology__email">djtresk@gmail.com</a>
				</div>
			</div>
			<div class="technology__chips">
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
	</section>
</template>

<style lang="scss">
.technology {
	padding-right: rem(20);
	padding-left: rem(20);
	margin-bottom: rem(40);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 40, 20);
	@include adaptiveValue('padding-bottom', 40, 20);

	.dark-mode & {
		background-color: var(--white-color-dark);
	}

	// .technology__wrapper
	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: rem(30);
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .technology__body
	&__body {
		display: flex;
		align-items: center;

		@include adaptiveValue('gap', 40, 20);

		@media (max-width: $mobile) {
			flex-direction: column;
			align-items: center;
		}
	}

	// .technology__avatar
	&__avatar {
		position: relative;
		flex: 0 0 rem(160);
		width: rem(160);
		height: rem(160);
		overflow: hidden;
		border-radius: 50%;

		img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		@media (max-width: $mobile) {
			flex: 1 1 auto;
		}
	}

	// .technology__info
	&__info {
		display: flex;
		flex: 0 1 rem(520);
		flex-direction: column;
		gap: rem(8);
		align-items: flex-start;

		@media (max-width: $mobile) {
			flex: 1 1 auto;
			align-items: center;
			text-align: center;
		}
	}

	// .technology__description
	&__description {
		font-weight: 500;
		line-height: 150%;

		@include adaptiveValue('font-size', 16, 14);
	}

	// .technology__links
	&__links {
		display: flex;
		flex: 0 1 rem(237);
		flex-direction: column;
		gap: rem(20);
		align-items: center;

		@media (max-width: $mobile) {
			flex: 1 1 auto;
		}
	}

	// .technology__email
	&__email {
		font-weight: 600;
		line-height: 90%;
		text-decoration: underline;
		text-underline-offset: rem(4);
		transition: color 0.3s ease-in-out;

		@include adaptiveValue('font-size', 15, 12);

		@media (any-hover: hover) {
			&:hover {
				color: var(--accent-color);
			}
		}
	}

	// .technology__chips
	&__chips {
		display: flex;
		flex-wrap: wrap;
		gap: rem(6);
		align-items: center;
		justify-content: center;
	}
}
</style>
