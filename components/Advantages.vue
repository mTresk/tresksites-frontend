<script setup lang="ts">
import { advatagesItems } from '@/data/advantages-data'

const { appearBottom, appearLeft } = useAnimation()

onMounted(() => {
	appearBottom('.advantages', { delay: 0.3 })
	appearLeft('.advantages-item', { stagger: 0.1, delay: 0.4 })
})
</script>

<template>
	<section class="advantages spacer-60">
		<div class="advantages__body">
			<AdvantagesItem
				v-for="advantagesItem in advatagesItems"
				:key="advantagesItem.title"
				:title="advantagesItem.title"
				:description="advantagesItem.description"
			/>
		</div>
	</section>
</template>

<style lang="scss">
.advantages {
	padding-top: rem(20);
	padding-bottom: rem(20);
	background-color: var(--white-color);
	border-radius: rem(20);
	box-shadow: 0 8px 20px 0 rgb(0 0 0 / 1%);

	@include adaptiveValue('padding-left', 40, 20);
	@include adaptiveValue('padding-right', 40, 20);

	&__body {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		@include adaptiveValue('gap', 60, 24);

		@media (max-width: $mobile) {
			grid-template-columns: 1fr;
		}
	}
}
</style>
