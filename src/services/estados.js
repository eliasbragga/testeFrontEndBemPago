import { http } from "./config";

export default {
  listarEstados: (ordenarPeloNome = true) => {
    console.log(typeof ordenarPeloNome);
    if (ordenarPeloNome) {
      return http.get("/localidades/estados?orderBy=nome");
    } else {
      return http.get("/localidades/estados");
    }
  },
};
