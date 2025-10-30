# n8n-nodes-country-state-city

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/@mimirtech%2Fn8n-nodes-country-state-city.svg)](https://badge.fury.io/js/@mimirtech%2Fn8n-nodes-country-state-city)
[![npm downloads](https://img.shields.io/npm/dm/@mimirtech/n8n-nodes-country-state-city)](https://www.npmjs.com/package/@mimirtech/n8n-nodes-country-state-city)

An n8n community node package that provides functionality to query information about countries, states/provinces, and cities using the [country-state-city](https://github.com/dr5hn/country-state-city) library.

* Repository: https://github.com/mimirtechco/n8n-nodes-country-state-city

## Installation

Follow the instructions in the [n8n documentation](https://docs.n8n.io/integrations/community-nodes/installation/) to install community nodes.

```bash
npm install @mimirtech/n8n-nodes-country-state-city
```

## Operations

### 🌍 Get Country by Code (ISO2)
Returns detailed information about a country based on its ISO2 code (2 letters).
- **Input**: Country Code (e.g., `US`, `BR`, `CA`)
- **Output**: Name, ISO code, coordinates, etc.

### 🌎 Get Country by ISO3 Code 
Returns detailed information about a country based on its ISO3 code (3 letters).
- **Input**: Country ISO3 Code (e.g., `USA`, `BRA`, `CAN`)
- **Output**: Name, ISO2 and ISO3 codes, coordinates, etc.

### 🏛️ Get States by Country  
Returns a list of all states/provinces of a specific country.
- **Input**: Country Code (e.g., `US`, `BR`, `CA`)
- **Output**: Array with all states/provinces

### 🏢 Get State by Code
Returns detailed information about a specific state.
- **Input**: Country Code + State Code (e.g., `US` + `CA`, `BR` + `SP`)
- **Output**: State name, ISO code, coordinates, etc.

### 🏙️ Get Cities by State
Returns a list of all cities in a specific state/province.
- **Input**: Country Code + State Code (e.g., `US` + `CA`)
- **Output**: Array with all cities

## Features

- ✅ **No API Keys Required**: Works completely offline
- ✅ **Fast & Reliable**: Local database, no internet dependency
- ✅ **Up-to-Date Data**: Uses actively maintained country-state-city library
- ✅ **Easy to Use**: Intuitive interface in n8n
- ✅ **Comprehensive**: Support for all ISO country and state codes

## Usage Examples

### Get Brazil information (ISO2)
- Operation: `Get Country by Code`
- Country Code: `BR`

### Get Brazil information (ISO3)
- Operation: `Get Country by ISO3 Code`
- Country ISO3 Code: `BRA`

### Get United States information (ISO3)
- Operation: `Get Country by ISO3 Code`
- Country ISO3 Code: `USA`

### List Brazil states  
- Operation: `Get States by Country`
- Country Code: `BR`

### Get São Paulo state information
- Operation: `Get State by Code`
- Country Code: `BR`
- State Code: `SP`

### List São Paulo cities
- Operation: `Get Cities by State`
- Country Code: `BR`
- State Code: `SP`

## Supported Codes

### ISO2 vs ISO3
| Country | ISO2 | ISO3 | 
|---------|------|------|
| Brazil | `BR` | `BRA` |
| United States | `US` | `USA` |
| Canada | `CA` | `CAN` |
| United Kingdom | `GB` | `GBR` |
| France | `FR` | `FRA` |
| Germany | `DE` | `DEU` |
| Japan | `JP` | `JPN` |

> **Note**: Both formats are supported - use ISO2 for state/city operations, and either ISO2 or ISO3 for country lookups.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the complete change history.

## Maintainer

[Mimir Tech](https://www.mimirtech.co)

## License

MIT
