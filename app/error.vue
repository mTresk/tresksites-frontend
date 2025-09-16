<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="page">
    <div class="error">
      <div class="error__container">
        <div class="error__body">
          <h1
            :data-error="error.statusCode"
            class="error__title"
          >
            {{ error.statusCode }}
          </h1>
          <div class="error__status">
            {{ error.message }}
          </div>
          <UiButton @click="handleError">
            Вернуться на главную
          </UiButton>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.error {
  min-height: 100vh;
  min-height: 100dvh;

  // .error__body
  &__body {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-height: 100dvh;
    padding-top: rem(120);
    padding-bottom: rem(120);
  }

  // .error__title
  &__title {
    position: relative;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    animation: shake 0.6s ease-in-out infinite alternate;

    @include adaptive-value('margin-bottom', 50, 20);

    &::before {
      position: absolute;
      left: 50%;
      width: 100%;
      height: 0.1em;
      overflow: hidden;
      line-height: 0.5em;
      content: attr(data-error);
      opacity: 0.7;
      transform: translate(-50%, 0.34em);
      animation:
        scan 0.5s ease-in-out 275ms infinite alternate,
        glitch-anim 0.3s ease-in-out infinite alternate;
    }

    &::after {
      position: absolute;
      top: rem(-8);
      left: 50%;
      width: 100%;
      height: 0.5em;
      overflow: hidden;
      line-height: 0.1em;
      content: attr(data-t);
      opacity: 0.8;
      transform: translate(-50%, 0.34em);
      animation:
        scan 665ms ease-in-out 0.59s infinite alternate,
        glitch-anim 0.3s ease-in-out infinite alternate;
    }

    @include adaptive-value('font-size', 400, 120);
  }

  &__status {
    max-width: rem(800);
    padding: rem(15) rem(20);
    margin-bottom: rem(30);
    line-height: 140%;
    text-align: center;
    background-color: var(--light-color);
    border-radius: rem(12);

    @include adaptive-value('font-size', 16, 14);
  }

  @keyframes glitch-anim {
    0% {
      clip-path: rect(rem(32), rem(9999), rem(28), 0);
    }

    10% {
      clip-path: rect(rem(13), rem(9999), rem(37), 0);
    }

    20% {
      clip-path: rect(rem(45), rem(9999), rem(33), 0);
    }

    30% {
      clip-path: rect(rem(31), rem(9999), rem(94), 0);
    }

    40% {
      clip-path: rect(rem(88), rem(9999), rem(98), 0);
    }

    50% {
      clip-path: rect(rem(9), rem(9999), rem(98), 0);
    }

    60% {
      clip-path: rect(rem(37), rem(9999), rem(17), 0);
    }

    70% {
      clip-path: rect(rem(77), rem(9999), rem(34), 0);
    }

    80% {
      clip-path: rect(rem(55), rem(9999), rem(49), 0);
    }

    90% {
      clip-path: rect(rem(10), rem(9999), rem(2), 0);
    }

    100% {
      clip-path: rect(rem(35), rem(9999), rem(53), 0);
    }
  }

  @keyframes scan {
    0%,
    20%,
    100% {
      height: 0;
      transform: translate(-50%, 0.44em);
    }

    10%,
    15% {
      height: 1em;
      line-height: 0.2em;
      transform: translate(-55%, 0.09em);
    }
  }

  @keyframes shake {
    0% {
      transform: translate(rem(-1));
    }

    10% {
      transform: translate(rem(2), rem(1));
    }

    30% {
      transform: translate(rem(-3), rem(2));
    }

    35% {
      filter: blur(rem(4));
      transform: translate(rem(2), rem(-3));
    }

    45% {
      filter: blur(0);
      transform: translate(rem(2), rem(2)) skewY(-1deg) scaleX(0.96);
    }

    50% {
      transform: translate(rem(-3), rem(1));
    }
  }
}
</style>
