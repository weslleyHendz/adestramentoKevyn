<template>
  <router-view class="bg-grey-3" />
  <a
    href="https://api.whatsapp.com/send?phone=555191622660&text=Oi.%20Eu%20estava%20olhando%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20..."
    target="_blank"
  >
    <q-icon
      class="
        col-12
        q-mt-sm
        absolute-bottom-right
        q-mb-sm q-mr-sm
        cursor-pointer
      "
      size="75px"
      name="whatsapp"
      color="black"
      url="/teste.com"
    >
    </q-icon>
  </a>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
