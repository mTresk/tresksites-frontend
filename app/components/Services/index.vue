<script setup lang="ts">
import type { IServicesItem } from '@/types'
import { useQuery } from '@tanstack/vue-query'

const fetcher = async () => await useFetcher<IServicesItem[]>('/api/services')

const {
    isLoading,
    data: services,
    suspense,
} = useQuery({
    queryKey: ['services'],
    queryFn: fetcher,
})

await suspense()

const { appearLeft } = useAnimation()

onMounted(() => {
    appearLeft('.service-card', {
        stagger: 0.1,
    })
})
</script>

<template>
    <section class="services spacer-60">
        <UiSpinner v-if="isLoading" />
        <div v-if="!isLoading" class="services__body">
            <ServicesItem v-for="servicesItem in services" :key="servicesItem.id" :services-item="servicesItem" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.services {
    &__body {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        @include adaptive-value('gap', 20, 8);

        @media (max-width: em(1500)) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: $tablet) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: em(600)) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
