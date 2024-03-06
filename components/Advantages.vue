<script setup lang="ts">
const { appearBottom, appearLeft } = useAnimation()

onMounted(() => {
	appearBottom('.advantages', { delay: 0.3 })
	appearLeft('.advantages__item', { stagger: 0.1, delay: 0.4 })
})
</script>

<template>
	<section class="advantages spacer-60">
		<div class="advantages__body">
			<div class="advantages__item">
				<h2 class="advantages__title">
					&gt; 5 лет
				</h2>
				<p class="advantages__description">
					я занимаюсь создание сайтов и приложений
				</p>
			</div>
			<div class="advantages__item">
				<h2 class="advantages__title">
					&gt; 100 проектов
				</h2>
				<p class="advantages__description">
					по верстке макетов сайтов
				</p>
			</div>
			<div class="advantages__item">
				<h2 class="advantages__title">
					&gt; 15 сайтов
				</h2>
				<p class="advantages__description">
					полного цикла «под ключ»
				</p>
			</div>
			<div class="advantages__item">
				<h2 class="advantages__title">
					1-3 месяца
				</h2>
				<p class="advantages__description">
					до полной готовности сайта
				</p>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.advantages {
	padding-top: rem(20);
	padding-bottom: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-left', 40, 20);
	@include adaptiveValue('padding-right', 40, 20);

	// .advantages__body
	&__body {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		@include adaptiveValue('gap', 60, 24);

		@media (max-width: $mobile) {
			grid-template-columns: 1fr;
		}
	}

	// .advantages__item
	&__item {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		@include adaptiveValue('gap', 12, 10);

		&:not(:last-child) {
			&::before {
				position: absolute;
				top: 0;
				width: 1px;
				height: 100%;
				content: '';
				background-color: var(--light-color);

				@include adaptiveValue('right', -30, -12);

				@media (max-width: $mobile) {
					top: auto;
					right: auto;
					width: 100%;
					height: 1px;

					@include adaptiveValue('bottom', -30, -12);
				}
			}
		}
	}

	// .advantages__description
	&__description {
		margin-top: auto;
		font-weight: 500;
		line-height: 145%;

		@include adaptiveValue('font-size', 14, 12);
	}
}
</style>
