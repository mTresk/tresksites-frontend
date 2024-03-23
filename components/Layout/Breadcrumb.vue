<script setup lang="ts">
interface IProps {
	path: string
	pathName: string
	current: string | undefined
}

defineProps<IProps>()
</script>

<template>
	<ul class="breadcrumb work-animate">
		<li class="breadcrumb__item">
			<NuxtLink :to="path">
				{{ pathName }}
			</NuxtLink>
		</li>
		<li class="breadcrumb__item breadcrumb__item--active">
			{{ current }}
		</li>
	</ul>
</template>

<style lang="scss">
.breadcrumb {
	display: flex;
	flex-wrap: wrap;
	row-gap: rem(6);
	align-items: center;

	@include adaptiveValue('margin-bottom', 30, 20);

	&__item {
		position: relative;
		font-weight: 500;
		line-height: normal;
		color: var(--main-color);
		text-decoration: underline;
		transition: color 0.3s ease-in-out;

		@include adaptiveValue('font-size', 16, 14);

		.dark-mode & {
			color: var(--main-color-dark);
		}

		&:not(:last-child) {
			margin-right: rem(38);
			white-space: nowrap;
		}

		&--active {
			color: var(--grey-color);
			text-decoration: none;
			pointer-events: none;

			.dark-mode & {
				color: var(--grey-color-dark);
			}
		}

		&::after {
			position: absolute;
			top: 9px;
			right: -24px;
			width: rem(6);
			height: rem(6);
			pointer-events: none;
			content: '';
			background-color: var(--accent-color);
			border-radius: 50%;
		}

		&:last-child {
			&::after {
				display: none;
			}
		}

		&:hover {
			color: var(--accent-color);
		}
	}
}
</style>
