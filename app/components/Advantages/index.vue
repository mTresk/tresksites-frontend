<script setup lang="ts">
import type { IAdvantagesItem } from '@/types'
import { useQuery } from '@tanstack/vue-query'

const fetcher = async () => await useFetcher<IAdvantagesItem[]>('/api/advantages')

const {
    isLoading,
    data: advantages,
    suspense,
} = useQuery({
    queryKey: ['advantages'],
    queryFn: fetcher,
})

await suspense()

const { appearBottom, appearLeft } = useAnimation()

onMounted(() => {
    appearBottom('.advantages', { delay: 0.3 })
    appearLeft('.advantages-item', { stagger: 0.1, delay: 0.4 })
})
</script>

<template>
    <section class="advantages spacer-60">
        <UiSpinner v-if="isLoading" />
        <div
            v-if="!isLoading"
            class="advantages__body"
        >
            <AdvantagesItem
                v-for="advantagesItem in advantages"
                :key="advantagesItem.title"
                :advantages-item="advantagesItem"
            />
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

    @include adaptive-value('padding-left', 40, 20);
    @include adaptive-value('padding-right', 40, 20);

    &__body {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        @include adaptive-value('gap', 60, 24);

        @media (max-width: $mobile) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
