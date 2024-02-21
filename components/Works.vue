<script setup>
defineProps({
	works: Object,
})

const { appearLeft, rotate } = useAnimation()

onMounted(() => {
	appearLeft('.animate-card')
	rotate('.work-card__image')
})
</script>

<template>
	<section class="works spacer-60">
		<div class="works__body">
			<TransitionGroup name="card">
				<div v-if="works?.pages" v-for="(page, index) in works?.pages" :key="index">
					<WorksCard class="animate-card" v-for="work in page?.pageData" :key="work.slug" :work="work" />
				</div>
				<WorksCard class="animate-card" v-else v-for="work in works" :key="work?.slug" :work="work" />
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
