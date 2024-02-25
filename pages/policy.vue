<script setup>
import { useQuery } from '@tanstack/vue-query'

const { appearLeft } = useAnimation()

const fetcher = async () => await useNuxtApp().$api('/api/policy')

const {
	isLoading,
	data: policy,
	suspense,
} = useQuery({
	queryKey: ['policy'],
	queryFn: fetcher,
})

await suspense()

onMounted(() => {
	appearLeft('.policy-animate')
})
</script>

<template>
	<div>
		<Head>
			<Title>{{ policy?.title }}</Title>
			<Meta name="description" content="Политика в отношении обработки персональных данных" />
		</Head>
		<section class="policy spacer-60">
			<UiSpinner v-if="isLoading" />
			<div v-if="!isLoading" class="policy__wrapper">
				<h1 class="policy__title spacer-20 policy-animate">{{ policy?.title }}</h1>
				<div v-html="policy?.content" class="policy__content content policy-animate"></div>
			</div>
		</section>
	</div>
</template>

<style lang="scss">
.policy {
	position: relative;
	padding-right: rem(20);
	padding-left: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	// .policy__wrapper
	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .policy__content
	&__content {
		max-width: rem(1000);
	}
}

.content {
	h2 {
		@include adaptiveValue('margin-bottom', 20, 16);
	}

	p {
		font-weight: 500;
		line-height: 150%;

		@include adaptiveValue('font-size', 16, 14);
		@include adaptiveValue('margin-bottom', 20, 16);
	}

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

	ul {
		@include adaptiveValue('margin-bottom', 20, 16);

		li {
			position: relative;
			padding-left: rem(16);
			font-weight: 500;
			line-height: 150%;

			@include adaptiveValue('font-size', 16, 14);

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
</style>
