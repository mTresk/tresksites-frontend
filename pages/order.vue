<script setup>
import { useQuery } from '@tanstack/vue-query'

const { appearLeft } = useAnimation()

const contacts = useState('contacts')

const fetcher = async () => await useNuxtApp().$api('/api/prices')

const {
	isLoading,
	data: prices,
	suspense,
} = useQuery({
	queryKey: ['prices'],
	queryFn: fetcher,
})

await suspense()

onMounted(() => {
	appearLeft('.order-animate')
	appearLeft('.price-animate')
})
</script>

<template>
	<div>
		<Head>
			<Title>Заказать разработку</Title>
			<Meta name="description" content="Форма заказа и цены на услуги" />
		</Head>
		<section class="order spacer-60 order-animate">
			<div class="order__wrapper">
				<h1 class="order__title spacer-20 order-animate">
					Заказать разработку проекта
				</h1>
				<p class="order__description order-animate">
					Я занимаюсь версткой сайтов по дизайн-макетам, могу сам нарисовать дизайн, могу сделать вам полноценный сайт
					«под ключ». Еще я делаю программные интерфейсы для медиа-киосков и веб приложения. Давайте обсудим? Для
					наилучшего понимания вашей задачи, пожалуйста,
					<a :href="contacts?.brief" download="Бриф на разработку сайта">скачайте</a> и заполните бриф.
				</p>
				<Form class="order-animate" />
			</div>
		</section>
		<Prices :prices="prices" :is-loading="isLoading" class="price-animate" />
		<Technology />
	</div>
</template>

<style lang="scss">
.order {
	padding-right: rem(20);
	padding-left: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	// .order__wrapper
	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .order__description
	&__description {
		margin-bottom: rem(40);
		font-weight: 500;
		line-height: 145%;

		@include adaptiveValue('font-size', 22, 16);

		a {
			color: var(--accent-color);
			text-decoration: underline;
			text-underline-offset: rem(4);
			transition: color 0.3s ease-in-out;

			@media (any-hover: hover) {
				&:hover {
					color: var(--hover-color);
				}
			}
		}
	}
}
</style>
