<template>
  <q-page class="row">
    <div class="full-height">
      <div class="row justify-center">
        <div class="text-h4 q-my-sm col-12 text-center">Obediência Básica</div>

        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card class="my-card row justify-center">
            <q-icon
              class="col-12 q-mt-sm"
              size="100px"
              name="pets"
              color="black"
            />

            <q-card-section>
              <div class="text-h6">Obediência Básica</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ obedienciaBasica }}
              <br />
            </q-card-section>
          </q-card>
          <q-card class="my-card row justify-center">
            <q-icon
              class="col-12 q-mt-sm"
              size="100px"
              name="people"
              color="black"
            />

            <q-card-section>
              <div class="text-h6">Vínculo</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ vinculo }}
              <br />
            </q-card-section>
          </q-card>
          <q-card class="my-card row justify-center">
            <q-icon
              class="col-12 q-mt-sm"
              size="100px"
              name="local_hospital"
              color="black"
            />

            <q-card-section>
              <div class="text-h6">Saúde Física</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ saudeFisica }}
              <br />
            </q-card-section>
          </q-card>
          <q-card class="my-card row justify-center">
            <q-icon
              class="col-12 q-mt-sm"
              size="100px"
              name="psychology"
              color="black"
            />

            <q-card-section>
              <div class="text-h6">Saúde Mental</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ saudeFisica }}
              <br />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {
      obedienciaBasica:
        "A obediência básica é o mínimo necessário para seu cão poder participar em harmonia da rotina em família.",
      vinculo:
        "O vínculo entre o humano e o cão é a base de tudo. Um vínculo concreto é formado por confiança, respeito e reforços positivos.",
      saudeFisica: "Em manutenção",
    };
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 260px
</style>
