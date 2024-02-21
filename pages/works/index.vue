<script setup>
import { useInfiniteQuery } from '@tanstack/vue-query'

const fetcher = async ({ pageParam = 1 }) => {
	const data = await $fetch(`${useRuntimeConfig().public['backendUrl']}/api/works?page=${pageParam}`)

	return {
		pageData: data?.data || [],
		cursor: pageParam === data?.meta.last_page ? undefined : data?.meta.current_page + 1,
	}
}

const {
	data: works,
	fetchNextPage,
	hasNextPage,
	isLoading,
} = useInfiniteQuery({
	queryKey: ['works'],
	queryFn: fetcher,
	getNextPageParam: (lastPage) => {
		return lastPage.cursor
	},
})

const nextPage = () => {
	fetchNextPage()
}
</script>

<template>
	<div>
		<Head>
			<Title>Работы</Title>
			<Meta name="description" content="Выполненные работы по верстке и программированию сайтов" />
		</Head>
		<Works :works="works" />
		<div class="spacer-60">
			<UiButton v-if="hasNextPage" @click="nextPage" transparent wide size="lg"
				>Показать еще<UiIconArrowDown
			/></UiButton>
		</div>
	</div>
</template>
