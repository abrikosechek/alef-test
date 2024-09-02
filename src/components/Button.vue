<template>
  <button class="button" :class="color">
    <component class="button__icon" v-if="icon" :is="icons[`Icon${icon}`]" />
    <p class="button__text"><slot /></p>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import * as icons from "@/icons";

defineProps({
  color: {
    type: String,
    default: "primary",
    validator: (prop) => ["primary", "outlined"].includes(prop),
  },
  icon: {
    type: String,
    default: null,
  },
});
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 9999px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &.primary {
    color: white;
    background: var(--primary);

    & > .button__icon {
      fill: white;
      stroke: white;
    }

    &:hover {
      background: var(--primary-hover);
    }
  }

  &.outlined {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);

    & > .button__icon {
      fill: var(--primary);
      stroke: var(--primary);
    }

    &:hover {
      color: var(--primary-hover);
      border: 2px solid var(--primary-hover);

      & > .button__icon {
        fill: var(--primary-hover);
        stroke: var(--primary-hover);
      }
    }
  }
}
</style>
