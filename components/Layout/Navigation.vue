<script setup>
const navigation = ref()

onMounted(() => {
	const itemOffset = navigation.value.offsetTop

	window.addEventListener('scroll', () => {
		const scrollTop = window.scrollY

		if (scrollTop >= itemOffset) {
			navigation.value.style.height = 'calc(100vh - 40px)'
		} else {
			navigation.value.style.height = 'calc(100vh - 130px)'
		}
	})
})

onUnmounted(() => {
	window.removeEventListener('scroll')
})
</script>

<template>
	<aside ref="navigation" class="navigation">
		<div class="navigation__body">
			<div class="navigation__menu menu">
				<nav class="menu__body">
					<ul class="menu__list">
						<li class="menu__item">
							<NuxtLink to="/" class="menu__link">
								<UiIconHome />
								<span>Главная</span>
							</NuxtLink>
						</li>
						<li class="menu__item">
							<NuxtLink to="/works" class="menu__link">
								<UiIconWorks />
								<span>Работы</span>
							</NuxtLink>
						</li>
						<li class="menu__item">
							<NuxtLink to="/services" class="menu__link">
								<UiIconServices />
								<span>Услуги</span>
							</NuxtLink>
						</li>
						<li class="menu__item">
							<NuxtLink to="/order" class="menu__link">
								<UiIconOrder />
								<span>Заказать сайт</span>
							</NuxtLink>
						</li>
						<li class="menu__item">
							<NuxtLink to="/contacts" class="menu__link">
								<UiIconContacts />
								<span>Контакты</span>
							</NuxtLink>
						</li>
					</ul>
				</nav>
			</div>
			<div class="navigation__socials">
				<div class="navigation__social">
					<a target="_blank" href="https://t.me/tresk" class="menu__link">
						<UiIconTelegramMenu />
						<span>Написать в Telegram</span>
					</a>
				</div>
			</div>
		</div>
	</aside>
</template>

<style lang="scss">
.navigation {
	position: sticky;
	top: rem(20);
	z-index: 10;
	flex: 0 0 rem(80);
	height: 100vh;
	height: calc(100vh - 130px);
	padding-top: rem(40);
	padding-bottom: rem(40);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: inset -8px 0 20px 0 rgb(0 0 0 / 2%);
	transition: all 0.3s ease-in-out;

	// .navigation__body
	&__body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
	}

	// .navigation__socials
	&__socials {
		display: flex;
		flex-direction: column;
		gap: rem(20);
	}

	// .navigation__social
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

	// .menu__list
	&__list {
		display: flex;
		flex-direction: column;
		gap: rem(8);
	}

	// .menu__item
	&__item {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	// .menu__link
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
			font-size: 12px;
			line-height: 160%;
			color: var(--white-color);
			white-space: nowrap;
			pointer-events: none;
			background-color: var(--main-color);
			border-radius: rem(10);
			opacity: 0;
			transition: all 0.3s ease-in-out;

			&::before {
				position: absolute;
				top: 50%;
				left: -4px;
				width: 11px;
				height: 11px;
				content: '';
				background-color: var(--main-color);
				transform: translateY(-50%) rotate(-45deg);
			}
		}

		svg {
			path {
				transition: all 0.3s ease-in-out;
			}
		}

		@media (any-hover: hover) {
			&:hover {
				svg path {
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
				rgb(255 255 255 / 30%) 0%,
				rgb(252 68 75 / 13%) 51.54%,
				rgb(255 255 255 / 30%) 100%
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

			svg {
				path {
					fill: var(--accent-color);
					fill-opacity: 1;
				}
			}
		}
	}
}
</style>
