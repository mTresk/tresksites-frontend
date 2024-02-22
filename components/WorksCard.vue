<script setup>
defineProps({
	work: Object,
})
</script>

<template>
	<article @click="() => navigateTo(`/works/${work.slug}`)" class="work-card">
		<div class="work-card__image">
			<picture>
				<source :srcset="`${work.featured.imageWebp} 1x, ${work.featured.imageWebpX2} 2x`" type="image/webp" />
				<img
					loading="lazy"
					:src="work.featured.image"
					:srcset="`${work.featured.image} 1x, ${work.featured.imageX2} 2x`"
					:alt="work.title" />
			</picture>
		</div>
		<div class="work-card__content">
			<div class="work-card__label">
				<a v-if="work.url" :href="work.url" target="_blank">{{ work.url }}</a>
				<span v-if="work.label">{{ work.label }}</span>
			</div>
			<h4 class="work-card__title spacer-20">{{ work.title }}</h4>
			<div v-html="work.list" class="work-card__info"></div>
			<NuxtLink :to="`/works/${work.slug}`">
				<UiButton class="work-card__button">Посмотреть работу<UiIconArrowRight /></UiButton
			></NuxtLink>
		</div>
	</article>
</template>

<style lang="scss">
.work-card {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: rem(20) rem(40) rem(20) rem(20);
	cursor: pointer;
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('gap', 40, 20);
	@include adaptiveValue('padding-right', 40, 20);

	@media (max-width: $tablet) {
		flex-direction: column;
		align-items: flex-start;
	}

	@media (max-width: $mobile) {
		padding: 0;
	}

	// .work-card__image
	&__image {
		position: relative;
		flex: 0 1 rem(1058);
		aspect-ratio: 1920 / 1080;
		overflow: hidden;
		border-radius: rem(12);

		img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		@media (max-width: $tablet) {
			flex: 1 1 auto;
			width: 100%;
		}
	}

	// .work-card__content
	&__content {
		flex: 0 1 rem(422);

		@media (max-width: $tablet) {
			flex: 1 1 auto;
			width: 100%;
		}

		@media (max-width: $mobile) {
			padding-inline: rem(20);
			padding-bottom: rem(20);
		}
	}

	// .work-card__label
	&__label {
		display: block;
		line-height: 125%;

		@include adaptiveValue('font-size', 14, 12);
		@include adaptiveValue('margin-bottom', 8, 10);

		a {
			text-decoration: underline;
			text-underline-offset: rem(4);
			transition: color 0.3s ease-in-out;

			@media (any-hover: hover) {
				&:hover {
					color: var(--accent-color);
				}
			}
		}
	}

	// .work-card__info
	&__info {
		margin-bottom: rem(20);

		ul {
			li {
				position: relative;
				padding-left: rem(16);
				font-weight: 500;
				line-height: 150%;

				@include adaptiveValue('font-size', 16, 14);

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

	&__button {
		@media (max-width: $mobileSmall) {
			width: 100%;
		}
	}
}
</style>
