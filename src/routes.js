import PagamentoForm from "./components/pagamento-form/PagamentoForm";
import FinalizarCompra from "./components/finalizar-compra/FinalizarCompra";
import FigurinhaForm from "./components/figurinha-form/FigurinhaForm";
import HomePage from './view/home-page/HomePage'


export const routes = [
  { path: "/formulario", component: PagamentoForm },
  { path: "/comprafinalizada", component: FinalizarCompra },
  { path: "/loja", component: FigurinhaForm },
  { path: "", component: HomePage },
];
