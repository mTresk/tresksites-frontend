<template>
	<div>
		<section class="work spacer-60">
			<div class="work__wrapper">
				<ul class="breadcrumb">
					<li class="breadcrumb__item"><NuxtLink to="/works">Работы</NuxtLink></li>
					<li class="breadcrumb__item breadcrumb__item--active">Сайт футбольного клуба «Тюмень»</li>
				</ul>
				<h1 class="work__title">Сайт футбольного клуба «Тюмень»</h1>
				<div class="work__list">
					<ul>
						<li>верстка по дизайн-макету</li>
						<li>бэкенд на Evolution CMS</li>
						<li>динамические компоненты на фреймворке vue.js</li>
					</ul>
				</div>
				<div class="work__block">
					<h2>Первый экран</h2>
					<p>
						Я занимаюсь версткой сайтов по дизайн-макетам, могу сам нарисовать дизайн, могу сделать вам полноценный сайт
						«под ключ». Еще я делаю программные интерфейсы для медиа-киосков и веб приложения.
					</p>
					<div class="work__image">
						<img src="/img/work/1.jpg" alt="" />
					</div>
				</div>
				<div class="work__block">
					<h2>Карточки последних новостей</h2>
					<p>
						Я занимаюсь версткой сайтов по дизайн-макетам, могу сам нарисовать дизайн, могу сделать вам полноценный сайт
						«под ключ». Еще я делаю программные интерфейсы для медиа-киосков и веб приложения.
					</p>
					<div class="work__image">
						<img src="/img/work/2.jpg" alt="" />
					</div>
				</div>
				<div class="work__block">
					<h2>Результаты</h2>
					<p>
						Я занимаюсь версткой сайтов по дизайн-макетам, могу сам нарисовать дизайн, могу сделать вам полноценный сайт
						«под ключ». Еще я делаю программные интерфейсы для медиа-киосков и веб приложения.
					</p>
					<div class="work__image">
						<img src="/img/work/3.jpg" alt="" />
					</div>
				</div>
				<div class="work__block">
					<h2>Ближайшие матчи</h2>
					<p>
						Я занимаюсь версткой сайтов по дизайн-макетам, могу сам нарисовать дизайн, могу сделать вам полноценный сайт
						«под ключ». Еще я делаю программные интерфейсы для медиа-киосков и веб приложения.
					</p>
					<div class="work__image">
						<img src="/img/work/4.jpg" alt="" />
					</div>
				</div>
				<div class="work__block">
					<h2>Раздел «Сезон»</h2>
					<p>
						Я занимаюсь версткой сайтов по дизайн-макетам, могу сам нарисовать дизайн, могу сделать вам полноценный сайт
						«под ключ». Еще я делаю программные интерфейсы для медиа-киосков и веб приложения.
					</p>
					<div class="work__image">
						<img src="/img/work/5.jpg" alt="" />
					</div>
				</div>
			</div>
		</section>
		<section class="featured-works">
			<h4 class="featured-works__title spacer-20">Еще работы</h4>
			<Works />
		</section>
		<div class="spacer-60">
			<NuxtLink to="/works">
				<UiButton transparent wide size="lg">Другие работы<UiIconArrowUp /></UiButton>
			</NuxtLink>
		</div>
		<Logos />
	</div>
</template>

<style lang="scss">
.work {
	padding: rem(60) rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	// .work__wrapper
	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .work__title
	&__title {
		margin-bottom: rem(20);
	}

	// .work__list
	&__list {
		margin-bottom: rem(40);

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

	// .work__block
	&__block {
		&:not(:last-child) {
			margin-bottom: rem(50);
		}

		h2 {
			margin-bottom: rem(20);
		}

		p {
			margin-bottom: rem(20);
			font-size: 16px;
			font-weight: 500;
			line-height: 150%;
		}
	}

	// .work__image
	&__image {
		margin-bottom: rem(20);
		overflow: hidden;
		border-radius: rem(12);

		&:not(:last-child) {
			margin-bottom: rem(50);
		}

		img {
			width: 100%;
			max-width: 100%;
		}
	}
}

.breadcrumb {
	display: flex;
	flex-wrap: wrap;
	row-gap: rem(6);
	align-items: center;
	margin-bottom: rem(30);

	// .breadcrumb__item
	&__item {
		position: relative;
		font-size: 16px;
		font-weight: 500;
		line-height: normal;
		color: var(--main-color);
		text-decoration: underline;
		transition: color 0.3s ease-in-out;

		&:not(:last-child) {
			margin-right: rem(38);
			white-space: nowrap;
		}

		// .breadcrumb__item--active
		&--active {
			color: var(--grey-color);
			text-decoration: none;
			pointer-events: none;
		}

		&::after {
			position: absolute;
			top: 9px;
			right: -24px;
			width: rem(6);
			height: rem(6);
			pointer-events: none;
			content: '';
			background-color: var(--accent-color);
			border-radius: 50%;
		}

		&:last-child {
			&::after {
				display: none;
			}
		}

		&:hover {
			color: var(--accent-color);
		}
	}
}
</style>
