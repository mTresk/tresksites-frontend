<script setup lang="ts">
import type { ILogosItem } from '@/types'

defineProps<{
    logosItem: ILogosItem
}>()
</script>

<template>
    <div class="logo">
        <NuxtImg
            width="160"
            height="35"
            :src="`/img/logos/${logosItem.path}.svg`"
            :alt="logosItem.name"
        />
    </div>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: rem(8) rem(30);
    background-color: var(--white-color);
    border-radius: rem(16);

    @include adaptive-value('padding-top', 8, 12);
    @include adaptive-value('padding-bottom', 8, 10);
    @include adaptive-value('border-radius', 16, 10);

    @media (prefers-color-scheme: dark) {
        background-color: var(--main-color);
    }

    img {
        width: auto;
        max-height: rem(35);

        @include adaptive-value('max-height', 35, 30);
    }
}
</style>
