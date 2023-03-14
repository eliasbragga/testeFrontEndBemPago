<template>
  <div id="conteudoGeral">
    <div id="formularioComp">
      <div id="formulario">
        <router-view></router-view>
        <div id="divH1">
          <div id="buttonBack">
            <v-btn depressed color="green">
              <router-link to="/">Retornar</router-link>
            </v-btn>
          </div>
          <h1>Endereço de cobrança</h1>
        </div>
        <div class="form">
          <div class="modeloForm">
            <div class="nome">
              <label for="">Nome</label>
              <v-col cols="12" sm="6" md="9">
                <v-text-field
                  v-model="nome"
                  :rules="[rules.required, rules.counter]"
                  maxlength="20"
                  label="Nome"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </div>
            <div class="nome">
              <label for="">Sobrenome</label>
              <v-col cols="12" sm="6" md="9">
                <v-text-field
                  v-model="sobrenome"
                  :rules="[rules.required, rules.counter]"
                  maxlength="20"
                  label="Sobrenome"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </div>
          </div>
          <div class="modeloForm">
            <div class="campo">
              <label for="">E-mail</label>
              <v-col cols="15" sm="6" md="11">
                <v-text-field
                  :rules="[rules.required, rules.email]"
                  v-model="email"
                  label="Exemplo"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </div>
          </div>
          <div class="modeloForm">
            <div class="campo">
              <label for="">Telefone</label>
              <v-col cols="15" sm="6" md="11">
                <v-text-field
                  :rules="[rules.required, rules.counter]"
                  v-model="telefone"
                  label="Digite seu número"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </div>
          </div>
          <div class="campo" id="endereço">
            <label for=""
              >Telefone 2
              <h5>{{ opcional }}</h5></label
            >
            <v-col cols="15" sm="6" md="11">
              <v-text-field
                v-model="TelefoneOpcional"
                label="Telefone"
                outlined
                dense
                maxlength="20"
              ></v-text-field>
            </v-col>
          </div>
          <div class="campo" id="endereço">
            <label for="">Endereço </label>
            <v-col cols="15" sm="6" md="11">
              <v-text-field
                :rules="[rules.required, rules.counter]"
                v-model="endereco"
                label="Endereço"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </div>
          <div id="estadoPais">
            <div class="campo" id="pais">
              <label for="">Selecione seu País</label>
              <v-col cols="7">
                <v-select
                  :items="pais"
                  menu-props="auto"
                  label="Select"
                  hide-details
                  prepend-icon="mdi-map"
                  single-line
                ></v-select>
              </v-col>
            </div>

            <div class="campo" id="estado">
              <label for="">Selecione seu estado</label>
              <v-col cols="7">
                <v-select
                  :items="estados"
                  menu-props="auto"
                  item-text="nome"
                  label="Select"
                  hide-details
                  prepend-icon="mdi-map"
                  single-line
                ></v-select>
              </v-col>
            </div>
          </div>

          <div id="pagamento">
            <hr />
            <div>
              <h2>Forma de pagamento</h2>
            </div>        

            <div id="radio">
              <v-radio-group v-model="pagamentoRadio" @change="radioClick">
                <v-radio
                  v-for="(pagamento, i) in formasDePagamento"
                  :key="i"
                  :label="pagamento"
                  :value="pagamento"
                  color="green"
                >
                  {{ pagamento }}
                </v-radio>
              </v-radio-group>
              <div id="formaPagamento">
                <div id="qrCode" v-show="hidePagamentos.qrCode">
                  <div id="buttonPix">
                    <v-btn @click="mostrarQRCode" rounded color="green" dark>
                      Gerar QRCODE
                    </v-btn>
                  </div>
                  <div>
                    <p>{{ processando }}</p>
                  </div>
                  <div v-show="hidePagamentos.linkCode">
                    <p>Acesse o QRCode para prosseguir com o pagamento</p>
                    <img
                      src="../../../public/img/12b21cf1-307a-4c33-98ed-094bc483706a.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="cartao" v-show="hidePagamentos.cartao">
                  <div>
                    <img
                      src="../../../public/img/pagamentos-cartao-credito.png"
                      alt=""
                    />
                  </div>
                  <div class="formCartao">
                    <div class="formTitular">
                      <div class="titularCartao">
                        <label for="">Nome do titular</label>
                        <v-col cols="12" sm="6" md="11">
                          <v-text-field
                            hint="Nome completo, como mostrado no cartão."
                            persistent-hint
                            v-model="nomeCartao"
                            :rules="[rules.required, rules.counter]"
                            maxlength="20"
                            label="Titular do cartão"
                            outlined
                            dense
                          ></v-text-field>
                        </v-col>
                      </div>
                      <div id="numeroCartao">
                        <label for="">Número do cartão</label>

                        <v-col cols="12" sm="6" md="11">
                          <v-text-field
                            v-model="numeroCartao"
                            :rules="[rules.required, rules.counter]"
                            maxlength="20"
                            label="Número"
                            outlined
                            dense
                          ></v-text-field>
                        </v-col>
                      </div>
                    </div>

                    <div class="formTitular">
                      <div id="dataExpiracao">
                        <label for="">Data de expiração</label>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="dataExpiracao"
                            :rules="[rules.required, rules.counter]"
                            maxlength="20"
                            label="Data de expiração"
                            outlined
                            dense
                          ></v-text-field>
                        </v-col>
                      </div>
                      <div id="cvvCartao">
                        <label for="">CVV</label>

                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="cvv"
                            :rules="[rules.required, rules.counter]"
                            maxlength="20"
                            label="CVV"
                            outlined
                            dense
                          ></v-text-field>
                        </v-col>
                      </div>
                    </div>
                    <div class="cpfTitular">
                      <div id="cpfTitular">
                        <label for="">CPF do titular</label>
                        <v-col cols="12" sm="6" md="12">
                          <v-text-field
                            v-model="cpf"
                            :rules="[rules.required, rules.counter]"
                            maxlength="20"
                            label="CPF do titular"
                            outlined
                            dense
                          ></v-text-field>
                        </v-col>
                      </div>
                      <div id="parcelas" v-show="hidePagamentos.hiddenParcelas">
                        <label for="">Parcelas</label>
                        <v-col class="d-flex" cols="12" sm="6">
                          <v-select
                            :items="itemsParcelas"
                            label="Parcelas"
                            dense
                          ></v-select>
                        </v-col>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cartao" v-show="hidePagamentos.debito"></div>
              </div>
            </div>
          </div>
          <div id="button" v-show="hidePagamentos.button">
            <v-btn
              :disabled="disabledButton"
              v-show="hidePagamentos.formulario"
              @click="finalizarCompra"
              x-large
              color="success"
              dark
            >
              <router-link :to="finalizar">{{ nomeButton }}</router-link>
            </v-btn>
            <div id="messageErro">
              <p>{{ messageErro }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Estados from "../../services/estados";

export default {
  name: "PagamentoForm",
  data() {
    return {
      isActive:false,
      TelefoneOpcional: "",
      nomeButton: "VERIFICAR",
      disabledButton: false,
      itemsParcelas: ["1x", "2x", "3x", "4x", "5x", "6x"],
      finalizar: "",
      messageErro: "",
      processando: "",
      dataExpiracao: "",
      cvv: "",
      cpf: "",
      nomeCartao: "",
      numeroCartao: "",
      hidePagamentos: {
        linkCode: false,
        qrCode: false,
        cartao: false,
        button: false,
        formulario: true,
        hiddenParcelas: true,
      },
      imageQRCode: "./",
      res: "Ola",
      pagamentoRadio: "",
      formasDePagamento: ["Cartão de crédito", "Cartão de débito", "Pix"],
      telefone: "",
      pais: ["Brasil"],
      endereco: "",
      estados: [],
      opcional: "(Opcional)",
      sobrenome: "",
      email: "",
      nome: "",
      rules: {
        required: (value) => !!value || "*Campo obrigatóroio.",
        counter: (value) => value.length <= 30 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    radioClick() {
      if (this.pagamentoRadio == "Pix") {
        this.hidePagamentos.qrCode = true;
        this.hidePagamentos.cartao = false;
        this.hidePagamentos.button = false;
        this.hidePagamentos.hiddenParcelas = false;
      } else if (this.pagamentoRadio == "Cartão de débito") {
        this.hidePagamentos.hiddenParcelas = false;
        this.hidePagamentos.qrCode = false;
        this.hidePagamentos.cartao = true;
        this.hidePagamentos.button = true;
        this.nomeCartao = "";
        this.numeroCartao = "";
        this.cpf = "";
        this.cvv = "";
        this.dataExpiracao = "";
      } else {
        this.hidePagamentos.hiddenParcelas = true;
        this.hidePagamentos.qrCode = false;
        this.hidePagamentos.cartao = true;
        this.hidePagamentos.button = true;
        this.nomeCartao = "";
        this.numeroCartao = "";
        this.cpf = "";
        this.cvv = "";
        this.dataExpiracao = "";
      }
    },
    mostrarQRCode() {
      this.processando = "Processando link. Aguarde";
      setTimeout(
        () => ((this.hidePagamentos.linkCode = true), (this.processando = "")),
        3000
      );
    },
    finalizarCompra() {
      if (
        this.nome &&
        this.sobrenome &&
        this.email &&
        this.telefone &&
        this.endereco &&
        this.nomeCartao &&
        this.numeroCartao &&
        this.cvv &&
        this.dataExpiracao &&
        this.cpf
      ) {
        this.messageErro = "Avaliando dados. Aguarde";
        this.finalizar = "/comprafinalizada";
        this.disabledButton = true;
        this.nomeButton = "VERIFICANDO";

        setTimeout(
          () => (
            (this.messageErro = ""),
            (this.disabledButton = false),
            (this.nomeButton = "FINALIZAR COMPRA")
          ),
          3000
        );
      } else {
        this.messageErro = "Preencha os campos obrigatórios";
      }
    },
  },
  mounted() {
    Estados.listarEstados()
      .then((resposta) => {
        this.estados = resposta.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
#conteudoGeral {
  display: flex;
}

#formulario {
  background-color: rgb(229, 229, 229);
  width: 100%;
  height: 1500px;
  color: black;
  padding: 10px;
  border-radius: 5px;
}

#valor {
  background-color: bisque;
  height: 300px;
}

#buttonBack a {
  text-decoration: none;
  color: white;
  padding: 10px 10px;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0px 0px;
}

#buttonBack {
  margin-left: 30px;
  margin-bottom: 20px;
}

.v-application .green {
  background-color: #080808 !important;
  border-color: #6d6d6d !important;
}

h1 {
  font-size: 23px;
  margin-left: 30px;
}

#divH1 {
  margin-top: 20px;
}

.form {
  font-family: Arial, Helvetica, sans-serif;
  height: 900px;
}

.modeloForm {
  width: 95%;
  margin: auto;
  display: flex;
}

#pagamento {
  padding: 20px;
  height: 620px;
}

.nome {
  width: 50%;
}

label {
  margin-left: 17px;
  display: flex;
}

h5 {
  margin-top: 4px;
  margin-left: 5px;
  color: rgba(120, 120, 120, 0.904);
}

.campo {
  width: 96%;
}

#endereço {
  width: 92%;
  margin-left: 20px;
}

#estado {
  margin-left: 20px;
}

#estadoPais {
  width: 90%;
  display: flex;
  margin: auto;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
}

#qrCode {
  width: 100%;
}

#qrCode img {
  width: 200px;
  height: 200px;
  margin: auto;
}

.v-btn__content {
  padding: 10px;
}

.cartao img {
  width: 200px;
}

.formTitular {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.cpfTitular {
  width: 40%;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

#formularioComp {
  width: 100%;
  height: 1200px;
}

#button {
  color: black;
  width: 45%;
  margin-left: 27%;
  text-align: center;
}

#button a {
  text-decoration: none;
  color: white;
  padding: 15px 40px;
}

.v-btn:not(.v-btn--round).v-size--x-large {
  padding: 0 0;
}

#parcelas {
  margin-left: 30px;
}

#messageErro {
  width: 200px;
  margin: auto;
}

#messageErro p {
  font-size: 13px;
}
</style>
