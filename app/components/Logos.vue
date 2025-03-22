<script setup lang="ts">
import { logosItems } from '@/data/logos-data'

const { appearBottom } = useAnimation()

onMounted(() => {
    appearBottom('.logos', { duration: 1 })
})
</script>

<template>
    <div class="logos spacer-60">
        <div class="logos__body">
            <LogosItem v-for="logo in logosItems" :key="logo.name" :name="logo.name" :logo="logo.logo" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.logos {
    &__body {
        display: flex;
        align-items: center;
        justify-content: center;

        @include adaptive-value('gap', 20, 10);

        @media (max-width: em(1400)) {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width: $tablet) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: $mobile) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: $mobileSmall) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
