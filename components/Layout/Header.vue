<template>
	<header class="header">
		<div class="header__container">
			<div class="header__body">
				<div class="header__left">
					<NuxtLink to="/" class="header__logo">
						<img src="/img/logo.svg" alt="Tresk Sites" />
					</NuxtLink>
					<NuxtLink to="#">
						<UiButton transparent>Заказать сайт <UiIconArrowUp /></UiButton>
					</NuxtLink>
				</div>
				<div class="header__right">
					<div class="header__person">
						<div class="header__avatar">
							<img src="/img/avatar.jpg" alt="Маским Треск" />
						</div>
						<a href="mailto:djtresk@gmail.com" class="header__email">djtresk@gmail.com</a>
					</div>
					<NuxtLink to="#">
						<UiButton><UiIconTelegram />Telegram</UiButton>
					</NuxtLink>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
.header {
	padding-top: rem(40);
	padding-bottom: rem(20);

	// .header__body
	&__body {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	// .header__left
	&__left {
		display: flex;
		gap: rem(25);
		align-items: center;
	}

	// // .header__logo
	// &__logo {
	// }

	// .header__right
	&__right {
		display: flex;
		gap: rem(40);
		align-items: center;
	}

	// .header__person
	&__person {
		display: flex;
		gap: rem(10);
		align-items: center;
	}

	// .header__avatar
	&__avatar {
		position: relative;
		width: rem(44);
		height: rem(44);
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

	// .header__email
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
}
</style>
