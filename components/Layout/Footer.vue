<template>
	<Technology />
	<footer class="footer">
		<div class="footer__links">
			<NuxtLink to="/order">
				<UiButton transparent>Заказать сайт<UiIconArrowUp /></UiButton>
			</NuxtLink>
			<a href="#" download>
				<UiButton transparent>Скачать бриф<UiIconArrowDown /></UiButton>
			</a>
		</div>
		<p class="footer__copyright">© 2019–2024, Лямзин Максим Владимирович, ИНН: 720406450676</p>
	</footer>
</template>

<style lang="scss">
.footer {
	display: flex;
	flex-direction: column;
	gap: rem(20);
	align-items: center;
	padding-top: rem(20);
	padding-bottom: rem(20);
	border-top: 1px solid var(--light-color);

	.dark-mode & {
		border-color: var(--light-color-dark);
	}

	// .footer__links
	&__links {
		display: flex;
		gap: rem(20);
		align-items: center;
		justify-content: center;
	}

	// .footer__copyright
	&__copyright {
		font-size: 12px;
		line-height: 125%;
		color: rgb(50 50 50 / 30%);
		text-align: center;
		text-transform: uppercase;

		.dark-mode & {
			color: var(--grey-color-dark);
		}
	}
}
</style>
