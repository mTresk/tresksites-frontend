<script setup lang="ts">
import type { IWorkTag } from '@/types'

defineProps<{
    tag: IWorkTag
    href?: string
}>()
</script>

<template>
    <NuxtLink :to="`/tags/${tag.slug}`" class="tag">
        {{ tag.name }}
    </NuxtLink>
</template>

<style lang="scss" scoped>
.tag {
    padding: rem(4) rem(8);
    font-size: rem(10);
    white-space: nowrap;
    background-color: var(--light-color);
    border-radius: rem(10);
    transition: all 0.3s ease-in-out;

    @media (any-hover: hover) {
        &:hover {
            color: var(--white-color);
            background-color: var(--hover-color);
        }
    }
}
</style>
