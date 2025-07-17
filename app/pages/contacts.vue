<script setup lang="ts">
import type { IContacts } from '@/types'

definePageMeta({
    pageTransition: {
        name: 'layout',
        mode: 'out-in',
    },
})

const { appearLeft } = useAnimation()

const contacts = useState<IContacts>('contacts')

onMounted(() => {
    appearLeft('.contacts-animate')
})
</script>

<template>
    <div>
        <Head>
            <Title>Контакты</Title>
            <Meta
                name="description"
                content="Как со мной можно связаться"
            />
        </Head>
        <section class="contacts spacer-60 contacts-animate">
            <div class="contacts__wrapper">
                <h1 class="contacts__title spacer-20 contacts-animate">
                    {{ contacts?.name }}
                </h1>
                <div class="contacts__text contacts-animate">
                    {{ contacts?.inn }}
                </div>
                <div class="contacts__links contacts-animate">
                    <UiButton
                        target="_blank"
                        href="https://t.me/tresk"
                        light
                    >
                        <UiIconTelegram />Написать в Telegram
                    </UiButton>
                    <UiButton
                        href="mailto:djtresk@gmail.com"
                        light
                    >
                        <UiIconEmail />Написать на почту
                    </UiButton>
                </div>
                <div class="contacts__info">
                    <div
                        v-for="item in contacts?.block"
                        :key="item?.content"
                        class="contacts__block contacts-animate"
                        v-html="item?.content"
                    />
                </div>
            </div>
        </section>
        <Logos />
        <Technology />
    </div>
</template>

<style lang="scss" scoped>
.contacts {
    padding-right: rem(20);
    padding-left: rem(20);
    background-color: var(--white-color);
    border-radius: rem(20);
    box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

    @include adaptive-value('padding-top', 60, 40);
    @include adaptive-value('padding-bottom', 60, 40);

    &__wrapper {
        max-width: rem(1000);
        margin-inline: auto;
    }

    &__text {
        font-weight: 500;
        line-height: 145%;

        @include adaptive-value('font-size', 22, 16);
    }

    &__links {
        display: flex;
        gap: rem(8);
        align-items: center;
        margin-top: rem(20);

        @include adaptive-value('margin-bottom', 60, 20);

        @media (max-width: $mobileSmall) {
            flex-direction: column;
            width: 100%;
        }
    }

    &__link {
        @media (max-width: $mobileSmall) {
            width: 100%;

            button {
                width: 100%;
            }
        }
    }

    &__info {
        display: flex;
        flex-direction: column;

        @include adaptive-value('gap', 40, 20);
    }

    &__block {
        display: flex;
        flex-direction: column;
        gap: rem(8);
        align-items: flex-start;

        :deep(h3) {
            font-family: Montserrat, sans-serif;
            font-weight: 700;
            line-height: 125%;

            @include adaptive-value('font-size', 22, 18);
        }

        :deep(p) {
            font-weight: 500;
            line-height: 150%;

            @include adaptive-value('font-size', 16, 14);
        }
    }
}
</style>
