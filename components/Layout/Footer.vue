<script setup lang="ts">
import type { IContacts } from '@/types'

const currentYear = new Date().getFullYear()

const contacts = useState<IContacts>('contacts')
</script>

<template>
	<footer class="footer">
		<div class="footer__links">
			<NuxtLink to="/order">
				<UiButton transparent>
					Заказать сайт<UiIconArrowUp />
				</UiButton>
			</NuxtLink>
			<a :href="contacts?.files?.original" download="Бриф на разработку сайта">
				<UiButton transparent>Скачать бриф<UiIconArrowDown /></UiButton>
			</a>
		</div>
		<p class="footer__copyright">
			© 2019 – {{ currentYear }}, {{ contacts?.name }}, {{ contacts?.inn }}
		</p>
	</footer>
</template>

<style lang="scss">
.footer {
	display: flex;
	flex-direction: column;
	gap: rem(20);
	align-items: center;
	padding-top: rem(20);
	padding-bottom: rem(20);
	border-top: 1px solid var(--light-color);

	// .footer__links
	&__links {
		display: flex;
		gap: rem(20);
		align-items: center;
		justify-content: center;
	}

	// .footer__copyright
	&__copyright {
		font-size: 12px;
		line-height: 125%;
		color: var(--grey-color);
		text-align: center;
		text-transform: uppercase;

		@include adaptiveValue('font-size', 12, 10);
	}
}
</style>
