# :beers: PUB Programmer API

O Resilia-PUB é uma API Rest de gerenciamento de PUBS construída em colaboração com [@Matheus Camba](https://github.com/MatheusCamba), [@Hugo Parada](https://github.com/haparada9), [@Milena Souza](https://github.com/Milena2712) e [@Gicelle Sena](https://github.com/Gicelle-sena). Cada colaborador ficou responsável por criar uma instância do banco de dados da API e posteriormente iremos usar os conhecimentos obtidos para juntarmos todas as instâncias e criar os seus relacionamentos. Com essa aplicação você será capaz de salvar, atualizar, pesquisar e deletar registros de funcionários do PUB. 

# :hammer: Ferramentas utilizadas

<div style="display: inline_block" align="center">
   <img align="center" width='50px' height='50px' src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original.svg'> 
</div>
<br/>

# :books: Como utilizar a aplicação

### **1 - Faça o clone do repositório**

Para fazer o clone desse repositório basta copiar o código abaixo e colar em seu terminal.
```
git clone https://github.com/ArcenioSouza/Resilia-PUB.git
```

### **2 - Instale as dependencias necessárias**

Para instalar as dependencias entre na pasta Resilia-PUB usando o comando:
```
cd Resilia-PUB
```
Após o terminal entrar na pasta execute o comando abaixo para instalar todas as dependencias necessárias para execução da aplicação.
```
npm install
```

### **3 - Criação do Banco de dados**

O banco de dados usado na aplicação é o MongoDB, para utilização dele é necessário criar uma conta no MongoDB Atlas.
Depois da conta criada vc irá criar um banco de dados e uma coleção e atribuir os valores de conexão as variáveis de ambiente.

Para isso vc irá criar um arquivo `.env` na raiz do seu projeto e usar como exemplo o arquivo `.env.example` para atribuir os valores do seu banco de dados as variáveis de ambiente.

Caso a conexão retorne algum problema basta verificar inconsistencias na URL responsável por fazer a conexão com o banco de dados que se encontra em `src/config/dbConnect.js`.

### **4 - Execute a aplicação**

Para executar a aplicação basta executar o comando abaixo em seu terminal.
```
npm start
```
**Observação:** Essa aplicação será executada por padrão na porta 3000 do seu localHost, caso essa porta esteja sendo utilizada por outra aplicação basta mudar o valor da variável 'port' do arquivo 'app.js' para um valor de porta disponível em seu sistema.
<br/>

# :airplane: Rotas da API

Essa aplicação possui um conjunto de rotas que torna possível o uso de todos os verbos HTTP necessários para a realização do CRUD.
Você pode utilizar essa api localmente seguindo as orientações acima e testando as rotas da API em seu localhost ou pode utilizá-la remotamente através dessa url que está hospedada no servidor do Heroku `https://resilia-pub.herokuapp.com`.

<details>
<summary>
<b>GET Employees</b>
</summary>
<br/>
<b>Endpoint:</b> `GET https://resilia-pub.herokuapp.com/employees`
<br/><br/>
<b>Response:</b>
<br/>

```
[
    {
        "id": 1,
        "name": "Arcenio Souza",
        "job": "Gerente",
        "wage": 50000,
        "cpf": 67346720008
    },
    {
        "id": 2,
        "name": "José Oliveira",
        "job": "Copeiro",
        "wage": 2500.7,
        "cpf": 93009185081
    },
    {
        "id": 3,
        "name": "Marcos André",
        "job": "Garçon",
        "wage": 1800,
        "cpf": 55855978095
    },
    {
        "id": 4,
        "name": "Francisco Junior",
        "job": "Auxiliar de Cozinha",
        "wage": 1800,
        "cpf": 22789188009
    },
    {
        "id": 5,
        "name": "Weber Caetano",
        "job": "Barman",
        "wage": 2100.55,
        "cpf": 37842561044
    }
]
```

</details>

<details>
<summary>
<b>GET Employee</b>
</summary>
<br/>
<b>Endpoint:</b> `GET https://resilia-pub.herokuapp.com/employee/:id`
<br/><br/>
<b>Response:</b>
<br/>

```
{
    "id": 1,
    "name": "Arcenio Souza",
    "job": "Gerente",
    "wage": 50000,
    "cpf": 67346720008
}
```

</details>

<details>
<summary>
<b>POST Employee</b>
</summary>
<br/>
<b>Endpoint:</b> `POST https://resilia-pub.herokuapp.com/employee`
<br/><br/>
<b>Body:</b>
<br/>

```
{
    "name": "Arcenio Souza",
    "job": "Gerente",
    "wage": 50000,
    "cpf": 67346720008
}
```
<br/>
<b>Response:</b>
<br/>

```
{
    "message": "Data employees Arcenio Souza, job Gerente, successfully inserted`
}
```
<br/>
<b>Validações:</b>
<br/>

| Parametros Body | Tipo     | Regras de validação                                                            |
| :-------------- | :------- | :------------------------------------------------------------------------------|
| `name`          | `string` | Iniciais em maiúscula; Sem espaços duplos; Sem espaço no inicio e final do nome|
| `job`        | `string` | "Gerente", "Garçon", "Copeiro", "Barman", "Cozinheiro", "Auxiliar de Cozinha"  |
| `wage`          | `number` | Apenas números e casas decimais separadas por ponto - Ex: 5878.47              | 
| `cpf`           | `number` | Apenas números e aceita apenas cpfs válidos segundo as regras da RF            |   

**Regras para nome(name)**
- Deve ter as iniciais em letras maiúsculas e restante em letras minúsculas;
- Não pode haver espaços duplos entre as nomes;
- Não pode haver espaço no inicio ou final do nome;

**Regras para cargo(job)**
- Os cargos permitidos na empresa são: "Gerente", "Garçon", "Copeiro", "Barman", "Cozinheiro" e "Auxiliar de Cozinha". Qualquer cargo diferente desses não serão permitidos;

**Regras para salario(wage)**
- Os valores não devem conter letras ou cifrões;
- Se o valor possuir casas decimais a separação ao digitar deve ser feita com ".";

**Regras para CPF**
- O numero deve ser válido segundo as regras de validação de CPF da Receita Federal que podem ser consultadas através desse link [Como é feita a validação do um CPF](https://www.calculadorafacil.com.br/computacao/validar-cpf)

</details>

<details>
<summary>
<b>PUT Employee</b>
</summary>
<br/>
<b>Endpoint:</b> `PUT https://resilia-pub.herokuapp.com/employee/:id`
<br/><br/>
<b>Body:</b>
<br/>

