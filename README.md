### 1. Criação de um formulário de identificação:

- Dentro do componente `Login`, renderizado na rota `/`, cria-se um formulário para que o usuário insira seu nome.
- Um botão "Entrar" é habilitado apenas se o nome inserido tiver 3 ou mais caracteres.
- Ao clicar em "Entrar", a função `createUser` é utilizada para salvar o nome digitado.
- Durante o processo de salvamento, uma mensagem "Carregando..." é exibida.
- Após o salvamento, redireciona-se para a rota `/search`.

### 2. Criação do formulário para pesquisar artistas:

- No componente `Search`, renderizado na rota `/search`, cria-se um formulário para pesquisar artistas.
- Um botão "Pesquisar" é habilitado apenas se o nome do artista tiver 2 ou mais caracteres.
- Ao clicar em "Pesquisar", faz-se uma requisição para buscar álbuns do artista pesquisado.
- Durante a busca, uma mensagem "Carregando..." é exibida.
- Após receber a resposta da requisição, exibe-se os álbuns na tela.

### 3. Criação da lista de músicas do álbum selecionado:

- No componente `Album`, renderizado na rota `/album/:id`, exibe-se a lista de músicas do álbum selecionado.
- Uma requisição é feita para obter as músicas do álbum.
- Durante a requisição, exibe-se a mensagem "Carregando...".
- Exibe-se o nome do artista e do álbum na tela.
- Lista-se todas as músicas do álbum com um player para tocar o preview da música.

### 4. Criação do componente de cabeçalho:

- Cria-se o componente `Header` com links de navegação.
- Utiliza-se a função `getUser` para recuperar o nome da pessoa logada e exibi-lo.
- Durante o processo de recuperação do nome, exibe-se a mensagem "Carregando...".
- Um componente `Layout` é criado para renderizar o `Header` em todas as páginas, exceto na página de `Login`.

### 5. Implementação do mecanismo para adicionar músicas à lista de favoritos:

- Adiciona-se um checkbox em cada `MusicCard` para marcar músicas favoritas.
- Ao marcar/desmarcar, faz-se uma requisição para adicionar/remover a música da lista de favoritos.
- A imagem do coração muda dependendo se a música está favoritada ou não.


