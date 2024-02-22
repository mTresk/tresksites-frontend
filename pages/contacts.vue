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
					<a target="_blank" href="https://t.me/tresk">
						<UiButton light><UiIconTelegram />Написать в Telegram</UiButton></a
					>
					<a href="mailto:djtresk@gmail.com"
						><UiButton light><UiIconEmail />Написать на почту</UiButton></a
					>
				</div>
				<div class="contacts__info">
					<div class="contacts__block contacts-animate">
						<div class="contacts__label">Адрес</div>
						<p class="contacts__value">Территориально я нахожусь в г. Тюмень, но работаю по всей России</p>
					</div>
					<div class="contacts__block contacts-animate">
						<div class="contacts__label">Режим работы</div>
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
	padding: rem(60) rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	.dark-mode & {
		background-color: var(--white-color-dark);
	}

	// .contacts__wrapper
	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .contacts__text
	&__text {
		font-size: 22px;
		font-weight: 500;
		line-height: 145%;
	}

	// .contacts__links
	&__links {
		display: flex;
		gap: rem(8);
		align-items: center;
		margin-top: rem(20);
		margin-bottom: rem(60);
	}

	// .contacts__info
	&__info {
		display: flex;
		flex-direction: column;
		gap: rem(40);
	}

	// .contacts__block
	&__block {
		display: flex;
		flex-direction: column;
		gap: rem(8);
		align-items: flex-start;
	}

	// .contacts__label
	&__label {
		font-family: Montserrat, sans-serif;
		font-size: 22px;
		font-weight: 700;
		line-height: 145%;
	}

	// .contacts__value
	&__value {
		font-size: 16px;
		font-weight: 500;
		line-height: 150%;
	}
}
</style>
