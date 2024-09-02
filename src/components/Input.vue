<template>
  <div class="input__wrapper">
    <div
      class="input"
      :class="{
        active: inputHovered,
        warning,
      }"
    >
      <p
        class="input--placeholder"
        :class="{ active: inputNotEmpty || inputHovered }"
      >
        {{ placeholder }}
      </p>

      <input
        ref="inputComponent"
        type="text"
        :value="props.modelValue"
        @keypress="isNumber($event)"
        @input="emit('update:modelValue', $event.target.value)"
        @focus="inputHovered = true"
        @blur="inputHovered = false"
      />

      <div class="input__additional-area" @click="inputComponent.focus()" />
    </div>
    <p v-if="warning" class="input__warning">{{ props.warning }}</p>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  placeholder: {},
  modelValue: {},
  warning: {
    type: [String, Number, Boolean, null],
    default: false,
  },
  number: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

const isNumber = (evt) => {
  if (!props.number) return evt;

  const keysAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const keyPressed = evt.key;

  if (!keysAllowed.includes(keyPressed)) {
    evt.preventDefault();
  }
};

const inputComponent = ref(null);
const inputHovered = ref(false);
const inputNotEmpty = computed(
  () => ![null, undefined, "", " "].includes(props.modelValue)
);
</script>

<style scoped lang="scss">
.input {
  position: relative;
  width: 100%;
  height: 56px;
  background: white;
  border-radius: 1px;
  border: 1px solid var(--gray-l);

  & > input {
    position: absolute;
    z-index: 2;
    left: 16px;
    bottom: 4px;
    background: transparent;
    border: none;
    outline: none;
    color: var(--black);
    font-size: 14px;
    line-height: 24px;
  }

  &__additional-area {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    cursor: text;
  }

  &--placeholder {
    position: absolute;
    z-index: 0;
    left: 16px;
    top: 16px;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray);
    user-select: none;
    transition: 0.2s;

    &.active {
      top: 8px;
      font-size: 13px;
      line-height: 16px;
    }
  }

  &__warning {
    font-size: 14px;
    line-height: 24px;
    color: var(--red);
  }

  &.active {
    box-shadow: 0 0 8px #33333329;
  }

  &.warning {
    background: var(--red-girl);

    &.active {
      box-shadow: 0 0 8px var(--red-girl);
    }
  }
}
</style>
