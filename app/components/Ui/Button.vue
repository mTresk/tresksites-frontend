<script setup lang="ts">
const props = defineProps<{
    transparent?: boolean
    wide?: boolean
    inverted?: boolean
    icon?: 'right'
    light?: boolean
    size?: 'lg'
    disabled?: boolean
    href?: string
}>()

const classes = [
    {
        'button--transparent': props.transparent,
        'button--wide': props.wide,
        'button--inverted': props.inverted,
        'button--light': props.light,
        'button--disabled': props.disabled,
        'button--icon-right': props.icon === 'right',
    },
    (props.size ? `button--${props.size}` : ''),
]
</script>

<template>
    <NuxtLink
        v-if="href"
        v-ripple
        :to="href"
        class="button"
        :class="classes"
    >
        <slot />
    </NuxtLink>
    <button
        v-else
        v-ripple
        class="button"
        :class="classes"
    >
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
    display: flex;
    gap: rem(12);
    align-items: center;
    justify-content: center;
    padding-top: rem(12);
    padding-bottom: rem(12);
    font-weight: 600;
    line-height: 90%;
    color: var(--white-color);
    white-space: nowrap;
    background-color: var(--accent-color);
    transition: all 0.3s ease-in-out;

    @include adaptive-value('font-size', 15, 14);
    @include adaptive-value('border-radius', 16, 12);
    @include adaptive-value('padding-left', 24, 16);
    @include adaptive-value('padding-right', 24, 16);

    &:focus-visible {
        outline: rem(2) solid var(--white-color);
        outline-offset: rem(2);
    }

    :deep(svg) {
        flex-shrink: 0;
        height: auto;
        transition: transform 0.3s ease-in-out;

        @include adaptive-value('max-width', 20, 16);

        path {
            fill: var(--white-color);
            transition: all 0.3s ease-in-out;
        }
    }

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--hover-color);

            :deep(svg) {
                transform: translateX(rem(-3));
            }

            &.button--icon-right {
                :deep(svg) {
                    transform: translateX(rem(3));
                }
            }
        }
    }

    &--transparent {
        color: var(--main-color);
        background-color: var(--light-color);

        :deep(svg path) {
            fill: var(--main-color);
        }

        @media (prefers-color-scheme: dark) {
            color: var(--main-color-dark);

            :deep(svg path) {
                fill: var(--main-color);
            }
        }

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--light-color);
            }
        }

        @media (any-hover: hover) {
            background-color: transparent;
        }
    }

    &--wide {
        width: 100%;
    }

    &--lg {
        padding-block: rem(18);
    }

    &--inverted {
        color: var(--accent-color);
        background-color: var(--white-color);

        @media (prefers-color-scheme: dark) {
            background-color: var(--main-color);
        }

        :deep(svg path) {
            fill: var(--accent-color);
        }

        @media (any-hover: hover) {
            &:hover {
                color: var(--white-color);
                background-color: var(--hover-color);

                :deep(svg path) {
                    fill: var(--white-color);
                }
            }
        }
    }

    &--light {
        color: var(--main-color);
        background-color: var(--rose-color);

        :deep(svg path) {
            fill: var(--main-color);
        }

        @media (any-hover: hover) {
            &:hover {
                color: var(--white-color);

                :deep(svg path) {
                    fill: var(--white-color);
                }
            }
        }
    }

    &--disabled {
        pointer-events: none;
        opacity: 0.4;
    }
}
</style>
