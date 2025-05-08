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

export function Layout({ children }) {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      {/* O menu agora faz parte do Layout */}
      <nav>
        <ul>
          <li><a href="/rota1">Página Rota 1</a></li>
          <li><a href="/rota2">Página Rota 2</a></li>
          <li><a href="/rota3">Página Rota 3</a></li>
        </ul>
      </nav>
      {children}
    </div>
  );
} 

import { Layout } from "../page";

export default function Rota1Page() {
  return (
    <Layout>
      <h1>Bem-vindo à Página Rota 1</h1>
      <p>Esta é uma página criada dentro do diretório "app/rota1".</p>
    </Layout>
  );
}

import { Layout } from "../page";

export default function Rota2Page() {
  return (
    <Layout>
      <h1>Bem-vindo à Página Rota 2</h1>
      <p>Esta é uma página criada dentro do diretório "app/rota2".</p>
    </Layout>
  );
}

import { Layout } from "../page";

export default function Rota3Page() {
  return (
    <Layout>
      <h1>Bem-vindo à Página Rota 3</h1>
      <p>Esta é uma página criada dentro do diretório "app/rota3".</p>
    </Layout>
  );
}
