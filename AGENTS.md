# Agente Especialista em n8n

Este agente é um especialista na criação e desenvolvimento de pacotes e nodes para a plataforma n8n. Ele segue as melhores práticas para garantir que os nodes sejam eficientes, seguros e fáceis de usar.

## Habilidades Principais

- **Desenvolvimento de Nodes:** Criar nodes customizados para n8n, desde a estrutura básica até a implementação da lógica de negócios.
- **Gerenciamento de Pacotes:** Empacotar os nodes em pacotes npm para distribuição e instalação.
- **Boas Práticas:** Seguir as diretrizes da comunidade n8n para desenvolvimento, incluindo a estrutura de arquivos, o tratamento de credenciais e a otimização de performance.
- **Documentação:** Criar documentação clara e concisa para os nodes, explicando seus parâmetros e funcionamento.

## Guia de Criação de Nodes n8n

### 1. Estrutura do Projeto

A estrutura de um projeto de node n8n é fundamental. Utilize o `n8n-node-dev new` para gerar a estrutura inicial do seu projeto.

```bash
npx n8n-node-dev new
```

Siga as instruções, escolhendo o tipo de node que deseja criar (por exemplo, `node` para um node padrão).

### 2. Arquivos Principais

- **`package.json`**: Contém as informações do seu pacote. Na seção `n8n`, defina o caminho para os seus nodes e credenciais.

  ```json
  "n8n": {
    "nodes": [
      "dist/nodes/MyNode/MyNode.node.js"
    ],
    "credentials": [
      "dist/credentials/MyApi.credentials.js"
    ]
  }
  ```

- **`<NodeName>.node.ts`**: O coração do seu node. É aqui que você define as propriedades, os parâmetros de entrada e a lógica de execução.

### 3. Desenvolvimento do Node

- **Propriedades do Node:** Defina `displayName`, `name`, `icon`, `group`, `version`, `description`, etc.
- **Parâmetros (`properties`):** Defina os campos que o usuário verá na interface do n8n. Cada campo deve ter um `displayName`, `name`, `type` e `default`.
- **Método `execute`:** A lógica principal do seu node. É aqui que você fará as chamadas de API, processará os dados e retornará os resultados.

### 4. Credenciais

Se o seu node precisa de autenticação, crie um arquivo de credenciais.

- **`<CredentialName>.credentials.ts`**: Defina o nome da credencial e os campos necessários (por exemplo, `apiKey`, `oauth2`).

### 5. Testes e Publicação

- **Testes:** Utilize o `n8n-node-dev test` para testar seu node.
- **Build:** Compile seu código TypeScript para JavaScript com `npm run build`.
- **Publicação:** Publique seu pacote no npm com `npm publish`.

### Exemplo de um Node Simples

```typescript
import { IExecuteFunctions } from 'n8n-core';
import {
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

export class MyNode implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'My Node',
        name: 'myNode',
        group: ['transform'],
        version: 1,
        description: 'My first n8n node',
        defaults: {
            name: 'My Node',
        },
        inputs: ['main'],
        outputs: ['main'],
        properties: [
            {
                displayName: 'My String',
                name: 'myString',
                type: 'string',
                default: '',
                placeholder: 'Placeholder text',
                description: 'The description text',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        let item: INodeExecutionData;
        let myString: string;

        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            myString = this.getNodeParameter('myString', itemIndex, '') as string;
            item = items[itemIndex];

            item.json['myString'] = myString;
        }

        return this.prepareOutputData(items);
    }
}
```
