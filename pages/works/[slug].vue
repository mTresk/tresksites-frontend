<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import type { IWorkItem } from '@/types'

const route = useRoute()

const { appearLeft } = useAnimation()

const fetcher = async () => await useNuxtApp().$api<IWorkItem>(`/api/works/${route.params.slug}`)

const {
	data: work,
	suspense,
	isLoading,
} = useQuery({
	queryKey: [route.params.slug],
	queryFn: fetcher,
})

await suspense()

const seoDescription = 'Описание выполненной работы работы по верстке и программированию'

onMounted(() => {
	appearLeft('.work-animate')
})
</script>

<template>
	<div>
		<Head>
			<Title>{{ work?.seo?.title ?? work?.name }}</Title>
			<Meta name="description" :content="work?.seo?.description ?? seoDescription" />
			<Meta property="og:description" :content="work?.seo?.description ?? seoDescription" />
			<Meta name="twitter:description" :content="work?.seo?.description ?? seoDescription" />
		</Head>
		<section class="work spacer-60">
			<div class="work__wrapper">
				<ul class="breadcrumb work-animate">
					<li class="breadcrumb__item">
						<NuxtLink to="/works">
							Работы
						</NuxtLink>
					</li>
					<li class="breadcrumb__item breadcrumb__item--active">
						{{ work?.name }}
					</li>
				</ul>
				<div class="work__label work-animate">
					<a v-if="work?.url" :href="work?.url" target="_blank">{{ work?.url }}</a>
					<span v-if="work?.label">{{ work?.label }}</span>
				</div>
				<h1 class="work__title work-animate">
					{{ work?.name }}
				</h1>
				<div class="work__list work-animate" v-html="work?.list" />
				<article v-for="(content, key) in work?.content" :key="key" class="work__block work-animate">
					<div v-html="content?.data?.html" />
					<div v-if="content?.data?.files" class="work__image">
						<picture>
							<source
								media="(min-width: 400px)"
								:srcset="`${content?.data?.files?.imageWebp} 1x, ${content?.data?.files?.imageWebpX2} 2x`"
								type="image/webp"
							>
							<source media="(max-width: 400px)" :srcset="`${content?.data?.files?.imageWebpSm} 1x, ${content?.data?.files?.imageWebpSmX2} 2x`" type="image/webp">
							<source media="(max-width: 400px)" :srcset="`${content?.data?.files?.imageSm} 1x, ${content?.data?.files?.imageSmX2} 2x`">
							<img
								loading="lazy"
								:src="content?.data?.files?.image"
								:srcset="`${content?.data?.files?.image} 1x, ${content?.data?.files?.imageX2} 2x`"
								:alt="work?.name"
							>
						</picture>
					</div>
				</article>
			</div>
		</section>
		<section v-if="work?.otherWorks" class="more-works">
			<h4 class="more-works__title spacer-20">
				Еще работы
			</h4>
			<Works :works="work?.otherWorks" :is-loading="isLoading" />
		</section>
		<div class="spacer-60">
			<NuxtLink to="/works">
				<UiButton transparent wide size="lg">
					Другие работы<UiIconArrowUp />
				</UiButton>
			</NuxtLink>
		</div>
		<Logos />
		<Technology />
	</div>
</template>

<style lang="scss">
.work {
	padding-right: rem(20);
	padding-left: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	// .work__wrapper
	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	// .work__title
	&__title {
		margin-bottom: rem(20);
	}

	// .work__list
	&__list {
		@include adaptiveValue('margin-bottom', 40, 30);

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

	// .work__block
	&__block {
		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 50, 40);
		}

		h2 {
			@include adaptiveValue('margin-bottom', 20, 16);
		}

		p {
			font-weight: 500;
			line-height: 150%;

			@include adaptiveValue('font-size', 16, 14);
			@include adaptiveValue('margin-bottom', 20, 16);
		}

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

		ul {
			@include adaptiveValue('margin-bottom', 20, 16);

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

	// .work__image
	&__image {
		margin-bottom: rem(20);
		overflow: hidden;
		border-radius: rem(12);

		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 50, 40);
		}

		img {
			width: 100%;
			max-width: 100%;
		}
	}

	&__label {
		display: block;
		margin-bottom: rem(10);
		line-height: 125%;

		@include adaptiveValue('font-size', 14, 12);

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
}

.breadcrumb {
	display: flex;
	flex-wrap: wrap;
	row-gap: rem(6);
	align-items: center;

	@include adaptiveValue('margin-bottom', 30, 20);

	// .breadcrumb__item
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

		// .breadcrumb__item--active
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
