<script setup>
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
				<h2 class="advantages__title">&gt; 5 лет</h2>
				<p class="advantages__description">я занимаюсь создание сайтов и приложений</p>
			</div>
			<div class="advantages__item">
				<h2 class="advantages__title">&gt; 100 проектов</h2>
				<p class="advantages__description">по верстке макетов сайтов</p>
			</div>
			<div class="advantages__item">
				<h2 class="advantages__title">&gt; 15 сайтов</h2>
				<p class="advantages__description">полного цикла «под ключ»</p>
			</div>
			<div class="advantages__item">
				<h2 class="advantages__title">1-3 месяца</h2>
				<p class="advantages__description">до полной готовности сайта</p>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.advantages {
	padding: rem(20) rem(40);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	.dark-mode & {
		background-color: var(--white-color-dark);
	}

	// .advantages__body
	&__body {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: rem(60);
	}

	// .advantages__item
	&__item {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: rem(12);
		align-items: flex-start;

		&:not(:last-child) {
			&::before {
				position: absolute;
				top: 0;
				right: -30px;
				width: 1px;
				height: 100%;
				content: '';
				background-color: var(--light-color);
			}
		}
	}

	// .advantages__description
	&__description {
		font-size: 14px;
		font-weight: 500;
		line-height: 145%;
	}
}
</style>
