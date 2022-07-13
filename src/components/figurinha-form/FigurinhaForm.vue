<template>
  <div id="conteudo">
    <router-view></router-view>
    <div id="divFormComp">
      <div id="container"></div>
    </div>
    <div id="figura" v-show="hiddenFormFigure">
      <div id="header">
        <div id="textoP">
          <p>
            Formulário <br />
            para compra de <br />
            <strong>Pacotes de adesivos</strong>
          </p>
        </div>
        <div id="image">
          <img src="../../../public/img/caixa.png" alt="" />
        </div>
      </div>
      <div id="main">
        <p>Selecione os adesivos:</p>
        <div id="checkBox">
          <div>
            <v-checkbox
              v-model="selected"
              label="adesivo1"
              value="adesivo1"
            ></v-checkbox>
            <v-checkbox
              v-model="selected"
              label="adesivo2"
              value="adesivo2"
            ></v-checkbox>
          </div>
          <div>
            <v-checkbox
              v-model="selected"
              label="adesivo3"
              value="adesivo3"
            ></v-checkbox>
            <v-checkbox
              v-model="selected"
              label="adesivo4"
              value="adesivo4"
            ></v-checkbox>
          </div>
        </div>
        <div id="quantidadeAdesivos">
          <p>Quantos adesivos de cada?:</p>
          <div id="slide">
            <v-slider
              v-model="ex3.val"
              :label="ex3.label"
              :thumb-color="ex3.color"
              thumb-label="always"
            ></v-slider>
          </div>
        </div>
        <div>
          <p>observações:</p>
          <div id="textArea">
            <v-col cols="12" md="11">
              <v-textarea
                solo
                name="input-7-4"
                label="Alguma dúvida? Recado?"
                dark
              ></v-textarea>
            </v-col>
          </div>
        </div>
      </div>
      <div>
        <div id="footer">
          <div id="buttonEnviar">
            <v-btn
              @click="confirmPedido"
              depressed
              color="green"
              v-show="hideButton"
            >
              <router-link :to="linkButton">{{ nameButton }}</router-link>
            </v-btn>
            <div id="imageDiv" v-show="showBox">
              <img id="imagemBox" src="../../../public/img/caixa.png" alt="" />
            </div>
          </div>
          <div id="itensCompra" style="color: black" v-show="showItensCompra">
            <label for=""><strong>Itens:</strong></label>
            <div id="listaItens">
              <ul>
                <li v-for="(item, i) in selected" :key="i">{{ item }}</li>
              </ul>
            </div>
            <p><strong>Quant.</strong> {{ ex3.val }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FigurinhaForm",
  data() {
    return {
      showItensCompra: false,
      linkButton: "",
      nameButton: "Confirmar pedido",
      hideButton: true,
      showBox: false,
      hiddenFormFigure: true,
      selected: [],
      ex3: { label: "Quantidade", val: 10, color: "green" },
    };
  },
  methods: {
    confirmPedido() {
      this.hideButton = false;
      this.showBox = true;

      setTimeout(() => {
        this.showBox = false;
        this.hideButton = true;
        this.nameButton = "Enviar";
        this.showItensCompra = true;
        this.linkButton = "/formulario";
      }, 2500);
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#conteudo {
  color: white;
  width: 100%;
}

#divFormComp {
  color: white;
  width: 100%;
}

#container {
  background-color: rgb(229, 229, 229);
  width: 100%;
  max-width: 700px;

  height: 90%;
  margin: 10px auto;
}

#itensCompra {
  border: 1px solid black;
  position: absolute;
  left: 0;
  top: 0px;
  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
  display: flex;
  height: 100%;
}

#listaItens {
  width: 100%;
  display: flex;
}

#figura {
  color: black;
}

#header {
  color: rgba(255, 255, 255, 0.829);
  height: 200px;
  background-color: #2f3676;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3em;
  display: flex;
  align-items: center;
}

#textoP {
  width: 50%;
  margin: 20px 30px;
}

#image img {
  width: 150px;
}

#main {
  margin-top: 50px;
  color: black;
  padding-left: 20px;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
}

#checkBox {
  display: flex;
  width: 40%;
  justify-content: space-around;
}

#quantidadeAdesivos {
  margin-top: 40px;
}

#slide {
  margin-top: 40px;
  margin-right: 20px;
}

#textArea {
  font-weight: 100;
}

#footer {
  width: 100%;
  height: 100px;
  background-color: #3d437c21;
  position: relative;
}

#buttonEnviar {
  position: absolute;
  bottom: 35px;
  right: 30px;
  text-decoration: none;
  color: white;
}

#buttonEnviar a {
  text-decoration: none;
  color: white;
  padding: 10px 20px;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 0;
}

#imageDiv {
  margin-top: 10px;
  position: absolute;
  right: 10px;
  bottom: -15px;
}

#imagemBox {
  width: 60px;
  animation: box 500ms linear infinite;
}

@keyframes box {
  0% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
</style>  

