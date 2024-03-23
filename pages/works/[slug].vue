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
				<LayoutBreadcrumb class="work-animate" path="/works" path-name="Работы" :current="work?.name " />
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
							<source media="(max-width: 479px)" :srcset="`${content?.data?.files?.imageWebpSm} 1x, ${content?.data?.files?.imageWebpSmX2} 2x`" type="image/webp">
							<source
								media="(min-width: 480px)"
								:srcset="`${content?.data?.files?.imageWebp} 1x, ${content?.data?.files?.imageWebpX2} 2x`"
								type="image/webp"
							>
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

<style lang="scss" scoped>
.work {
	padding-right: rem(20);
	padding-left: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-top', 60, 40);
	@include adaptiveValue('padding-bottom', 60, 40);

	&__wrapper {
		max-width: rem(1000);
		margin-inline: auto;
	}

	&__title {
		margin-bottom: rem(20);
	}

	&__list {
		@include adaptiveValue('margin-bottom', 40, 30);

		:deep(ul) {
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

	&__block {
		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 50, 40);
		}

		:deep(h2) {
			@include adaptiveValue('margin-bottom', 20, 16);
		}

		:deep(p) {
			font-weight: 500;
			line-height: 150%;

			@include adaptiveValue('font-size', 16, 14);
			@include adaptiveValue('margin-bottom', 20, 16);
		}

		:deep(a) {
			text-decoration: underline;
			text-underline-offset: rem(4);
			transition: color 0.3s ease-in-out;

			@media (any-hover: hover) {
				&:hover {
					color: var(--accent-color);
				}
			}
		}

		:deep(ul) {
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

	&__image {
		margin-bottom: rem(20);
		overflow: hidden;
		border-radius: rem(12);

		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 50, 40);
		}

		:deep(img) {
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
</style>
