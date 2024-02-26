<script setup>
const { appearLeft } = useAnimation()

onMounted(() => {
	appearLeft('.contacts-animate')
})
</script>

<template>
	<div>
		<Head>
			<Title>Контакты</Title>
			<Meta name="description" content="Как со мной можно связаться" />
		</Head>
		<section class="contacts spacer-60 contacts-animate">
			<div class="contacts__wrapper">
				<h1 class="contacts__title spacer-20 contacts-animate">Лямзин Максим Владимирович</h1>
				<div class="contacts__text contacts-animate">ИНН: 720406450676</div>
				<div class="contacts__links contacts-animate">
					<a class="contacts__link" target="_blank" href="https://t.me/tresk">
						<UiButton light><UiIconTelegram />Написать в Telegram</UiButton></a
					>
					<a class="contacts__link" href="mailto:djtresk@gmail.com"
						><UiButton light><UiIconEmail />Написать на почту</UiButton></a
					>
				</div>
				<div class="contacts__info">
					<div class="contacts__block contacts-animate">
						<h4 class="contacts__label">Адрес</h4>
						<p class="contacts__value">Территориально я нахожусь в г. Тюмень, но работаю по всей России</p>
					</div>
					<div class="contacts__block contacts-animate">
						<h4 class="contacts__label">Режим работы</h4>
						<p class="contacts__value">Рабатаю, когда не сплю :)</p>
					</div>
				</div>
			</div>
		</section>
		<Logos />
		<Technology />
	</div>
</template>

<style lang="scss">
.contacts {
	padding-right: rem(20);
	padding-left: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	// .contacts__wrapper
	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .contacts__text
	&__text {
		font-weight: 500;
		line-height: 145%;

		@include adaptiveValue('font-size', 22, 16);
	}

	// .contacts__links
	&__links {
		display: flex;
		gap: rem(8);
		align-items: center;
		margin-top: rem(20);

		@include adaptiveValue('margin-bottom', 60, 20);

		@media (max-width: $mobileSmall) {
			flex-direction: column;
			width: 100%;
		}
	}

	&__link {
		@media (max-width: $mobileSmall) {
			width: 100%;

			button {
				width: 100%;
			}
		}
	}

	// .contacts__info
	&__info {
		display: flex;
		flex-direction: column;

		@include adaptiveValue('gap', 40, 20);
	}

	// .contacts__block
	&__block {
		display: flex;
		flex-direction: column;
		gap: rem(8);
		align-items: flex-start;
	}

	// .contacts__value
	&__value {
		font-weight: 500;
		line-height: 150%;

		@include adaptiveValue('font-size', 16, 14);
	}
}
</style>
