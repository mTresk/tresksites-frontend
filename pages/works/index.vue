<script setup>
const works = ref({})

works.value = await $fetch(`${useRuntimeConfig().public['backendUrl']}/api/works`)

const fetchMoreWorks = async () => {
	const response = await $fetch(
		`${useRuntimeConfig().public['backendUrl']}/api/works?page=${(works.value.meta.current_page += 1)}`
	)
	response.data.map((item) => {
		works.value.data.push(item)
	})
}
</script>

<template>
	<div>
		<Head>
			<Title>Работы</Title>
			<Meta name="description" content="Выполненные работы по верстке и программированию сайтов" />
		</Head>
		<Works :works="works.data" />
		<div class="spacer-60">
			<UiButton
				v-if="works.meta.current_page < works.meta.last_page"
				@click="fetchMoreWorks()"
				transparent
				wide
				size="lg"
				>Показать еще<UiIconArrowDown
			/></UiButton>
		</div>
	</div>
</template>
