<script setup lang="ts">
import type { IServicesItem } from '@/types'

defineProps<{
    servicesItem: IServicesItem
}>()
</script>

<template>
    <NuxtLink to="/order" class="service-card">
        <img class="service-card__icon" :src="servicesItem.icon" :alt="servicesItem.title">
        <h5 class="service-card__title">
            {{ servicesItem.title }}
        </h5>
        <p class="service-card__description">
            {{ servicesItem.description }}
        </p>
        <UiIconArrowCard class="service-card__arrow" />
    </NuxtLink>
</template>

<style lang="scss" scoped>
.service-card {
	position: relative;
	padding: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);
	transition: box-shadow 0.3s ease-in-out;

	@media (any-hover: hover) {
		&:hover {
			box-shadow: 0 8px 20px 0 rgb(0 0 0 / 8%);

			:deep(.service-card__arrow ){
				path {
					fill-opacity: 0.6;
				}
			}
		}
	}

	&__icon {
		width: auto;
		max-height: rem(48);
		margin-bottom: rem(20);
	}

	&__title {
		margin-bottom: rem(8);
	}

	&__description {
		min-height: rem(80);
		font-weight: 500;
		line-height: 150%;

		@include adaptive-value('font-size', 16, 14);
	}

	:deep(.service-card__arrow){
		position: absolute;
		top: 15px;
		right: 15px;

		path {
			transition: fill-opacity 0.3s ease-in-out;

			@media (prefers-color-scheme: dark) {
				fill: var(--grey-color);
			}
		}
	}
}
</style>
