<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    error?: string[]
    modelValue?: File | null
    formSent: boolean | null
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: File | null): void
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const fileTextElement = ref<HTMLSpanElement | null>(null)

function setFile(e?: Event) {
    const file = e ? (e.target as HTMLInputElement).files?.[0] : fileInput.value?.files?.[0]
    const fileName = file?.name ?? 'Прикрепить бриф'

    if (fileTextElement.value) {
        fileTextElement.value.textContent = fileName
    }

    if (e) {
        emit('update:modelValue', file || null)
    }
}

watch(
    () => props.formSent,
    (value) => {
        if (value) {
            fileInput.value = null
            setFile()
        }
    },
)
</script>

<template>
    <label class="file">
        <input
            ref="fileInput"
            type="file"
            name="file"
            :aria-invalid="error ? true : undefined"
            @change="setFile"
        >
        <span
            class="file__button"
            aria-hidden="true"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14 13.5V8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8V13.5C6 17.0899 8.91015 20 12.5 20C16.0899 20 19 17.0899 19 13.5V4H21V13.5C21 18.1944 17.1944 22 12.5 22C7.80558 22 4 18.1944 4 13.5V8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8V13.5C16 15.433 14.433 17 12.5 17C10.567 17 9 15.433 9 13.5V8H11V13.5C11 14.3284 11.6716 15 12.5 15C13.3284 15 14 14.3284 14 13.5Z"
                    fill="white"
                />
            </svg>
        </span>
        <span
            ref="fileTextElement"
            class="file__text"
        >Прикрепить бриф</span>
        <small
            v-if="error"
            class="file__error"
            role="alert"
        >
            {{ error[0] || '&nbsp;' }}
        </small>
    </label>
</template>

<style lang="scss" scoped>
.file {
    position: relative;
    display: flex;
    gap: rem(6);
    align-items: center;
    cursor: pointer;

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            height: auto;

            @include adaptive-value('max-width', 24, 18);
        }
    }

    &__text {
        line-height: 150%;
        text-decoration: underline;
        text-underline-offset: rem(4);

        @include adaptive-value('font-size', 14, 12);
    }

    input[type='file'] {
        position: absolute;
        z-index: -1;
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
    }

    &__error {
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
}
</style>
