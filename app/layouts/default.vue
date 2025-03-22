<script setup lang="ts">
import type { IContacts } from '@/types'
import { useQuery } from '@tanstack/vue-query'

const nuxtApp = useNuxtApp()

const isLoading = ref(true)

const isMenuOpen = ref(false)

const fetcher = async () => await nuxtApp.$api<IContacts>('/api/contacts')

const {
    data: contacts,
    suspense,
} = useQuery({
    queryKey: ['contacts'],
    queryFn: fetcher,
})

await suspense()

useState('contacts', () => contacts.value)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value

    if (isMenuOpen.value) {
        document.documentElement.classList.add('menu-open')
    }
    else {
        document.documentElement.classList.remove('menu-open')
    }
}

function closeMenu() {
    isMenuOpen.value = false

    document.documentElement.classList.remove('menu-open')
}

nuxtApp.hook('page:loading:end', () => {
    isLoading.value = false
})

gsap.config({
    nullTargetWarn: false,
})

useHead({
    htmlAttrs: {
        lang: 'ru',
    },
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} — Tresk Sites` : 'Tresk Sites'
    },
})
</script>

<template>
    <VitePwaManifest />
    <div>
        <Head>
            <Meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0" />
            <Meta name="description" content="Создание сайтов и веб-приложений любой сложности" />
            <!-- Favicon -->
            <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <Meta name="msapplication-TileColor" content="#da532c" />
            <Meta name="theme-color" content="#ffffff" />
            <!-- FB meta -->
            <Meta property="og:description" content="Создание сайтов и веб-приложений любой сложности" />
            <Meta property="og:image" content="/img/og.png" />
            <!-- Twitter meta -->
            <Meta name="twitter:description" content="Создание сайтов и веб-приложений любой сложности" />
            <Meta name="twitter:image" content="/img/og.png" />
            <!-- Yandex verification -->
            <Meta name="yandex-verification" content="4bb2b037be469129" />
            <!-- Google verification -->
            <Meta name="google-site-verification" content="CRe0is5x5QFQbk4MIYkN9oGyq18F1-43DNZwaSxdBdY" />
        </Head>
        <NuxtLoadingIndicator color="#ff565c" />
        <div class="wrapper">
            <div class="wrapper__container">
                <LazyLayoutHeader @toggle-menu="toggleMenu" />
                <div class="inner">
                    <LazyLayoutNavigation @close-menu="closeMenu" />
                    <UiSpinner v-if="isLoading" />
                    <div v-show="!isLoading" class="page">
                        <main class="main">
                            <LayoutSmoothScroll>
                                <slot />
                            </LayoutSmoothScroll>
                        </main>
                        <LazyLayoutFooter />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
body {
    background-color: #f5f5f5;

    .menu-open & {
        overflow: hidden;
        overscroll-behavior: none;
        touch-action: none;
    }

    @media (prefers-color-scheme: dark) {
        background-color: var(--black-color);
    }
}

[class*='__container'] {
    @if $maxWidthContainer > 0 {
        box-sizing: content-box;
        max-width: rem($maxWidthContainer);
        padding-right: rem(40);
        padding-left: rem(40);
        margin: 0 auto;

        @media (max-width: em(1199)) {
            padding-right: rem(20);
            padding-left: rem(20);
        }
    }
}

.wrapper {
    &__container {
        @media (max-width: em(1199)) {
            padding: 0;
        }
    }
}

.inner {
    display: flex;
    gap: rem(20);

    @media (max-width: em(1199)) {
        display: block;
        padding-inline: rem(20);
        padding-top: rem(20);
    }

    @media (max-width: $mobileSmall) {
        padding-inline: rem(10);
    }
}

.page {
    display: flex;
    flex: 0 1 rem(1580);
    flex-direction: column;
    min-height: 100%;

    > main {
        flex: 1 1 auto;
    }
}

.content {
    h2 {
        @include adaptive-value('margin-bottom', 20, 16);
    }

    p {
        font-weight: 500;
        line-height: 150%;

        @include adaptive-value('font-size', 16, 14);
        @include adaptive-value('margin-bottom', 20, 16);
    }

    a {
        color: var(--accent-color);
        text-decoration: underline;
        text-underline-offset: rem(4);
        transition: color 0.3s ease-in-out;

        @media (any-hover: hover) {
            &:hover {
                color: var(--hover-color);
            }
        }
    }

    ul {
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

.layout-enter-active,
.layout-leave-active {
    transition: all 0.4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: grayscale(1) blur(5px);
}
</style>
