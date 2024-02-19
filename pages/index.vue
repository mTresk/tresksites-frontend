<template>
	<div>
		<Hero />
		<Advantages />
		<Logos />
		<Works />
		<div class="spacer-60">
			<NuxtLink to="/works">
				<UiButton transparent wide size="lg">Другие работы<UiIconArrowUp /></UiButton>
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss">
.chip {
	display: flex;
	gap: rem(8);
	align-items: center;
	justify-content: center;
	padding: rem(9) rem(14);
	background-color: var(--light-color);
	border-radius: rem(16);

	span {
		font-size: 15px;
	}
}
</style>
