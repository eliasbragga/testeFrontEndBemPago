<template>
  <div id="compra">
    <h2>PARABÉNS</h2>
    <div id="imagem">
      <img src="../../../public/img/compraFializada.jpg" alt="" />
    </div>
    <div id="slideAvaliacao">
      <v-col cols="12">
        <v-subheader class="pl-0"> Avalie sua compra </v-subheader>
        <div id="slide">
          <v-slider v-model="slider" :thumb-size="26" thumb-label="always">
            <template v-slot:thumb-label="{ value }">
              {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
            </template>
          </v-slider>
        </div>
      </v-col>
      <div>
        <div class="button">
          <v-btn @click="avaliar" depressed color="green"> Avaliar </v-btn>
        </div>
      </div>
      <div>
        <div id="avaliacao" v-show="showAvaliacao">
          <p>{{ avaliacao }}</p>
        </div>
        <div class="button" v-show="showOutraCompraButton">
          <v-btn depressed color="green">
            <router-link to="/loja">Realizar outra compra</router-link>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinalizarCompra",
  data() {
    return {
      showOutraCompraButton: false,
      showAvaliacao: false,
      avaliacao: "",
      satisfactionEmojis: [
        "😭",
        "😢",
        "☹️",
        "🙁",
        "😐",
        "🙂",
        "😊",
        "😁",
        "😄",
        "😍",
      ],
      slider: 51,
    };
  },
  methods: {
    avaliar() {
      this.avaliacao = "Obrigado por avaliar";
      this.showAvaliacao = true;
      this.showOutraCompraButton = true;
    },
  },
};
</script>

<style scoped>
#compra {
  background-color: #2f3676;
  width: 100%;
  height: 945px;
  overflow: hidden;
}

h2 {
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-align: center;
}

.pl-0 {
  color: white;
  font-size: 18px;
}

#slide {
  margin-top: 20px;
}

#imagem img {
  width: 100%;
}

#imagem {
  width: 100%;
  margin: auto;
}

.button {
  color: white;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.button a {
  color: white;
  text-decoration: none;

  padding: 10px 18px;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 0;
}

>>> .v-btn__content {
  padding: 10px;
}

#avaliacao {
  margin-top: 20px;
  width: 50%;
  height: 40px;
  margin: auto;
  border-radius: 5px;
  border: solid 1px rgb(194, 194, 194);
  background-color: rgba(202, 202, 202, 0.082);
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 25px;
  font-weight: bold;
}
</style>

