<template>
  <div id="paginaInicial">
    <h1>Seu site de compras</h1>
    <div id="imageDiv">
      <img id="imagem" src="../../../public/img/caixa.png" alt="" />
    </div>
    <div id="buttonDiv">
      <v-btn id="button" @click="confirmPedido" depressed color="green">
        <router-link to="/loja">{{ nameButton }}</router-link>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginaInicialComp",
  data() {
    return {
      nameButton: "Ir para loja",
    };
  },
};
</script>

<style scoped>
#paginaInicial {
  background-color: #2f3676;
  color: #f2be22;
  height: 944px;
  border-radius: 5px;
  width: 100%;
  position: relative;
}

h1 {
  text-align: center;
  font-size: 2.6em;
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
}

@keyframes box {
  0% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
}

#imageDiv {
  width: 70%;
  margin: 50px auto;
  position: relative;
  background-color: #f2be22;
  height: 450px;
  border-radius: 50%;
}

#imagem {
  width: 80%;
  position: absolute;
  left: 10%;
  animation: box 7s linear infinite;
}

#buttonDiv {
  position: absolute;
  left: 40%;
}

#buttonDiv a {
  text-decoration: none;
  color: white;
  padding: 8px 16px;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 0;
}
</style>

