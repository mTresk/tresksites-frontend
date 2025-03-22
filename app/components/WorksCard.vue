<script setup lang="ts">
import type { IWork } from '@/types'

defineProps<{
    work: IWork
}>()
</script>

<template>
    <article class="work-card">
        <div class="work-card__image">
            <picture>
                <source media="(max-width: 479px)" :srcset="`${work.featured.imageWebpSm} 1x, ${work.featured.imageWebpSmX2} 2x`" type="image/webp">
                <source media="(min-width: 480px)" :srcset="`${work.featured.imageWebp} 1x, ${work.featured.imageWebpX2} 2x`" type="image/webp">
                <img
                    loading="lazy"
                    :src="work.featured.image"
                    :srcset="`${work.featured.image} 1x, ${work.featured.imageX2} 2x`"
                    :alt="work.title"
                    width="1058"
                    height="595"
                >
            </picture>
        </div>
        <div class="work-card__content">
            <div v-if="work.tags" class="work-card__tags">
                <UiTag v-for="tag in work.tags" :key="tag.slug" :tag="tag" />
            </div>
            <div class="work-card__label">
                <a v-if="work.url" :href="work.url" target="_blank">{{ work.url }}</a>
                <span v-if="work.label">{{ work.label }}</span>
            </div>
            <h4 class="work-card__title spacer-20">
                {{ work.title }}
            </h4>
            <div class="work-card__info" v-html="work.list" />
            <UiButton :href="`/works/${work.slug}`" class="work-card__button">
                Посмотреть работу<UiIconArrowRight />
            </UiButton>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.work-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(20) rem(40) rem(20) rem(20);
    background-color: var(--white-color);
    border-radius: rem(20);
    box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

    @include adaptive-value('gap', 40, 20);
    @include adaptive-value('padding-right', 40, 20);

    @media (max-width: $tablet) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: $mobile) {
        padding: 0;
    }

    &__image {
        position: relative;
        flex: 0 1 rem(1058);
        aspect-ratio: 1920 / 1080;
        overflow: hidden;
        border-radius: rem(12);

        img {
            @include image;
        }

        @media (max-width: $tablet) {
            flex: 1 1 auto;
            width: 100%;
        }
    }

    &__content {
        flex: 0 1 rem(422);

        @media (max-width: $tablet) {
            flex: 1 1 auto;
            width: 100%;
        }

        @media (max-width: $mobile) {
            padding-inline: rem(20);
            padding-bottom: rem(20);
        }
    }

    &__tags {
        display: flex;
        flex-wrap: wrap;
        gap: rem(4);
        margin-bottom: rem(10);

    }

    &__label {
        display: block;
        margin-bottom: rem(10);
        line-height: 125%;

        @include adaptive-value('font-size', 14, 12);

        a {
            text-decoration: underline;
            text-underline-offset: rem(4);
            transition: color 0.3s ease-in-out;

            @media (any-hover: hover) {
                &:hover {
                    color: var(--accent-color);
                }
            }
        }
    }

    &__info {
        margin-bottom: rem(20);

        :deep(ul) {
            li {
                position: relative;
                padding-left: rem(16);
                font-weight: 500;
                line-height: 150%;

                @include adaptive-value('font-size', 16, 14);

                &::before {
                    position: absolute;
                    top: 10px;
                    left: 0;
                    width: rem(6);
                    height: rem(6);
                    content: '';
                    background-color: var(--accent-color);
                    border-radius: 50%;
                }
            }
        }
    }

    &__button {
        @media (max-width: $mobileSmall) {
            width: 100%;
        }
    }
}
</style>
