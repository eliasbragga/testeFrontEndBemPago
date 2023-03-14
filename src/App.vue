<template>
  <div>
    <v-app>
      <div>
        <v-navigation-drawer v-model="drawer" app dark color="#000">
          <v-list-item class="px-2">
            <v-list-item-avatar> </v-list-item-avatar>
          </v-list-item>
          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content @click="drawer = !drawer">
                <router-link :to="item.to">{{ item.title }}</router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>

      <v-app-bar app>
        <div>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
        <div class="barAndH1">
          <h1>Figurinhas</h1>
        </div>

        <v-toolbar-title> </v-toolbar-title>
      </v-app-bar>      
      <div id="formFigure">
        
        <div id="containerFormFigure">
          <router-view></router-view>
        </div>
      </div>
    </v-app>
    
  </div>
</template>

<script>
export default {
  name: "app", 
  data() {
    return {
      items: [
        { title: "Página Inicial", icon: "mdi-view-dashboard", to: "/" },
        { title: "Loja", icon: "mdi-view-dashboard", to: "/loja" },
      ],
      right: null,
      drawer: false,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

>>> .v-toolbar__content,
.v-toolbar__extension {
  background-color: #2f3676;
}

.v-application a {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  padding: 8px;
  text-decoration: none;
}

.barAndH1 {
  color: white;
}

#button a {
  text-decoration: none;
  color: white;
}

#button {
  position: absolute;
  right: 60px;
  bottom: 47px;
}

#app {
  color: white;
  width: 100%;
  height: 100vh;
}

#container {
  width: 50%;
  max-width: 700px;

  height: 90%;
  margin: 100px auto;
}

#formFigure {
  color: white;
  width: 100%;
  height: 1050px;
  display: flex;
  position: relative;
}

#containerFormFigure {
  background-color: rgb(229, 229, 229);
  width: 50%;
  max-width: 700px;

  height: 90%;
  margin: 100px auto;

  position: relative;
}

#valor {
  background-color: black;
  color: white;
  height: 400px;
  width: 250px;
  position: absolute;
  right: 150px;
  top: 50px;
}
</style>

