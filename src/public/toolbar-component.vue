<template>
  <div>
    <Toolbar class="Toolbar" fixed>
      <template #start>
        <div class="title">EasyLearn</div> <!-- Agregamos el título aquí -->
        <Button @click="toggleDrawer" class="menu-button">
          ☰
        </Button>
        <div class="flex-row">
          <Button v-for="(item, index) in items" :key="item.label" class="p-button-text" :class="item.class" @click="navigateTo(item.to)">
            {{ item.label }}
          </Button>
        </div>
      </template>
      <template #end>
        <div class="flex-row">
          <Button v-for="(item, index) in itemsRight" :key="item.label" class="p-button-text" :class="item.class" @click="navigateTo(item.to)">
            {{ item.label }}
          </Button>
        </div>
      </template>
    </Toolbar>

    <div class="drawer" :class="{ open: drawer}">
      <Button v-for="(item, index) in items" :key="item.label" class="p-button-text" :class="item.class" @click="navigateTo(item.to)">
        {{ item.label }}
      </Button>
      <Button v-for="(item, index) in itemsRight" :key="item.label" class="p-button-text" :class="item.class" @click="navigateTo(item.to)">
        {{ item.label }}
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import {useRouter} from "vue-router";

export default {
  name: "toolbar-component",
  components: {
    Toolbar,
    Button
  },
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Cursos', to: '/courses', class: 'item-1' },
        { label: 'Publicaciones', to: '/publications', class: 'item-2' },
        { label: 'Login', to: '/login', class: 'item-3' },
      ],
      itemsRight: [
        // Agrega aquí los elementos del lado derecho
      ]
    }
  },
  setup() {
    const router = useRouter();

    const navigateTo = (route) => {
      router.push(route);
    };

    const toggleDrawer = () => {
      this.drawer = !this.drawer;
    };

    return {
      navigateTo,
      toggleDrawer
    };
  }
}
</script>

<style scoped>
.Toolbar {
  position: fixed; /* Posiciona la barra de herramientas en la parte superior */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #26A96C;
  color: white;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.5em; /* Ajusta el tamaño del título según tus necesidades */
  margin-right: 20em; /* Añade un margen a la derecha del título */
}

.menu-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  display: none;
}

.menu-button:hover {
  transform: scale(1.2);
}

.flex-row {
  display: flex;
}

.flex-row .p-button-text {
  margin-right: 5rem;
  color: white;
}

.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 40%;
  margin-top: 4rem;
  background-color: rgba(189, 63, 87, 0.49);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 300;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.drawer.open {
  transform: translateX(0);
}

.p-button-text {
  color: white !important;
  margin-left: 70%;
  margin-top: -5%;
}

.drawer Button {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .flex-row {
    display: none;
  }

  .drawer {
    display: flex;
  }

  .p-button-text {
    font-size: 24px;
  }
}
</style>