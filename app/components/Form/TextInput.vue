<script setup lang="ts">
defineProps<{
    name?: string
    placeholder?: string
    type?: string
    modelValue?: string | number
    error?: any
    maska?: string
}>()

defineEmits<{
    (e: 'update:modelValue', value: string | number): void
    (e: 'clearErrors'): void
}>()
</script>

<template>
    <input
        v-maska="maska"
        :value="modelValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        autocomplete="off"
        :aria-invalid="error ? true : undefined"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @focus="$emit('clearErrors')"
    >
</template>

<style lang="scss" scoped>
input {
    width: 100%;
    font-weight: 500;
    line-height: 150%;
    color: var(--white-color);
    outline: none;
    background-color: transparent;

    @include adaptive-value('font-size', 14, 12);

    &::placeholder {
        color: var(--white-color);
        transition: opacity 0.3s ease-in-out;

        @media (prefers-color-scheme: dark) {
            color: var(--main-color);
        }
    }

    &:focus::placeholder {
        opacity: 0;
    }

    @media (prefers-color-scheme: dark) {
        color: var(--main-color);
    }
}
</style>
