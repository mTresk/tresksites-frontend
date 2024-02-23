<script setup>
import { useQuery } from '@tanstack/vue-query'

const route = useRoute()

const { appearLeft } = useAnimation()

const fetcher = async () => await $fetch(`${useRuntimeConfig().public['backendUrl']}/api/works/${route.params.slug}`)

const {
	isLoading,
	data: work,
	suspense,
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
			<Title>{{ work?.data?.seo?.title ?? work?.data?.title }}</Title>
			<Meta name="description" :content="work?.data?.seo?.description ?? seoDescription" />
			<Meta property="og:description" :content="work?.data?.seo?.description ?? seoDescription" />
			<Meta name="twitter:description" :content="work?.data?.seo?.description ?? seoDescription" />
		</Head>
		<section class="work spacer-60">
			<div class="work__wrapper">
				<ul class="breadcrumb work-animate">
					<li class="breadcrumb__item"><NuxtLink to="/works">Работы</NuxtLink></li>
					<li class="breadcrumb__item breadcrumb__item--active">{{ work?.data?.title }}</li>
				</ul>
				<h1 class="work__title work-animate">{{ work?.data?.title }}</h1>
				<div v-html="work?.data?.list" class="work__list work-animate"></div>
				<div v-for="(content, key) in work?.data?.content" :key="key" class="work__block work-animate">
					<div v-html="content?.data?.html"></div>
					<div v-if="content?.data?.images" class="work__image">
						<picture>
							<source
								:srcset="`${content?.data?.images?.imageWebp} 1x, ${content?.data?.images?.imageWebpX2} 2x`"
								type="image/webp" />
							<img
								loading="lazy"
								:src="content?.data?.images?.image"
								:srcset="`${content?.data?.images?.image} 1x, ${content?.data?.images?.imageX2} 2x`"
								:alt="work?.data?.title" />
						</picture>
					</div>
				</div>
			</div>
		</section>
		<section class="images-works">
			<h4 class="images-works__title spacer-20">Еще работы</h4>
			<Works :works="work?.otherWorks" />
		</section>
		<div class="spacer-60">
			<NuxtLink to="/works">
				<UiButton transparent wide size="lg">Другие работы<UiIconArrowUp /></UiButton>
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
