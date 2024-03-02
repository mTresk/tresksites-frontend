<script setup>
import { useQuery } from '@tanstack/vue-query'

const fetcher = async () => await useNuxtApp().$api('/api/services')

const {
	isLoading,
	data: services,
	suspense,
} = useQuery({
	queryKey: ['services'],
	queryFn: fetcher,
})

await suspense()
</script>

<template>
	<div>
		<Head>
			<Title>Услуги</Title>
			<Meta name="description" content="Дизайн, верстка и программирование сайтов и веб-приложений" />
		</Head>
		<Services :services="services" :is-loading="isLoading" />
		<Advantages />
		<Technology />
	</div>
</template>
