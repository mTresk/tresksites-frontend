<script setup lang="ts">
import type { IPrice } from '@/types'
import { useQuery } from '@tanstack/vue-query'

const fetcher = async () => await useFetcher<IPrice>('/api/prices')

const {
    isLoading,
    data: prices,
    suspense,
} = useQuery({
    queryKey: ['prices'],
    queryFn: fetcher,
})

await suspense()
</script>

<template>
    <section class="price spacer-60 price-animate">
        <UiSpinner v-if="isLoading" />
        <div
            v-if="!isLoading"
            class="price__wrapper"
        >
            <h2 class="price__title spacer-20 price-animate">
                {{ prices?.title }}
            </h2>
            <p class="price__description price-animate">
                {{ prices?.description }}
            </p>
            <ul class="price__list price-animate">
                <PricesItem
                    v-for="pricesItem in prices?.items"
                    :key="pricesItem.service"
                    :prices-item="pricesItem"
                />
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.price {
    padding-right: rem(20);
    padding-left: rem(20);
    background-color: var(--white-color);
    border-radius: rem(20);
    box-shadow: 0 rem(8) rem(20) 0 rgb(0 0 0 / 1%);

    @include adaptive-value('padding-top', 60, 40);
    @include adaptive-value('padding-bottom', 60, 40);

    .dark-mode & {
        background-color: var(--white-color-dark);
    }

    &__wrapper {
        max-width: rem(1000);
        margin-inline: auto;
    }

    &__description {
        font-weight: 500;
        line-height: 145%;

        @include adaptive-value('font-size', 22, 16);
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: rem(16);
        margin-top: rem(30);
    }
}
</style>
