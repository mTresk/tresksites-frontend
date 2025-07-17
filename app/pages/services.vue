<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'layout',
        mode: 'out-in',
    },
})

const { appearLeft } = useAnimation()

onMounted(() => {
    appearLeft('.price-animate')
})
</script>

<template>
    <div>
        <Head>
            <Title>Услуги</Title>
            <Meta
                name="description"
                content="Дизайн, верстка и программирование сайтов и веб-приложений"
            />
        </Head>
        <Services />
        <Prices class="price-animate" />
        <Technology />
    </div>
</template>
