<script setup lang="ts">
import type { IChip } from '@/types'

defineProps<{
    chip: IChip
}>()
</script>

<template>
    <div class="chip">
        <NuxtImg
            width="21"
            height="21"
            :src="`/img/chips/${chip.icon}.svg`"
            :alt="chip.title"
        />
        <span>{{ chip.title }}</span>
    </div>
</template>

<style lang="scss" scoped>
.chip {
    display: flex;
    gap: rem(8);
    align-items: center;
    justify-content: center;
    padding: rem(9) rem(14);
    background-color: var(--light-color);

    @include adaptive-value('border-radius', 16, 12);
    @include adaptive-value('gap', 8, 6);

    span {
        @include adaptive-value('font-size', 15, 12);
    }

    img {
        width: auto;

        @include adaptive-value('max-height', 20, 16);
    }
}
</style>
