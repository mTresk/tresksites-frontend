<script setup>
const { appearBottom } = useAnimation()

onMounted(() => {
	appearBottom('.technology', { y: 30, duration: 1 })
})
</script>

<template>
	<section class="technology">
		<div class="technology__wrapper">
			<div class="technology__body">
				<div class="technology__avatar">
					<img src="/img/avatar.jpg" alt="Maxim Tresk" />
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
	padding: rem(40) rem(20);
	margin-bottom: rem(40);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

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
		gap: rem(40);
		align-items: center;
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
	}

	// .technology__info
	&__info {
		display: flex;
		flex: 0 1 rem(520);
		flex-direction: column;
		gap: rem(8);
		align-items: flex-start;
	}

	// .technology__description
	&__description {
		font-size: 16px;
		font-weight: 500;
		line-height: 150%;
	}

	// .technology__links
	&__links {
		display: flex;
		flex: 0 1 rem(237);
		flex-direction: column;
		gap: rem(20);
		align-items: center;
	}

	// .technology__email
	&__email {
		font-size: 15px;
		font-weight: 600;
		line-height: 90%;
		text-decoration: underline;
		text-underline-offset: rem(4);
		transition: color 0.3s ease-in-out;

		@media (any-hover: hover) {
			&:hover {
				color: var(--accent-color);
			}
		}
	}

	// .technology__chips
	&__chips {
		display: flex;
		gap: rem(6);
		align-items: center;
		justify-content: center;
	}
}
</style>
