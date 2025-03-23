<script setup lang="ts">
import type { IWorkItem } from '@/types'
import { useQuery } from '@tanstack/vue-query'

definePageMeta({
    pageTransition: {
        name: 'layout',
        mode: 'out-in',
    },
})

const route = useRoute()

const { appearLeft } = useAnimation()

async function fetcher() {
    return await useNuxtApp().$api<IWorkItem>(`/api/works/${route.params.slug}`, {
        async onResponseError({ response }) {
            throw showError({
                statusCode: response.status,
                statusMessage: response.statusText ?? 'Error',
            })
        },
    })
}

const {
    data: work,
    suspense,
    isLoading,
} = useQuery({
    queryKey: [route.params.slug],
    queryFn: fetcher,
})

await suspense()

const seoDescription = 'Описание выполненной работы работы по верстке и программированию'

onMounted(() => {
    appearLeft('.work-animate')
})
</script>

<template>
    <div>
        <Head>
            <Title>{{ work?.data.seo.title ?? work?.data.title }}</Title>
            <Meta name="description" :content="work?.data.seo.description ?? seoDescription" />
            <Meta property="og:description" :content="work?.data.seo.description ?? seoDescription" />
            <Meta name="twitter:description" :content="work?.data.seo.description ?? seoDescription" />
        </Head>
        <section class="work spacer-60">
            <div class="work__wrapper">
                <LayoutBreadcrumb class="work-animate" path="/works" path-name="Работы" :current="work?.data.title " />
                <div v-if="work?.data.tags" class="work__tags work-animate">
                    <UiTag v-for="tag in work?.data.tags" :key="tag.slug" :tag="tag" />
                </div>
                <div class="work__label work-animate">
                    <a v-if="work?.data.url" :href="work?.data.url" target="_blank">{{ work?.data.url }}</a>
                    <span v-if="work?.data.label">{{ work?.data.label }}</span>
                </div>
                <h1 class="work__title work-animate">
                    {{ work?.data.title }}
                </h1>
                <div class="work__list work-animate" v-html="work?.data.list" />
                <article v-for="(content, key) in work?.data.content" :key="key" class="work__block work-animate">
                    <div v-html="content.data.html" />
                    <div v-if="content.data.images" class="work__image">
                        <picture>
                            <source media="(max-width: 479px)" :srcset="`${content.data.images.imageWebpSm} 1x, ${content.data.images.imageWebpSmX2} 2x`" type="image/webp">
                            <source
                                media="(min-width: 480px)"
                                :srcset="`${content.data.images.imageWebp} 1x, ${content.data.images.imageWebpX2} 2x`"
                                type="image/webp"
                            >
                            <img
                                loading="lazy"
                                :src="content.data.images.image"
                                :srcset="`${content.data.images.image} 1x, ${content.data.images.imageX2} 2x`"
                                :alt="work?.data.title"
                            >
                        </picture>
                    </div>
                </article>
            </div>
        </section>
        <section v-if="work?.otherWorks && !isLoading" class="more-works">
            <h4 class="more-works__title spacer-20">
                Еще работы
            </h4>
            <Works :works="work?.otherWorks" :is-loading="isLoading" />
        </section>
        <div class="spacer-60">
            <NuxtLink to="/works">
                <UiButton transparent wide size="lg" icon="right">
                    Другие работы<UiIconArrowUp />
                </UiButton>
            </NuxtLink>
        </div>
        <Logos />
        <Technology />
    </div>
</template>

<style lang="scss" scoped>
.work {
    padding-right: rem(20);
    padding-left: rem(20);
    background-color: var(--white-color);
    border-radius: rem(20);
    box-shadow: 0 rem(8) rem(20) 0 rgb(0 0 0 / 1%);

    @include adaptive-value('padding-top', 60, 40);
    @include adaptive-value('padding-bottom', 60, 40);

    &__wrapper {
        max-width: rem(1000);
        margin-inline: auto;
    }

    &__tags {
        display: flex;
        flex-wrap: wrap;
        gap: rem(4);
        margin-bottom: rem(10);
    }

    &__title {
        margin-bottom: rem(20);
    }

    &__list {
        @include adaptive-value('margin-bottom', 40, 30);

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

    &__block {
        &:not(:last-child) {
            @include adaptive-value('margin-bottom', 50, 40);
        }

        :deep(h2) {
            @include adaptive-value('margin-bottom', 20, 16);
        }

        :deep(p) {
            font-weight: 500;
            line-height: 150%;

            @include adaptive-value('font-size', 16, 14);
            @include adaptive-value('margin-bottom', 20, 16);
        }

        :deep(a) {
            text-decoration: underline;
            text-underline-offset: rem(4);
            transition: color 0.3s ease-in-out;

            @media (any-hover: hover) {
                &:hover {
                    color: var(--accent-color);
                }
            }
        }

        :deep(ul) {
            @include adaptive-value('margin-bottom', 20, 16);

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

    &__image {
        margin-bottom: rem(20);
        overflow: hidden;
        border-radius: rem(12);
        box-shadow: rem(10) rem(10) rem(30) rem(20) rgb(0 0 0 / 5%);

        &:not(:last-child) {
            @include adaptive-value('margin-bottom', 50, 40);
        }

        :deep(img) {
            width: 100%;
            max-width: 100%;
        }
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
}
</style>
