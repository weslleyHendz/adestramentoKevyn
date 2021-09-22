<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-img
          src="../../public/img/kevyn-preto.jpeg"
          :ratio="1"
          class="absolute-right q-mr-smx"
          width="100px"
        ></q-img>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <div class="text-center q-my-md">
        <q-img
          src="../../public/img/kevyn-home.png"
          width="25%"
          class="q-pl-sm"
        />
      </div>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Página Inicial",
    icon: "input",
    link: "/",
  },
  {
    title: "Obedência Básica",
    icon: "pets",
    link: "/#/obediencia-basica",
  },
  {
    title: "Hospedagem",
    icon: "home",
    link: "/#/manutencao",
  },
  {
    title: "Produtos",
    icon: "shopping_cart",
    link: "/#/manutencao",
  },
  {
    title: "Instagram",
    icon: "fab fa-instagram",
    link: "https://instagram.com/adestramentokevyn",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
