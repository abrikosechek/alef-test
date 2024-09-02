<template>
  <section class="personal">
    <Title> Персональные данные </Title>

    <div class="personal__inputs">
      <Input
        v-model="userAbout.name"
        placeholder="Имя"
        :warning="!userAbout.name ? 'Заполните поле' : false"
      />
      <Input
        v-model="userAbout.age"
        placeholder="Возраст"
        number
        :warning="!userAbout.age ? 'Заполните поле' : false"
      />
    </div>
  </section>

  <section class="children">
    <div class="children__header">
      <Title> Дети (макс. 5) </Title>

      <Button
        v-if="userChildren.length < 5"
        color="outlined"
        icon="Plus"
        @click="addChildren"
      >
        Добавить ребёнка
      </Button>
    </div>

    <div class="children__list">
      <div
        class="children__list__item"
        v-for="(child, index) in userChildren"
        :key="index"
      >
        <Input
          class="children__list__item__input"
          v-model="child.name"
          placeholder="Имя"
          :warning="!child.name && showChildWarning ? 'Заполните поле' : false"
        />
        <Input
          class="children__list__item__input"
          v-model="child.age"
          placeholder="Возраст"
          number
          :warning="!child.age && showChildWarning ? 'Заполните поле' : false"
        />

        <button
          class="children__list__item__delete"
          @click="removeChildren(index)"
        >
          Удалить
        </button>
      </div>
    </div>
  </section>

  <Button class="save" @click="save"> Сохранить </Button>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/Title.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const userAbout = ref(JSON.parse(localStorage.getItem("UserAbout")));
const userChildren = ref(JSON.parse(localStorage.getItem("UserChildren")));
const showChildWarning = ref(false);

function hasEmptyField(obj) {
  return Object.values(obj).some(
    (value) => value === "" || value === null || value === undefined
  );
}

const addChildren = () => {
  if (userChildren.value.length >= 5) return;

  showChildWarning.value = false;
  userChildren.value.push({
    name: null,
    age: null,
  });
};

const removeChildren = (index) => {
  userChildren.value.splice(index, 1);
};

const save = () => {
  showChildWarning.value = false;
  
  if (userChildren.value.some(hasEmptyField)) {
    showChildWarning.value = true;
    return;
  }

  if (userAbout.value.name && userAbout.value.age) {
    localStorage.setItem("UserAbout", JSON.stringify(userAbout.value));
    localStorage.setItem("UserChildren", JSON.stringify(userChildren.value));
  }
};
</script>

<style scoped lang="scss">
.personal {
  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
}

.children {
  margin-top: 45px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    &__item {
      display: flex;
      align-items: center;
      gap: 18px;
      width: 100%;

      &__input {
        flex: 1 0 auto;
        width: auto;
      }

      &__delete {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        background: transparent;
        border: none;
        color: var(--primary);
        cursor: pointer;

        &:hover {
          color: var(--primary-hover);
        }
      }
    }
  }
}

.save {
  margin-top: 30px;
}
</style>
