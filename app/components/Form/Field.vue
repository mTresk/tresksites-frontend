<script setup lang="ts">
import { FormTexareatInput, FormTextInput } from '#components'

const props = defineProps<{
    label: string
    name: string
    placeholder: string
    type: string
    modelValue: string
    error?: any
    maska?: string
}>()

defineEmits<{
    (e: 'update:modelValue', value: string | number): void
    (e: 'clearErrors'): void
}>()

const component = computed(() => {
    return props.type === 'textarea' ? FormTexareatInput : FormTextInput
})
</script>

<template>
    <label>
        <span class="visually-hidden">{{ label }}</span>
        <component
            :is="component"
            :maska="maska"
            :name="name"
            :label="label"
            :placeholder="placeholder"
            :type="type"
            :error="error"
            :model-value="modelValue"
            @clear-errors="$emit('clearErrors')"
            @update:model-value="$emit('update:modelValue', $event)"
        />
        <slot />
        <small v-if="error" class="form-error" role="alert">{{ error[0] || '&nbsp;' }}</small>
    </label>
</template>

<style lang="scss" scoped>
.form-field {
    position: relative;
        display: flex;
        gap: rem(10);
        align-items: center;
        justify-content: space-between;
        padding: rem(13) rem(16) rem(13) rem(18);
        background-color: rgb(255 255 255 / 30%);
        border: 1px solid rgb(255 255 255 / 50%);
        border-radius: rem(16);
        transition: all 0.3s ease-in-out;

        &:nth-child(3),
        &:nth-child(4) {
            grid-column: span 2;

            @media (max-width: em(650)) {
                grid-column: span 1;
            }
        }

        :deep(svg) {
            height: auto;

            @include adaptive-value('max-width', 24, 18);

            path {
                transition: all 0.3s ease-in-out;
            }
        }

        &:has(input:focus, textarea:focus) {
            border-color: var(--white-color);

            @media (prefers-color-scheme: dark) {
                border-color: var(--main-color);
            }

            :deep(svg) {
                path {
                    fill-opacity: 1;
                }
            }
        }

        &:has(.form-error) {
            border-color: red;
        }
}

.form-error {
    position: absolute;
    top: rem(-6);
    left: rem(18);
    padding-right: rem(3);
    padding-left: rem(3);
    font-size: rem(10);
    color: red;
    background-color: var(--white-color);
    border: 1px solid red;
    border-radius: rem(8);

    @media (prefers-color-scheme: dark) {
        background-color: var(--main-color);
    }
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0, 0, 0, 0);
}
</style>
