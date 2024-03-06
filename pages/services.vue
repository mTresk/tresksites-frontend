<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import type { IServices } from '@/types'

const fetcher = async () => await useNuxtApp().$api<IServices>('/api/services')

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
