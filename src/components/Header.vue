<template>
  <header class="header">
    <IconLogo class="header--logo" />

    <nav class="header__links">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="header__link"
      >
        {{ link.text }}
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { IconLogo } from "@/icons";

const links = [
  {
    to: "/form",
    text: "Форма",
  },
  {
    to: "/preview",
    text: "Превью",
  },
];
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 75px;
  padding: 20px 50px;
  border-bottom: 1px solid #1111111a;

  &--logo {
    flex: 0 0 auto;
    width: 175px;
  }

  &__links {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  &__link {
    opacity: 0.48;
    color: var(--black);
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s;

    &:hover,
    &.router-link-active {
      opacity: 0.7;
    }
  }
}
</style>
