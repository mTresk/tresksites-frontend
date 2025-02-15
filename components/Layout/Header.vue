<script setup lang="ts">
import type { IContacts } from '@/types'

defineEmits(['toggleMenu'])

const contacts = useState<IContacts>('contacts')

const isLoading = ref(true)

onMounted(() => isLoading.value = false)
</script>

<template>
	<header class="header">
		<div class="header__body">
			<div class="header__left">
				<button aria-label="Меню" type="button" class="menu-button" @click="$emit('toggleMenu')">
					<span />
				</button>
				<NuxtLink to="/" class="header__logo header__logo--light">
					<NuxtImg loading="lazy" width="80" height="47" src="/img/logo.svg" alt="Tresk Sites" />
				</NuxtLink>
				<NuxtLink to="/" class="header__logo header__logo--dark">
					<NuxtImg loading="lazy" width="80" height="47" src="/img/logo-dark.svg" alt="Tresk Sites" />
				</NuxtLink>
				<UiButton v-show="!isLoading" class="header__button" href="/order" transparent>
					Заказать сайт <UiIconArrowUp />
				</UiButton>
				<LayoutSearch v-show="!isLoading" />
			</div>
			<div class="header__right">
				<div class="header__person">
					<div class="header__avatar">
						<NuxtPicture loading="lazy" format="webp" src="/img/avatar.jpg" alt="Маским Треск" />
					</div>
					<a :href="`mailto:${contacts?.email}`" class="header__email">{{ contacts?.email }}</a>
				</div>
				<UiButton target="_blank" :href="contacts?.telegram">
					<UiIconTelegram />Telegram
				</UiButton>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	padding-top: rem(40);
	padding-bottom: rem(20);

	@media (max-width: em(1199)) {
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		width: 100%;
		min-height: rem(60);
		padding-block: rem(10);
		padding-inline: rem(20);
		background-color: var(--white-color);
		box-shadow: 0 8px 20px 0 rgb(0 0 0 / 8%);
	}

	@media (max-width: $mobileSmall) {
		padding-inline: rem(10);
	}

	&__body {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	&__left {
		display: flex;
		flex: 1;
		gap: rem(20);
		align-items: center;
	}

	&__logo {
		&--dark {
			display: none;
		}

		@media (prefers-color-scheme: dark) {
			&--light {
				display: none;
			}

			&--dark {
				display: block;
			}
		}

		@media (max-width: em(1199)) {
			img {
				width: auto;

				@include adaptive-value('max-height', 50, 30);
			}
		}
	}

	&__button {
		@media (max-width: em(1199)) {
			display: none;
		}
	}

	&__right {
		display: flex;
		align-items: center;

		@include adaptive-value('gap', 40, 20);
	}

	&__person {
		display: flex;
		gap: rem(10);
		align-items: center;

		@media (max-width: $tablet) {
			display: none;
		}
	}

	&__avatar {
		position: relative;
		width: rem(44);
		height: rem(44);
		overflow: hidden;
		border-radius: 50%;

		:deep(img) {
			@include image;
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
}

.menu-button {
	display: none;

	@media (max-width: em(1199)) {
		position: relative;
		z-index: 5;
		display: block;
		width: rem(24);
		height: rem(18);

		@media (any-hover: none) {
			cursor: default;
		}

		span,
		&::before,
		&::after {
			position: absolute;
			right: 0;
			width: 100%;
			height: rem(3);
			pointer-events: none;
			content: '';
			background-color: var(--main-color);
			border-radius: rem(4);
			transition: all 0.3s ease-in-out;
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}

		span {
			top: calc(50%);
			transform: translateY(-50%);
		}

		.menu-open & {
			span {
				width: 0;
			}

			&::before {
				top: calc(50% - 1.5px);
				transform: rotate(-45deg);
			}

			&::after {
				bottom: calc(50% - 1.5px);
				transform: rotate(45deg);
			}
		}
	}
}
</style>
