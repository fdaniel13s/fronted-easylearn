<script>
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";

export default {
  name: "toolbar-component",
  components: {
    Toolbar,
    Button
  },
}
</script>

<template>
  <Toolbar class="Toolbar">
    <template #start>
      <span>
        Easy Learn
      </span>
    </template>

    <template #center>
      <span> Welcome to this amazing place to Learn easy. </span>
    </template>
    <template #end>
      <Button label="Login" />
    </template>
  </Toolbar>
</template>

<style scoped>
.Toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--caribben);
  z-index: 1000; /* Esto asegura que la barra de herramientas esté por encima de otros elementos de la página */
  display:flex;
  justify-content: space-between;

}
</style>