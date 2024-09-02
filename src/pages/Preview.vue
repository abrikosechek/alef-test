<template>
  <section class="personal">
    <Title> Персональные данные </Title>

    <p class="personal__text">{{ userAbout.name }}, {{ userAbout.age }} лет</p>
  </section>

  <section class="children">
    <Title> Дети </Title>

    <div class="children__list">
      <div
        v-for="(child, index) in userChildren"
        :key="index"
        class="children__list__item"
      >
        <p>{{ child.name }}, {{ child.age }} лет</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/Title.vue";

const userAbout = ref(JSON.parse(localStorage.getItem("UserAbout")));
const userChildren = ref(JSON.parse(localStorage.getItem("UserChildren")));
</script>

<style scoped lang="scss">
.personal {
  &__text {
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
}

.children {
  margin-top: 60px;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;

    &__item {
      flex: 0 0 auto;
      text-size-adjust: 30%;
      padding: 10px 20px;
      background: var(--gray-l);
      border-radius: 5px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    }
  }
}
</style>
