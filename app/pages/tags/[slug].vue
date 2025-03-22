<script setup lang="ts">
import type { ApiResponse, IWork, WorksResponse } from '@/types'
import { useInfiniteQuery } from '@tanstack/vue-query'

definePageMeta({
    pageTransition: {
        name: 'layout',
        mode: 'out-in',
    },
})

const route = useRoute()

async function fetcher({ pageParam = 1 }): Promise<WorksResponse> {
    const data = await useNuxtApp().$api<ApiResponse<IWork[]>>(`api/tags/${route.params.slug}?page=${pageParam}`)

    return {
        pageData: data?.data || [],
        cursor: pageParam === data?.meta.last_page ? undefined : data?.meta.current_page + 1,
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
    queryKey: [route.params.slug],
    queryFn: fetcher,
    getNextPageParam: (lastPage) => {
        return lastPage.cursor
    },
    initialPageParam: 1,
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
        <Works :works="works!" :is-loading="isLoading" />
        <div class="spacer-60">
            <UiButton v-if="hasNextPage" :disabled="isFetchingNextPage" transparent wide size="lg" @click="nextPage">
                {{ isFetchingNextPage ? 'Загружаем' : 'Показать еще' }}<UiIconArrowDown />
            </UiButton>
        </div>
        <Technology />
    </div>
</template>