```
{
    "name": "Arcenio Souza",
    "job": "Gerente",
    "wage": 50000,
    "cpf": 67346720008
}
```
<br/>
<b>Response:</b>
<br/>

```
{
    "message": "Registration successfully updated"
}
```
<br/>
<b>Validações:</b>
<br/>

| Parametros Body | Tipo     | Regras de validação                                                            |
| :-------------- | :------- | :------------------------------------------------------------------------------|
| `name`          | `string` | Iniciais em maiúscula; Sem espaços duplos; Sem espaço no inicio e final do nome|
| `job`        | `string` | "Gerente", "Garçon", "Copeiro", "Barman", "Cozinheiro", "Auxiliar de Cozinha"  |
| `wage`          | `number` | Apenas números e casas decimais separadas por ponto - Ex: 5878.47              | 
| `cpf`           | `number` | Apenas números e aceita apenas cpfs válidos segundo as regras da RF            |   

**Regras para nome(name)**
- Deve ter as iniciais em letras maiúsculas e restante em letras minúsculas;
- Não pode haver espaços duplos entre as nomes;
- Não pode haver espaço no inicio ou final do nome;

**Regras para cargo(job)**
- Os cargos permitidos na empresa são: "Gerente", "Garçon", "Copeiro", "Barman", "Cozinheiro" e "Auxiliar de Cozinha". Qualquer cargo diferente desses não serão permitidos;

**Regras para salario(wage)**
- Os valores não devem conter letras ou cifrões;
- Se o valor possuir casas decimais a separação ao digitar deve ser feita com ".";

**Regras para CPF**
- O numero deve ser válido segundo as regras de validação de CPF da Receita Federal que podem ser consultadas através desse link [Como é feita a validação do um CPF](https://www.calculadorafacil.com.br/computacao/validar-cpf)

</details>

<details>
<summary>
<b>DELETE Employee</b>
</summary>
<br/>
<b>Endpoint:</b> `DELETE https://resilia-pub.herokuapp.com/employee/:id`
<br/><br/>
<b>Response:</b>
<br/>

```
{
    "message": "Successfully deleted record"
}
```    
</details>

# :sparkles: Créditos

Ao professor [@LéoCosta](https://github.com/LeoCosta-dev) pelos ensinamentos e pelo apoio constante em aula e fora de aula para a realização desse projeto.

Ao meu grupo pelo empenho diário na realização desse projeto. E a [Resilia Educação](https://www.resilia.com.br/) que tem proporcionado tarefas que agregam conhecimentos valiosos a minha formação.
