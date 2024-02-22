<script setup>
const { appearLeft } = useAnimation()

const fileInput = ref('')

const form = reactive({
	name: '',
	phone: '',
	email: '',
	message: '',
	attachment: '',
})

const setFile = () => {
	fileInput.value.closest('.file').querySelector('.file__text').textContent = fileInput.value.files[0].name
	form.attachment = fileInput.value.files[0]
}

const errors = ref()

const isFormSent = ref(false)

const clearForm = () => {
	form.name = ''
	form.phone = ''
	form.email = ''
	form.message = ''
	form.attachment = ''

	fileInput.value.closest('.file').querySelector('.file__text').textContent = 'Прикрепить бриф'

	isFormSent.value = true
}

const formSubmit = async () => {
	const formData = new FormData()

	formData.append('name', form.name)
	formData.append('phone', form.phone)
	formData.append('email', form.email)
	formData.append('message', form.message)
	formData.append('attachment', form.attachment)

	try {
		const response = await $fetch(`${useRuntimeConfig().public['backendUrl']}/api/order`, {
			method: 'post',
			body: formData,
			headers: {
				Accept: 'application/json',
			},
		})
		if (response) {
			clearForm()
		}
	} catch (error) {
		if (error) errors.value = error.response._data.errors
	}
}

onMounted(() => {
	appearLeft('.order-animate')
	appearLeft('.price-animate')
})
</script>

