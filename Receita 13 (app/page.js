//Feito a correção de erros com a ajuda do: https://copilot.microsoft.com/

 
export function Home() {
  return (
    <nav>
      <ul>
        <li><a href="/rota1">Página Rota 1</a></li>
        <li><a href="/rota2">Página Rota 2</a></li>
        <li><a href="/rota3">Página Rota 3</a></li>
      </ul>
    </nav>
  );
}

export function Menu() {
  return (
    <div>
      <h2>Menu Principal</h2>
      <p>Selecione uma página no menu acima.</p>
    </div>
  );
}

export function Layout({ children }) {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      {children}
    </div>
  );
}

import { Home, Menu, Layout } from "../page";

export default function Rota1Page() {
  return (
    <>
      {Home()}
      <Menu />
      <Layout>
        <h1>Bem-vindo à Página Rota 1</h1>
        <p>Esta é uma página criada dentro do diretório "app/rota1".</p>
      </Layout>
    </>
  );
}

import { Home, Menu, Layout } from "../page";

export default function Rota2Page() {
  return (
    <>
      {Home()}
      <Menu />
      <Layout>
        <h1>Bem-vindo à Página Rota 2</h1>
        <p>Esta é uma página criada dentro do diretório "app/rota2".</p>
      </Layout>
    </>
  );
}

import { Home, Menu, Layout } from "../page";

export default function Rota3Page() {
  return (
    <>
      {Home()}
      <Menu />
      <Layout>
        <h1>Bem-vindo à Página Rota 3</h1>
        <p>Esta é uma página criada dentro do diretório "app/rota3".</p>
      </Layout>
    </>
  );
}
