<template>
	<section class="works spacer-60">
		<div class="works__body">
			<article @click="() => navigateTo('/works/1')" class="work-card">
				<div class="work-card__image">
					<img src="/img/works/1.jpg" alt="" />
				</div>
				<div class="work-card__content">
					<div class="work-card__label">
						<a href="https://fc-tyumen.ru" target="_blank">https://fc-tyumen.ru</a>
					</div>
					<h4 class="work-card__title spacer-20">Футбольный клуб «Тюмень»</h4>
					<div class="work-card__info">
						<ul>
							<li>верстка по дизайн-макету</li>
							<li>бэкенд на Evolution CMS</li>
							<li>динамические компоненты на фреймворке vue.js</li>
						</ul>
					</div>
					<NuxtLink to="/works/1">
						<UiButton>Посмотреть работу<UiIconArrowRight /></UiButton
					></NuxtLink>
				</div>
			</article>
			<article @click="() => navigateTo('/works/1')" class="work-card">
				<div class="work-card__image">
					<img src="/img/works/2.jpg" alt="" />
				</div>
				<div class="work-card__content">
					<div class="work-card__label"><span>Интерфейс медиа-центра</span></div>
					<h4 class="work-card__title spacer-20">Сибирский Тренинговый Центр</h4>
					<div class="work-card__info">
						<ul>
							<li>дизайн-макет</li>
							<li>верстка по дизайн-макету</li>
							<li>фронтенд на фреймворке Vue.js</li>
							<li>бэкенд на фреймворке Laravel</li>
						</ul>
					</div>
					<NuxtLink to="/works/1">
						<UiButton>Посмотреть работу<UiIconArrowRight /></UiButton
					></NuxtLink>
				</div>
			</article>
			<article @click="() => navigateTo('/works/1')" class="work-card">
				<div class="work-card__image">
					<img src="/img/works/3.jpg" alt="" />
				</div>
				<div class="work-card__content">
					<div class="work-card__label">
						<a href="https://ekst.ru" target="_blank">https://ekst.ru</a>
					</div>
					<h4 class="work-card__title spacer-20">Институт Электрокаплеструйных Технологий</h4>
					<div class="work-card__info">
						<ul>
							<li>дизайн-макет</li>
							<li>верстка по дизайн-макету</li>
							<li>бэкенд на фреймворке Laravel</li>
							<li>динамические формы на фреймворке vue.js</li>
						</ul>
					</div>
					<NuxtLink to="/works/1">
						<UiButton>Посмотреть работу<UiIconArrowRight /></UiButton
					></NuxtLink>
				</div>
			</article>
			<article @click="() => navigateTo('/works/1')" class="work-card">
				<div class="work-card__image">
					<img src="/img/works/4.jpg" alt="" />
				</div>
				<div class="work-card__content">
					<div class="work-card__label">
						<a href="https://pushkin.maximtresk.ru" target="_blank">https://pushkin.maximtresk.ru</a>
					</div>
					<h4 class="work-card__title spacer-20">Стартап-студия Pushkin</h4>
					<div class="work-card__info">
						<ul>
							<li>верстка по дизайн-макету</li>
							<li>GSAP анимации</li>
						</ul>
					</div>
					<NuxtLink to="/works/1">
						<UiButton>Посмотреть работу<UiIconArrowRight /></UiButton
					></NuxtLink>
				</div>
			</article>
			<article @click="() => navigateTo('/works/1')" class="work-card">
				<div class="work-card__image">
					<img src="/img/works/5.jpg" alt="" />
				</div>
				<div class="work-card__content">
					<div class="work-card__label">
						<a href="https://счастливые-дети.рф" target="_blank">https://счастливые-дети.рф</a>
					</div>
					<h4 class="work-card__title spacer-20">Семейная прогрессивная школа «Счастливые дети»</h4>
					<div class="work-card__info">
						<ul>
							<li>дизайн-макет</li>
							<li>верстка по дизайн-макету</li>
							<li>бэкенд на фреймворке Laravel</li>
							<li>динамические формы на фреймворке vue.js</li>
						</ul>
					</div>
					<NuxtLink to="/works/1">
						<UiButton>Посмотреть работу<UiIconArrowRight /></UiButton
					></NuxtLink>
				</div>
			</article>
		</div>
	</section>
</template>

<style lang="scss">
.works {
	// .works__body
	&__body {
		display: flex;
		flex-direction: column;
		gap: rem(20);
	}
}

.work-card {
	display: flex;
	gap: rem(40);
	align-items: center;
	justify-content: space-between;
	padding: rem(20) rem(40) rem(20) rem(20);
	cursor: pointer;
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	// .work-card__image
	&__image {
		position: relative;
		flex: 0 1 rem(1058);
		aspect-ratio: 1920 / 1080;
		overflow: hidden;
		border-top-left-radius: rem(12);
		border-bottom-left-radius: rem(12);

		img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&::before {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 5;
			width: 70%;
			height: 100%;
			content: '';
			background: linear-gradient(271deg, #fff 0%, rgb(217 217 217 / 0%) 100%);
		}
	}

	// .work-card__content
	&__content {
		flex: 0 1 rem(422);
	}

	// .work-card__label
	&__label {
		display: block;
		margin-bottom: rem(8);
		font-size: 14px;
		line-height: 125%;

		a {
			text-decoration: underline;
			text-underline-offset: rem(4);
			transition: color 0.3s ease-in-out;

			@media (any-hover: hover) {
				&:hover {
					color: var(--accent-color);
				}
			}
		}
	}

	// .work-card__info
	&__info {
		margin-bottom: rem(20);

		ul {
			li {
				position: relative;
				padding-left: rem(16);
				font-size: 16px;
				font-weight: 500;
				line-height: 150%;

				&::before {
					position: absolute;
					top: 10px;
					left: 0;
					width: rem(6);
					height: rem(6);
					content: '';
					background-color: var(--accent-color);
					border-radius: 50%;
				}
			}
		}
	}
}
</style>
