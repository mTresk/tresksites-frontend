<script setup lang="ts">
import type { IContacts } from '@/types'
import { menuItems } from '@/data/menu-data'

defineEmits(['closeMenu'])

const contacts = useState<IContacts>('contacts')

const navigation = useTemplateRef('navigation')

onMounted(() => {
    if (!navigation.value) {
        return
    }

    const itemOffset = navigation.value.offsetTop

    const handleScroll = () => {
        if (!navigation.value) {
            return
        }

        const scrollTop = window.scrollY

        if (scrollTop >= itemOffset) {
            navigation.value.style.height = 'calc(100vh - 40px)'
        }

        else {
            navigation.value.style.height = 'calc(100vh - 130px)'
        }
    }

    window.addEventListener('scroll', handleScroll)

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
})
</script>

<template>
    <aside
        ref="navigation"
        class="navigation"
    >
        <div class="navigation__body">
            <div class="navigation__menu menu">
                <nav class="menu__body">
                    <ul class="menu__list">
                        <li
                            v-for="menuItem in menuItems"
                            :key="menuItem.name"
                            class="menu__item"
                        >
                            <NuxtLink
                                :to="menuItem.path"
                                class="menu__link"
                                @click="$emit('closeMenu')"
                            >
                                <UiIconMenu :name="menuItem.icon" />
                                <span>{{ menuItem.name }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="navigation__socials">
                <div class="navigation__social">
                    <a
                        target="_blank"
                        :href="contacts?.telegram"
                        class="menu__link"
                    >
                        <UiIconMenu name="telegram" />
                        <span>Написать в Telegram</span>
                    </a>
                </div>
            </div>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
.navigation {
    z-index: 10;
    flex: 0 0 rem(80);
    height: 100vh;
    height: calc(100vh - 130px);
    min-height: rem(400);
    padding-top: rem(40);
    padding-bottom: rem(40);
    background-color: var(--white-color);
    border-radius: rem(20);
    box-shadow: inset -8px 0 20px 0 rgb(0 0 0 / 2%);
    transition: all 0.3s ease-in-out;

    @media (min-height: em(500)) {
        position: sticky;
        top: rem(20);
    }

    @media (max-width: em(1199)) {
        position: fixed;
        inset: 0;
        top: 60px;
        width: 100%;
        height: 100% !important;
        min-height: auto;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        transform: translateY(-100%);
        transition: all 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);

        .menu-open & {
            transform: translateY(0%);
        }
    }

    &__body {
        display: flex;
        flex-direction: column;
        gap: rem(20);
        align-items: center;
        justify-content: space-between;
        height: 100%;

        @media (max-width: em(1199)) {
            display: block;
            padding-inline: rem(20);
            padding-top: rem(40);
            padding-bottom: rem(80);
            overflow-y: auto;
        }

        @media (max-width: $mobileSmall) {
            padding-inline: rem(10);
        }
    }

    &__socials {
        display: flex;
        flex-direction: column;
        gap: rem(20);

        @media (max-width: em(1199)) {
            display: none;
        }
    }

    &__social {
        display: flex;
        align-items: center;
        justify-content: center;
        width: rem(48);
        height: rem(48);
        background-color: transparent;
        border-radius: rem(16);
        transition: background-color 0.3s ease-in-out;

        &:has(.menu__link:hover) {
            background-color: var(--light-color);
        }
    }
}

.menu {
    width: 100%;

    &__list {
        display: flex;
        flex-direction: column;
        gap: rem(8);

        @media (max-width: em(1199)) {
            align-items: flex-start;
        }
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__link {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: rem(10);

        span {
            position: absolute;
            left: rem(65);
            z-index: 10;
            padding: rem(4) rem(10);
            font-size: rem(12);
            line-height: 160%;
            color: var(--white-color);
            white-space: nowrap;
            pointer-events: none;
            background-color: var(--main-color);
            border-radius: rem(10);
            opacity: 0;
            transition: all 0.3s ease-in-out;

            @media (prefers-color-scheme: dark) {
                color: var(--main-color);
                background-color: var(--black-color);
            }

            &::before {
                position: absolute;
                top: 50%;
                left: -4px;
                width: 11px;
                height: 11px;
                content: '';
                background-color: var(--main-color);
                transform: translateY(-50%) rotate(-45deg);

                @media (prefers-color-scheme: dark) {
                    background-color: var(--black-color);
                }
            }

            @media (max-width: em(1199)) {
                position: static;
                padding: 0;
                font-size: rem(14);
                font-weight: 500;
                color: var(--main-color);
                pointer-events: auto;
                background: none;
                opacity: 1;

                &::before {
                    display: none;
                }
            }
        }

        :deep(svg) {
            path {
                transition: all 0.3s ease-in-out;

                @media (prefers-color-scheme: dark) {
                    fill: var(--grey-color);
                }
            }
        }

        @media (any-hover: hover) {
            &:hover {
                :deep(svg path) {
                    fill-opacity: 0.6;
                }

                span {
                    left: rem(75);
                    pointer-events: auto;
                    opacity: 1;
                }

                &.router-link-active {
                    &::before {
                        width: 0;
                    }
                }
            }
        }

        &.router-link-active {
            background: linear-gradient(
                90deg,
                rgb(255 255 255 / 0%) 0%,
                rgb(252 68 75 / 13%) 51.54%,
                rgb(255 255 255 / 0%) 100%
            );

            &::before {
                position: absolute;
                top: 0;
                right: 0;
                width: 3px;
                height: 100%;
                content: '';
                background-color: var(--accent-color);
                transition: width 0.3s ease-in-out;
            }

            :deep(svg path) {
                fill: var(--accent-color);
                fill-opacity: 1;
            }

            @media (max-width: em(1199)) {
                background: none;

                &::before {
                    display: none;
                }
            }
        }

        @media (max-width: em(1199)) {
            gap: rem(12);
            padding-left: 0;
        }
    }
}
</style>
