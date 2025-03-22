<script setup lang="ts">
import { onClickOutside, watchDebounced } from '@vueuse/core'

export interface IResult {
    id: number
    slug: string
    name: string

}

const keywords = ref()

const result = ref<IResult[]>()

const isLoading = ref(false)

const target = ref()

async function handleSearch() {
    isLoading.value = true
    result.value = await useNuxtApp().$api<IResult[]>('/api/search', { params: { keywords: keywords.value } })
    isLoading.value = false
}

async function clear() {
    result.value = undefined
    keywords.value = undefined
}

onClickOutside(target, _ => clear())

watchDebounced(
    () => keywords.value,
    (value) => {
        if (value?.length > 2) {
            handleSearch()
        }
        else {
            result.value = undefined
        }
    },
    { debounce: 500, maxWait: 1000 },
)

onMounted(() => {
    useScrollable(target.value)
})
</script>

<template>
    <div class="search">
        <label class="search__field">
            <input v-model="keywords" autocomplete="off" type="text" name="search" placeholder="Поиск...">
        </label>
        <div v-show="result" ref="target" class="search__result">
            <ul class="search__list">
                <li v-for="item in result" :key="item.id" class="search__item" @click="clear">
                    <NuxtLink :to="`/works/${item.slug}`">
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
            <div v-if="isLoading" class="search__placeholder">
                Ищем
            </div>
            <div v-else-if="!result?.length" class="search__placeholder">
                Ничего не найдено
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search {
    position: relative;
    flex: 0 1 rem(280);

    @media (max-width: em(1199)){
        display: none;
    }

    &__field {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: rem(12);
        cursor: text;
        background-color: rgb(255 255 255 / 50%);
        border: 1px solid rgb(255 255 255 / 50%);
        transition: all 0.3s ease-in-out;

        @include adaptive-value('border-radius', 16, 12);
        @include adaptive-value('padding-left', 24, 16);
        @include adaptive-value('padding-right', 24, 16);

        @media (prefers-color-scheme: dark) {
            background-color: var(--white-color);
            border-color: transparent;
        }

        input {
            width: 100%;
            font-weight: 500;
            line-height: 150%;
            color: var(--main-color);
            outline: none;
            background-color: transparent;

            @include adaptive-value('font-size', 14, 12);

            &::placeholder {
                color: var(--main-color);
                opacity: 0.5;
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

        &:has(input:focus){
            background-color: var(--white-color);

            @media (prefers-color-scheme: dark){
                border-color: rgb(255 255 255 / 50%);
            }
        }
    }

    &__result {
        position: absolute;
        top: calc(100% + rem(10));
        left: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        width: 100%;
        min-height: rem(50);
        padding: rem(20);
        background-color: var(--white-color);
        box-shadow: 0 8px 20px 0 rgb(0 0 0 / 5%);

        @include adaptive-value('border-radius', 16, 12);
    }

    // .search__list
    &__list {
        display: grid;
        max-height: rem(250);
        overflow: hidden auto;
        scrollbar-color: var(--accent-color) transparent;
        scrollbar-width: thin;
    }

    // .search__item
    &__item {
        line-height: 150%;

        @include adaptive-value('font-size', 14, 12);

        a {
            display: block;
            padding-block: rem(5);
            text-decoration: underline;
            text-underline-offset: rem(4);
            transition: color 0.3s ease-in-out;

            @media (any-hover: hover){
                &:hover{
                    color: var(--accent-color);
                }
            }
        }
    }

    &__placeholder {
        line-height: 150%;
        opacity: 0.5;

        @include adaptive-value('font-size', 14, 12);
    }
}
</style>
