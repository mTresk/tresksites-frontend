<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

definePageMeta({
	pageTransition: {
		name: 'layout',
		mode: 'out-in',
	},
})

const fetcher = async () => await useNuxtApp().$api('/api/works/featured')

const {
	isLoading,
	data: works,
	suspense,
} = useQuery({
	queryKey: ['featured'],
	queryFn: fetcher,
})

await suspense()
</script>

<template>
	<div>
		<Head>
			<Title>Создание сайтов и веб-приложений любой сложности</Title>
			<Meta name="description" content="Полный цикл создания сайтов. Поддержка и сопровождение." />
		</Head>
		<Hero />
		<Advantages />
		<Logos />
		<Works :works="works as any" :is-loading="isLoading" />
		<div class="spacer-60">
			<UiButton href="/works" transparent wide size="lg">
				Другие работы<UiIconArrowUp />
			</UiButton>
		</div>
		<LazyTechnology />
	</div>
</template>
