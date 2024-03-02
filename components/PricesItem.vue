<script setup>
defineProps({
	price: Object,
})
</script>

<template>
	<li class="price__item">
		<p class="price__name">
			{{ price?.service }}
		</p>
		<p class="price__value">
			{{ price?.price }}
		</p>
	</li>
</template>
