<script setup>
const { appearLeft } = useAnimation()

onMounted(() => {
	appearLeft('.services__body')
})
</script>

<template>
	<div>
		<Head>
			<Title>Услуги</Title>
			<Meta name="description" content="Что я могу вам предложить" />
		</Head>
		<section class="services spacer-60">
			<div class="services__body">
				<NuxtLink to="/order" class="service-card">
					<img class="service-card__icon" src="/img/services/1.svg" alt="Верстка лендинга" />
					<h5 class="service-card__title">Верстка лендинга</h5>
					<p class="service-card__description">
						Верстка одностраничного сайта по дизайн-макету. Работа занимает от 1 до 3 дней. Адаптив под все разрешения.
					</p>
					<svg
						class="service-card__arrow"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 10.53L11.03 13.53C10.88 13.68 10.69 13.75 10.5 13.75C10.31 13.75 10.12 13.68 9.97 13.53C9.68 13.24 9.68 12.76 9.97 12.47L11.69 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H11.69L9.97 7.53C9.68 7.24 9.68 6.76 9.97 6.47C10.26 6.18 10.74 6.18 11.03 6.47L14.03 9.47C14.32 9.76 14.32 10.24 14.03 10.53Z"
							fill="#323232"
							fill-opacity="0.3" />
					</svg>
				</NuxtLink>
				<NuxtLink to="/order" class="service-card">
					<img class="service-card__icon" src="/img/services/2.svg" alt="Верстка сайта" />
					<h5 class="service-card__title">Верстка сайта</h5>
					<p class="service-card__description">
						Верстка многостраничного сайта по дизайн-макету. Работа занимает от 5 дней до 2 недель.
					</p>
					<svg
						class="service-card__arrow"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 10.53L11.03 13.53C10.88 13.68 10.69 13.75 10.5 13.75C10.31 13.75 10.12 13.68 9.97 13.53C9.68 13.24 9.68 12.76 9.97 12.47L11.69 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H11.69L9.97 7.53C9.68 7.24 9.68 6.76 9.97 6.47C10.26 6.18 10.74 6.18 11.03 6.47L14.03 9.47C14.32 9.76 14.32 10.24 14.03 10.53Z"
							fill="#323232"
							fill-opacity="0.3" />
					</svg>
				</NuxtLink>
				<NuxtLink to="/order" class="service-card">
					<img class="service-card__icon" src="/img/services/3.svg" alt="Дизайн-макет" />
					<h5 class="service-card__title">Дизайн-макет</h5>
					<p class="service-card__description">
						Дизайн сайта или приложения в Figma. В дальнейшем по макету делается верстка проекта.
					</p>
					<svg
						class="service-card__arrow"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 10.53L11.03 13.53C10.88 13.68 10.69 13.75 10.5 13.75C10.31 13.75 10.12 13.68 9.97 13.53C9.68 13.24 9.68 12.76 9.97 12.47L11.69 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H11.69L9.97 7.53C9.68 7.24 9.68 6.76 9.97 6.47C10.26 6.18 10.74 6.18 11.03 6.47L14.03 9.47C14.32 9.76 14.32 10.24 14.03 10.53Z"
							fill="#323232"
							fill-opacity="0.3" />
					</svg>
				</NuxtLink>
				<NuxtLink to="/order" class="service-card">
					<img class="service-card__icon" src="/img/services/4.svg" alt="Разработка бэкенда" />
					<h5 class="service-card__title">Разработка бэкенда</h5>
					<p class="service-card__description">
						Программирование серверной части приложения, которая включает в себя удобную админ-панель для управления
						контентом.
					</p>
					<svg
						class="service-card__arrow"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 10.53L11.03 13.53C10.88 13.68 10.69 13.75 10.5 13.75C10.31 13.75 10.12 13.68 9.97 13.53C9.68 13.24 9.68 12.76 9.97 12.47L11.69 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H11.69L9.97 7.53C9.68 7.24 9.68 6.76 9.97 6.47C10.26 6.18 10.74 6.18 11.03 6.47L14.03 9.47C14.32 9.76 14.32 10.24 14.03 10.53Z"
							fill="#323232"
							fill-opacity="0.3" />
					</svg>
				</NuxtLink>
				<NuxtLink to="/order" class="service-card">
					<img class="service-card__icon" src="/img/services/5.svg" alt="Сайт «под ключ»" />
					<h5 class="service-card__title">Сайт «под ключ»</h5>
					<p class="service-card__description">
						Полный цикл создания сайта. От дизайна и программирования до начальной seo-оптимизации.
					</p>
					<svg
						class="service-card__arrow"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 10.53L11.03 13.53C10.88 13.68 10.69 13.75 10.5 13.75C10.31 13.75 10.12 13.68 9.97 13.53C9.68 13.24 9.68 12.76 9.97 12.47L11.69 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H11.69L9.97 7.53C9.68 7.24 9.68 6.76 9.97 6.47C10.26 6.18 10.74 6.18 11.03 6.47L14.03 9.47C14.32 9.76 14.32 10.24 14.03 10.53Z"
							fill="#323232"
							fill-opacity="0.3" />
					</svg>
				</NuxtLink>
				<NuxtLink to="/order" class="service-card">
					<img class="service-card__icon" src="/img/services/6.svg" alt="Поддержка" />
					<h5 class="service-card__title">Поддержка</h5>
					<p class="service-card__description">
						Поддержка и доработка существующих проектов. Возможна ежемесячная или почасовая оплата.
					</p>
					<svg
						class="service-card__arrow"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 10.53L11.03 13.53C10.88 13.68 10.69 13.75 10.5 13.75C10.31 13.75 10.12 13.68 9.97 13.53C9.68 13.24 9.68 12.76 9.97 12.47L11.69 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H11.69L9.97 7.53C9.68 7.24 9.68 6.76 9.97 6.47C10.26 6.18 10.74 6.18 11.03 6.47L14.03 9.47C14.32 9.76 14.32 10.24 14.03 10.53Z"
							fill="#323232"
							fill-opacity="0.3" />
					</svg>
				</NuxtLink>
			</div>
		</section>
	</div>
</template>

<style lang="scss">
.services {
	// .services__body
	&__body {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: rem(20);
	}
}

.service-card {
	position: relative;
	padding: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);
	transition: box-shadow 0.3s ease-in-out;

	@media (any-hover: hover) {
		&:hover {
			box-shadow: 0 8px 20px 0 rgb(0 0 0 / 8%);

			.service-card__arrow {
				path {
					fill-opacity: 0.6;
				}
			}
		}
	}

	// .service-card__icon
	&__icon {
		margin-bottom: rem(20);
	}

	// .service-card__title
	&__title {
		margin-bottom: rem(8);
	}

	// .service-card__description
	&__description {
		font-size: 16px;
		font-weight: 500;
		line-height: 150%;
	}

	// .service-card__arrow
	&__arrow {
		position: absolute;
		top: 15px;
		right: 15px;

		path {
			transition: fill-opacity 0.3s ease-in-out;

			@media (prefers-color-scheme: dark) {
				fill: var(--grey-color);
			}
		}
	}
}
</style>
