<script setup lang="ts">
import type { IContacts } from '@/types'

const currentYear = new Date().getFullYear()

const contacts = useState<IContacts>('contacts')
</script>

<template>
    <footer class="footer">
        <div class="footer__links">
            <UiButton
                href="/order"
                transparent
                icon="right"
            >
                Заказать сайт<UiIconArrowUp />
            </UiButton>
            <UiButton
                :href="contacts?.brief"
                download="Бриф на разработку сайта"
                transparent
                icon="right"
            >
                Скачать бриф<UiIconArrowDown />
            </UiButton>
        </div>
        <p class="footer__copyright">
            © 2019 – {{ currentYear }}, {{ contacts?.name }}, {{ contacts?.inn }}
        </p>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    gap: rem(20);
    align-items: center;
    padding-top: rem(20);
    padding-bottom: rem(20);
    border-top: 1px solid var(--light-color);

    &__links {
        display: flex;
        gap: rem(20);
        align-items: center;
        justify-content: center;
    }

    &__copyright {
        font-size: rem(12);
        line-height: 125%;
        color: var(--grey-color);
        text-align: center;
        text-transform: uppercase;

        @include adaptive-value('font-size', 12, 10);
    }
}
</style>
