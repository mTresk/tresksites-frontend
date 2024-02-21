<script setup>
defineProps({
	works: Object,
})
</script>

<template>
	<section class="works spacer-60">
		<div class="works__body">
			<TransitionGroup name="card">
				<div v-if="works?.pages" v-for="(page, index) in works?.pages" :key="index">
					<WorksCard v-for="work in page.pageData" :key="work.slug" :work="work" />
				</div>
				<WorksCard v-else v-for="work in works" :key="work.slug" :work="work" />
			</TransitionGroup>
		</div>
	</section>
</template>

<style lang="scss">
.works {
	// .works__body
	&__body {
		display: flex;
		flex-direction: column;
		gap: rem(20);

		> div {
			display: flex;
			flex-direction: column;
			gap: rem(20);
		}
	}
}

.work-card {
	display: flex;
	gap: rem(40);
	align-items: center;
	justify-content: space-between;
	padding: rem(20) rem(40) rem(20) rem(20);
	cursor: pointer;
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	// .work-card__image
	&__image {
		position: relative;
		flex: 0 1 rem(1058);
		aspect-ratio: 1920 / 1080;
		overflow: hidden;
		border-top-left-radius: rem(12);
		border-bottom-left-radius: rem(12);

		img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&::before {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 5;
			width: 70%;
			height: 100%;
			content: '';
			background: linear-gradient(271deg, #fff 0%, rgb(217 217 217 / 0%) 100%);
		}
	}

	// .work-card__content
	&__content {
		flex: 0 1 rem(422);
	}

	// .work-card__label
	&__label {
		display: block;
		margin-bottom: rem(8);
		font-size: 14px;
		line-height: 125%;

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
				font-size: 16px;
				font-weight: 500;
				line-height: 150%;

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
}

.card-enter-active,
.card-leave-active {
	transition: all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

.card-enter-from,
.card-leave-to {
	opacity: 0;
	transform: translateX(-20px);
}

.card-enter-active .work-card__image,
.card-leave-active .work-card__image {
	transition: all 1.1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

.card-enter-from .work-card__image,
.card-leave-to .work-card__image {
	opacity: 0;
	transform: translateX(-20px) rotate(-0.6deg);
}
</style>
