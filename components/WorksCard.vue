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
				<UiButton>Посмотреть работу<UiIconArrowRight /></UiButton
			></NuxtLink>
		</div>
	</article>
</template>
