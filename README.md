# teste_alphacode

## Instruções para uso

1. Recomendo utilizar um servidor local, como o XAMPP (que foi usado nesse projeto) para executar o php no apache.

2. Executar o script SQL fornecido no diretório `database` no seu sistema de banco de dados para criar a tabela necessária e o primeiro registro.

3. Para se conectar com o banco, é possível que seja necessário mudar os valores das variávies do arquivo `connection.php` dentro da função `construct`, referentes às credenciais e informações do banco de dados criado localmente.

4. Para visualizar o projeto, será necessário usar a extensão Live Server dentro do VS Code. Ative o Live Server no arquivo `index.html` localizado dentro da pasta `view`

5. Para conexão entre o front-end e o back-end, é necessário mudar a url enviada no fetch das requisições dentro do arquivo `contact.js` localizado na pasta `js`, adequando o caminho que leva ao arquivo index do php (a pasta `api` do app), o qual possui as rotas da api.