<template>
	<div>
		<Head>
			<Title>Заказать разработку</Title>
			<Meta name="description" content="Форма заказа и цены на мои услуги" />
		</Head>
		<section class="order spacer-60 order-animate">
			<div class="order__wrapper">
				<h1 class="order__title spacer-20 order-animate">Заказать разработку проекта</h1>
				<p class="order__description order-animate">
					Я занимаюсь версткой сайтов по дизайн-макетам, могу сам нарисовать дизайн, могу сделать вам полноценный сайт
					«под ключ». Еще я делаю программные интерфейсы для медиа-киосков и веб приложения. Давайте обсудим? Для
					наилучшего понимания вашей задачи, пожалуйста,
					<a href="/files/brief.doc" download="Бриф на разработку сайта">скачайте</a> и заполните бриф.
				</p>
				<form @submit.prevent="formSubmit()" action="#" class="order__form order-form order-animate">
					<div class="order-form__wrapper">
						<h2 class="order-form__title spacer-20">Свяжитесь со мной</h2>
						<div class="order-form__body">
							<label class="order-form__label">
								<input
									@focus="errors.name = ''"
									v-model="form.name"
									autocomplete="off"
									type="text"
									name="name"
									placeholder="Ваше имя *" />
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11 14.0619V20H13V14.0619C16.9463 14.554 20 17.9204 20 22H4C4 17.9204 7.05369 14.554 11 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"
										fill="white"
										fill-opacity="0.6" />
								</svg>
								<small v-if="errors?.name" class="order-form__error">{{ errors?.name[0] || '&nbsp;' }}</small>
							</label>
							<label class="order-form__label">
								<input
									@focus="errors.phone = ''"
									v-maska
									data-maska="+7 (###) ### ## ##"
									v-model="form.phone"
									autocomplete="off"
									type="tel"
									name="phone"
									placeholder="Ваш номер телефона *" />
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
										fill="white"
										fill-opacity="0.6" />
								</svg>
								<small v-if="errors?.phone" class="order-form__error">{{ errors?.phone[0] || '&nbsp;' }}</small>
							</label>
							<label class="order-form__label">
								<input
									@focus="errors.email = ''"
									v-model="form.email"
									autocomplete="off"
									type="email"
									name="email"
									placeholder="Ваш email" />
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"
										fill="white"
										fill-opacity="0.6" />
								</svg>
								<small v-if="errors?.email" class="order-form__error">{{ errors?.email[0] || '&nbsp;' }}</small>
							</label>
							<label class="order-form__label">
								<textarea
									@focus="errors.message = ''"
									v-model="form.message"
									name="message"
									placeholder="Ваш комментарий"></textarea>
								<small v-if="errors?.message" class="order-form__error">{{ errors?.message[0] || '&nbsp;' }}</small>
							</label>
						</div>
						<div class="order-form__footer">
							<label class="order-form__file file">
								<input @change="setFile()" ref="fileInput" type="file" name="file" />
								<span class="file__button"
									><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M14 13.5V8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8V13.5C6 17.0899 8.91015 20 12.5 20C16.0899 20 19 17.0899 19 13.5V4H21V13.5C21 18.1944 17.1944 22 12.5 22C7.80558 22 4 18.1944 4 13.5V8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8V13.5C16 15.433 14.433 17 12.5 17C10.567 17 9 15.433 9 13.5V8H11V13.5C11 14.3284 11.6716 15 12.5 15C13.3284 15 14 14.3284 14 13.5Z"
											fill="white" />
									</svg>
								</span>
								<span class="file__text">Прикрепить бриф</span>
								<small v-if="errors?.attachment" class="order-form__error">{{
									errors?.attachment[0] || '&nbsp;'
								}}</small>
							</label>
							<UiButton class="order-form__submit" :class="{ disabled: isFormSent }" inverted wide type="submit"
								>{{ isFormSent ? 'Сообщение отправлено' : 'Отправить сообщение' }}<UiIconArrowRight
							/></UiButton>
						</div>
						<p class="order-form__policy">
							Отправляя форму вы соглашаетесь с <NuxtLink to="/policy">политикой конфиденициальности</NuxtLink>
						</p>
					</div>
				</form>
			</div>
		</section>
		<section class="price spacer-60 price-animate">
			<div class="price__wrapper">
				<h2 class="price__title spacer-20 price-animate">Цены</h2>
				<p class="price__description price-animate">
					Указаны примерные цены. В каждом кейсе окончательная цена формируется после обсуждения и согласования деталей
					проекта.
				</p>
				<ul class="price__list price-animate">
					<li class="price__item">
						<p class="price__name">Верстка лендинга</p>
						<p class="price__value">от 15 000 ₽</p>
					</li>
					<li class="price__item">
						<p class="price__name">Верстка многостраничного сайта</p>
						<p class="price__value">от 25 000 ₽</p>
					</li>
					<li class="price__item">
						<p class="price__name">Дизайн-макет</p>
						<p class="price__value">от 20 000 ₽</p>
					</li>
					<li class="price__item">
						<p class="price__name">Разработка бэкенда (админ-панели)</p>
						<p class="price__value">от 25 000 ₽</p>
					</li>
					<li class="price__item">
						<p class="price__name">Сайт «под ключ»</p>
						<p class="price__value">от 50 000 ₽</p>
					</li>
					<li class="price__item">
						<p class="price__name">Поддержка</p>
						<p class="price__value">от 1500 ₽</p>
					</li>
				</ul>
			</div>
		</section>
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

