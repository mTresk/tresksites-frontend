<script setup>
defineProps({
	works: Object,
})

const { appearLeft, rotate } = useAnimation()

onMounted(() => {
	const cards = document.querySelectorAll('.animate-card')
	const images = document.querySelectorAll('.work-card__image')

	appearLeft(cards)
	rotate(images)
})
</script>

<template>
	<section class="works spacer-60">
		<div class="works__body">
			<TransitionGroup v-if="works?.pages" name="card">
				<div v-for="(page, index) in works?.pages" :key="index">
					<WorksCard v-for="work in page?.pageData" :key="work.slug" class="animate-card" :work="work" />
				</div>
			</TransitionGroup>
			<template v-else>
				<WorksCard v-for="work in works" :key="work?.slug" class="animate-card" :work="work" />
			</template>
		</div>
	</section>
</template>

<style lang="scss">
.works {
	position: relative;

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

.card-enter-active,
.card-leave-active {
	transition: all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95) 0.1s;
}

.card-enter-from,
.card-leave-to {
	opacity: 0;
	transform: translateX(-20px);
}

.card-enter-active .work-card__image,
.card-leave-active .work-card__image {
	transition: all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95) 0.1s;
}

.card-enter-from .work-card__image,
.card-leave-to .work-card__image {
	opacity: 0;
	transform: translateX(-20px) rotate(-0.6deg);
}
</style>
