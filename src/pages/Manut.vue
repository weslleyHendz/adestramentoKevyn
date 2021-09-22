<template>
  <q-page class="row">
    <div class="full-height">
      <div class="row">
        <div class="q-pa-md q-gutter-md">
          <q-card class="my-card row justify-center">
            <q-icon
              class="col-12 q-mt-sm"
              size="100px"
              name="engineering"
              color="black"
            />

            <q-card-section>
              <div class="text-right"></div>
            </q-card-section>

            <q-card-section class="text-h2">
              Em manutenção

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
    };
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
  height: 100%
  min-height: 100%
</style>
