<script setup lang="ts">
import type { IWork } from '@/types'
import { useQuery } from '@tanstack/vue-query'

definePageMeta({
    pageTransition: {
        name: 'layout',
        mode: 'out-in',
    },
})

const fetcher = async () => await useNuxtApp().$api<IWork[]>('/api/works/featured')

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
        <Works :works="works as IWork[]" :is-loading="isLoading" />
        <div v-if="!isLoading" class="spacer-60">
            <UiButton href="/works" transparent wide size="lg">
                Другие работы<UiIconArrowUp />
            </UiButton>
        </div>
        <LazyTechnology />
    </div>
</template>
