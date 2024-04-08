<script setup lang="ts">
import { useInfiniteQuery } from '@tanstack/vue-query'

definePageMeta({
	pageTransition: {
		name: 'layout',
		mode: 'out-in',
	},
})

async function fetcher({ pageParam = 0 }) {
	const data = await useNuxtApp().$api<any>(`api/works?page=${pageParam}&perPage=5`)

	return {
		pageData: data?.data || [],
		cursor: pageParam === data?.meta.lastPage ? undefined : pageParam + 1,
	}
}

const {
	data: works,
	fetchNextPage,
	hasNextPage,
	isFetchingNextPage,
	suspense,
	isLoading,
} = useInfiniteQuery({
	queryKey: ['works'],
	queryFn: fetcher,
	getNextPageParam: (lastPage) => {
		return lastPage.cursor
	},
	initialPageParam: 0,
})

await suspense()

function nextPage() {
	fetchNextPage()
}
</script>

<template>
	<div>
		<Head>
			<Title>Работы</Title>
			<Meta name="description" content="Выполненные работы по верстке и программированию сайтов" />
		</Head>
		<Works :works="works as any" :is-loading="isLoading" />
		<div class="spacer-60">
			<UiButton v-if="hasNextPage" :disabled="isFetchingNextPage" transparent wide size="lg" @click="nextPage">
				{{ isFetchingNextPage ? 'Загружаем' : 'Показать еще' }}<UiIconArrowDown />
			</UiButton>
		</div>
		<Technology />
	</div>
</template>
