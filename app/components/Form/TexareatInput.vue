<script setup lang="ts">
defineProps<{
    label: string
    name: string
    placeholder: string
    type: string
    modelValue: string
    error: any
}>()

defineEmits<{
    (e: 'update:modelValue', value: string | number): void
    (e: 'clearErrors'): void
}>()
</script>

<template>
    <textarea
        :value="modelValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        autocomplete="off"
        :aria-invalid="error ? true : undefined"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @focus="$emit('clearErrors')"
    />
</template>

<style lang="scss" scoped>
textarea {
    width: 100%;
    height: rem(120);
    font-weight: 500;
    line-height: 150%;
    color: var(--white-color);
    resize: none;
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
