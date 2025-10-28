# n8n-nodes-country-state-city

Este é um pacote de node n8n que fornece funcionalidade para consultar informações sobre países, estados/províncias e cidades, utilizando a biblioteca [country-state-city](https://github.com/dr5hn/country-state-city).

## Instalação

Siga as instruções na [documentação do n8n](https://docs.n8n.io/integrations/community-nodes/installation/) para instalar nodes da comunidade.

```bash
npm install n8n-nodes-country-state-city
```

## Operações

### 🌍 Get Country by Code
Retorna os detalhes de um país com base no seu código ISO 2.
- **Input**: Country Code (ex: `US`, `BR`, `CA`)
- **Output**: Nome, código ISO, coordenadas, etc.

### 🏛️ Get States by Country  
Retorna uma lista de todos os estados/províncias de um determinado país.
- **Input**: Country Code (ex: `US`, `BR`, `CA`)
- **Output**: Array com todos os estados/províncias

### 🏢 Get State by Code
Retorna informações detalhadas de um estado específico.
- **Input**: Country Code + State Code (ex: `US` + `CA`, `BR` + `SP`)
- **Output**: Nome do estado, código ISO, coordenadas, etc.

### 🏙️ Get Cities by State
Retorna uma lista de todas as cidades de um determinado estado/província.
- **Input**: Country Code + State Code (ex: `US` + `CA`)
- **Output**: Array com todas as cidades

## Características

- ✅ **Sem API Keys**: Funciona completamente offline
- ✅ **Rápido e Confiável**: Base de dados local, sem dependência de internet
- ✅ **Dados Atualizados**: Usa a biblioteca country-state-city mantida ativamente
- ✅ **Fácil de Usar**: Interface intuitiva no n8n
- ✅ **Completo**: Suporte a todos os códigos ISO de países e estados

## Exemplos de Uso

### Obter informações do Brasil
- Operation: `Get Country by Code`
- Country Code: `BR`

### Listar estados do Brasil  
- Operation: `Get States by Country`
- Country Code: `BR`

### Obter informações de São Paulo
- Operation: `Get State by Code`
- Country Code: `BR`
- State Code: `SP`

### Listar cidades de São Paulo
- Operation: `Get Cities by State`
- Country Code: `BR`
- State Code: `SP`

## Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para o histórico completo de mudanças.

## Licença

MIT