.order-form {
	padding-right: rem(20);
	padding-left: rem(20);
	color: var(--white-color);
	background-color: var(--accent-color);
	border-radius: rem(12);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	@media (prefers-color-scheme: dark) {
		color: var(--main-color);
	}

	&__wrapper {
		max-width: rem(740);
		margin-inline: auto;
	}

	// .order-form__body
	&__body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: rem(8);

		@media (max-width: em(650)) {
			grid-template-columns: 1fr;
		}
	}

	// .order-form__label
	&__label {
		position: relative;
		display: flex;
		gap: rem(10);
		align-items: center;
		justify-content: space-between;
		padding: rem(13) rem(16) rem(13) rem(18);
		background-color: rgb(255 255 255 / 30%);
		border: 1px solid rgb(255 255 255 / 50%);
		border-radius: rem(16);
		transition: all 0.3s ease-in-out;

		&:nth-child(3),
		&:nth-child(4) {
			grid-column: span 2;

			@media (max-width: em(650)) {
				grid-column: span 1;
			}
		}

		svg {
			height: auto;

			@include adaptiveValue('max-width', 24, 20);

			path {
				transition: all 0.3s ease-in-out;
			}
		}

		input,
		textarea {
			width: 100%;
			font-weight: 500;
			line-height: 150%;
			color: var(--white-color);
			background-color: transparent;
			outline: none;

			@include adaptiveValue('font-size', 14, 12);

			&::placeholder {
				color: var(--white-color);
				transition: opacity 0.3s ease-in-out;

				@media (prefers-color-scheme: dark) {
					color: var(--main-color);
				}
			}

			&:focus::placeholder {
				opacity: 0;
			}

			@media (prefers-color-scheme: dark) {
				color: var(--main-color);
			}
		}

		textarea {
			height: rem(120);
			resize: none;
		}

		&:has(input:focus, textarea:focus) {
			border-color: var(--white-color);

			@media (prefers-color-scheme: dark) {
				border-color: var(--main-color);
			}

			svg {
				path {
					fill-opacity: 1;
				}
			}
		}

		&:has(.order-form__error) {
			border-color: red;
		}
	}

	// .order-form__footer
	&__footer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: rem(8);
		margin-top: rem(12);

		@media (max-width: em(650)) {
			display: flex;
			flex-direction: column;
			gap: rem(12);
		}
	}

	&__submit {
		&.disabled {
			pointer-events: none;
			opacity: 0.4;
		}
	}

	&__policy {
		margin-top: rem(20);
		font-size: 12px;
		line-height: 125%;
		color: var(--grey-color);
		text-align: center;
		text-underline-offset: rem(3);

		a {
			text-decoration: underline;
		}

		@include adaptiveValue('font-size', 12, 10);
	}

	&__error {
		position: absolute;
		top: rem(4);
		left: rem(18);
		font-size: rem(11);
		color: red;
	}
}

.file {
	display: flex;
	gap: rem(6);
	align-items: center;
	cursor: pointer;

	// .file__button
	&__button {
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			height: auto;

			@include adaptiveValue('max-width', 24, 28);
		}
	}

	// .file__text
	&__text {
		line-height: 150%;
		text-decoration: underline;
		text-underline-offset: rem(4);

		@include adaptiveValue('font-size', 14, 12);
	}

	input[type='file'] {
		position: absolute;
		z-index: -1;
		display: block;
		width: 0;
		height: 0;
		opacity: 0;
	}
}

.price {
	padding-right: rem(20);
	padding-left: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	.dark-mode & {
		background-color: var(--white-color-dark);
	}

	// .price__wrapper
	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .price__description
	&__description {
		font-weight: 500;
		line-height: 145%;

		@include adaptiveValue('font-size', 22, 16);
	}

	// .price__list
	&__list {
		display: flex;
		flex-direction: column;
		gap: rem(16);
		margin-top: rem(30);
	}

	// .price__item
	&__item {
		display: flex;
		gap: rem(30);
		align-items: flex-end;
		justify-content: space-between;
		overflow: hidden;
	}

	// .price__name
	&__name {
		position: relative;
		padding-right: rem(5);
		font-family: Montserrat, sans-serif;
		font-size: 18px;
		font-weight: 700;
		line-height: 150%;
		background-color: var(--white-color);

		@include adaptiveValue('font-size', 18, 14);

		&::before {
			position: absolute;
			bottom: -4px;
			left: 0;
			z-index: -1;
			font-weight: 400;
			color: var(--grey-color);
			white-space: nowrap;
			content: '------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------';

			.dark-mode & {
				color: var(--light-color-dark);
			}

			@include adaptiveValue('font-size', 12, 8);
		}
	}

	// .price__value
	&__value {
		position: relative;
		padding-left: rem(5);
		font-family: Montserrat, sans-serif;
		font-weight: 700;
		line-height: 150%;
		color: var(--accent-color);
		text-align: right;
		white-space: nowrap;
		background-color: var(--white-color);

		@include adaptiveValue('font-size', 18, 14);

		.dark-mode & {
			background-color: var(--white-color-dark);
		}
	}
}
</style>
