API - Clientes
===
Funções: Cadastrar, listar e deletar clientes no banco de dados MongoDB 



## Tecnologias
- NodeJs
- Fastify
- TypeScript
- Prisma ORM
- MongoDB



## Endpoints


- Método: POST
- Endpoint: /customer
  ```
  Parametro obrigatório:

  {
	"name": "string",
	"email": "string"
  }
  ```
  ---
- Método: GET
- Endpoint: /customers
  ```
  Lista todos os clientes cadastrados
  ```
  ---
- Método: DELETE
- Endpoint: /customer
  ```
  Recebe por params o ID.

  Exemplo: 
  http://localhost:3333/customer?id=6545284959f13d07f1424ca3
  ```
