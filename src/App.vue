<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const initStorage = () => {
  if (localStorage.getItem("UserAbout")) return;

  localStorage.setItem(
    "UserAbout",
    JSON.stringify({
      name: "Кирюха",
      age: 15,
    })
  );

  localStorage.setItem("UserChildren", JSON.stringify([]));
};

initStorage();
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  flex: 1 0 auto;
  width: 100%;
  max-width: 616px;
  padding: 30px 0;
  margin: 0 auto;
}
</style>
