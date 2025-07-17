<script setup lang="ts">
import type { IContacts } from '@/types'
import { chips } from '@/data/chips-data'

const { appearLeft } = useAnimation()

const contacts = useState<IContacts>('contacts')

onMounted(() => {
    appearLeft('.technology', {
        duration: 1.2,
        delay: 0.3,
    })
})
</script>

<template>
    <section class="technology">
        <div class="technology__wrapper">
            <div class="technology__body">
                <div class="technology__avatar">
                    <NuxtPicture
                        loading="lazy"
                        format="webp"
                        src="/img/avatar.jpg"
                        alt="Маским Треск"
                    />
                </div>
                <div class="technology__info">
                    <h3 class="technology__title">
                        Современные технологии
                    </h3>
                    <p class="technology__description">
                        Я люблю новые веб-технологии и всегда применяю их в разработке своих проектов.
                    </p>
                </div>
                <div class="technology__links">
                    <UiButton
                        :href="contacts?.telegram"
                        target="_blank"
                        wide
                    >
                        <UiIconTelegram />
                        Telegram
                    </UiButton>
                    <a
                        :href="`mailto:${contacts?.email}`"
                        class="technology__email"
                    >{{ contacts?.email }}</a>
                </div>
            </div>
            <div class="technology__chips">
                <UiChip
                    v-for="chip in chips"
                    :key="chip.title"
                    :chip="chip"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.technology {
    padding-right: rem(20);
    padding-left: rem(20);
    margin-bottom: rem(40);
    background-color: var(--white-color);
    border-radius: rem(20);
    box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

    @include adaptive-value('padding-top', 40, 20);
    @include adaptive-value('padding-bottom', 40, 20);

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: rem(30);
        max-width: rem(1000);
        margin-inline: auto;
    }

    &__body {
        display: flex;
        align-items: center;

        @include adaptive-value('gap', 40, 20);

        @media (max-width: $mobile) {
            flex-direction: column;
            align-items: center;
        }
    }

    &__avatar {
        position: relative;
        flex: 0 0 rem(160);
        width: rem(160);
        height: rem(160);
        overflow: hidden;
        border-radius: 50%;

        :deep(img) {
            @include image;
        }

        @media (max-width: $mobile) {
            flex: 1 1 auto;
        }
    }

    &__info {
        display: flex;
        flex: 0 1 rem(520);
        flex-direction: column;
        gap: rem(8);
        align-items: flex-start;

        @media (max-width: $mobile) {
            flex: 1 1 auto;
            align-items: center;
            text-align: center;
        }
    }

    &__description {
        font-weight: 500;
        line-height: 150%;

        @include adaptive-value('font-size', 16, 14);
    }

    &__links {
        display: flex;
        flex: 0 1 rem(237);
        flex-direction: column;
        gap: rem(20);
        align-items: center;

        @media (max-width: $mobile) {
            flex: 1 1 auto;
        }
    }

    &__email {
        font-weight: 600;
        line-height: 90%;
        text-decoration: underline;
        text-underline-offset: rem(4);
        transition: color 0.3s ease-in-out;

        @include adaptive-value('font-size', 15, 12);

        @media (any-hover: hover) {
            &:hover {
                color: var(--accent-color);
            }
        }
    }

    &__chips {
        display: flex;
        flex-wrap: wrap;
        gap: rem(6);
        align-items: center;
        justify-content: center;
    }
}
</style>
