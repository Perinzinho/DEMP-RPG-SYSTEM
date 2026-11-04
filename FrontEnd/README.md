# DEMP RPG — frontend

React, TypeScript, Vite e Tailwind CSS. O backend .NET é publicado separadamente.

## Desenvolvimento

Use Node.js 22.12 ou superior (ou 20.19+), compatível com a versão do Vite do projeto.

```sh
cd FrontEnd
npm ci
```

Crie um `.env.local` com a URL do backend, incluindo o prefixo da API quando necessário:

```dotenv
VITE_API_URL=https://seu-backend.example.com/api
```

```sh
npm run dev
npm run build
npm run preview
```

No PowerShell, caso a política de execução bloqueie `npm.ps1`, use `npm.cmd` nos comandos acima.

## Publicação na Vercel e erro 404 ao atualizar

O React Router resolve as páginas no navegador. Ao atualizar uma URL interna, a Vercel precisa entregar `index.html` para que o roteador abra a tela correta. Os arquivos `vercel.json` incluem o fallback recomendado na [documentação oficial de Vite na Vercel](https://vercel.com/docs/frameworks/frontend/vite).

As duas opções de Root Directory são suportadas:

| Root Directory na Vercel | Configuração aplicada                                         | Saída do build  |
| ------------------------ | ------------------------------------------------------------- | --------------- |
| `FrontEnd` (recomendado) | `FrontEnd/vercel.json`                                        | `dist`          |
| Raiz do repositório      | `vercel.json` da raiz, com comandos apontando para `FrontEnd` | `FrontEnd/dist` |

Configure `VITE_API_URL` nas variáveis de ambiente da Vercel para cada ambiente utilizado e publique a branch com as alterações. A correção não altera um deployment já publicado; ela depende de um novo build e deployment. O backend continua sendo acessado pela URL definida em `VITE_API_URL`.

Após publicar, abra diretamente `/login` e `/register` e atualize com F5. Com uma conta autenticada, faça o mesmo em `/user/home`, `/master/room/<id>`, `/room/<id>` e `/character/<id>` usando IDs existentes. Confirme também que os arquivos em `/assets/` carregam normalmente. O preview local verifica as telas, mas o teste definitivo das regras da Vercel acontece no deployment.

## Direção visual

A interface preserva o azul `#1a6fb5`, o verde-petróleo `#365d6f` e a fonte Anaktoria nos títulos. Fundos em azul escuro e detalhes em dourado dessaturado complementam a identidade de arquivo de investigação. Campos e textos de apoio usam a fonte do sistema para facilitar a leitura. A ilustração e o símbolo originais continuam em uso.

Login e cadastro compartilham `AuthLayout`. O tema e os componentes visuais estão em `src/index.css`; os painéis de ficha usam `surface-panel` e `panel-heading`. As páginas internas são carregadas sob demanda para reduzir o JavaScript inicial. Estados de carregamento, erro e lista vazia têm apresentações próprias, com foco de teclado visível e suporte à preferência de movimento reduzido.
