<script setup lang="ts">
import { chips } from '@/data/chips-data'

const { appearLeft } = useAnimation()

onMounted(() => {
    appearLeft('.hero-animate')
    appearLeft('.hero__image', { delay: 0.3 })
})
</script>

<template>
    <section class="hero spacer-60">
        <div class="hero__body">
            <div class="hero__content hero-animate">
                <h1 class="hero__title spacer-20 hero-animate">
                    Создание сайтов и веб-приложений любой сложности
                </h1>
                <p class="hero__description hero-animate">
                    Меня зовут Максим. С 2019 года я занимаюсь веб-разработкой. Сделано более 100 проектов по верстке и
                    сайтов «под ключ». Полный цикл создания сайтов. Поддержка и сопровождение.
                </p>
                <div class="hero__chips hero-animate">
                    <UiChip v-for="chip in chips" :key="chip.title" :title="chip.title" :icon="chip.icon" />
                </div>
            </div>
            <div class="hero__image">
                <NuxtPicture width="1520" height="530" format="webp" src="/img/hero.png" alt="Фоновое изображение" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    &__body {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include adaptive-value('gap', 40, 20);

        @media (max-width: $tablet) {
            flex-direction: column-reverse;
        }
    }

    &__content {
        flex: 0 1 rem(760);
        background-color: var(--white-color);
        border-radius: rem(20);
        box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

        @include adaptive-value('padding-top', 50, 20);
        @include adaptive-value('padding-bottom', 50, 20);
        @include adaptive-value('padding-left', 40, 20);
        @include adaptive-value('padding-right', 40, 20);

        @media (max-width: $tablet) {
            flex: 1 1 auto;
        }
    }

    &__description {
        font-weight: 500;
        line-height: 145%;

        @include adaptive-value('font-size', 22, 14);
        @include adaptive-value('margin-bottom', 40, 32);
    }

    &__chips {
        display: flex;
        flex-wrap: wrap;
        gap: rem(6);
    }

    &__image {
        flex: 0 1 rem(760);
        min-width: rem(450);

        :deep(img, picture) {
            display: block;
            width: 100%;
            max-width: 100%;
            height: auto;
        }

        @media (max-width: $tablet) {
            flex: 1 1 auto;
            width: 100%;
            min-width: auto;
        }
    }
}
</style>
