<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import type { IPolicy } from '@/types'

definePageMeta({
	pageTransition: {
		name: 'layout',
		mode: 'out-in',
	},
})

const { appearLeft } = useAnimation()

const fetcher = async () => await useNuxtApp().$api<IPolicy>('/api/policy')

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
				<h1 class="policy__title spacer-20 policy-animate">
					{{ policy?.title }}
				</h1>
				<div class="policy__content content policy-animate" v-html="policy?.content" />
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.policy {
	position: relative;
	padding-right: rem(20);
	padding-left: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	&__content {
		max-width: rem(1000);
	}
}
</style>
