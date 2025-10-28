# Release Notes

## Version 0.2.0 (2025-10-28)

### 🚀 New Features

#### Added "Get State by Code" Operation
- **New operation**: Get detailed information about a specific state/province
- **Method**: Uses `State.getStateByCodeAndCountry(stateCode, countryCode)`
- **Returns**: State name, ISO code, country code, latitude, and longitude
- **Examples**:
  - California, USA: `countryCode: "US"`, `stateCode: "CA"`
  - São Paulo, Brazil: `countryCode: "BR"`, `stateCode: "SP"`
  - Ontario, Canada: `countryCode: "CA"`, `stateCode: "ON"`

### 🎨 UI/UX Improvements

- **Enhanced operation descriptions**: Each operation now has clear, detailed descriptions
- **Better field labels**: Added helpful placeholders and examples for input fields
- **Country Code field**: Now shows `"e.g., US, BR, CA"` as placeholder
- **State Code field**: Now shows `"e.g., CA, NY, SP"` as placeholder
- **Improved help text**: All fields include descriptive help text

### 📋 Complete Operations List

1. **Get Country by Code** - Get detailed information about a country by its ISO code
2. **Get States by Country** - Get all states/provinces of a specific country  
3. **🆕 Get State by Code** - Get detailed information about a specific state by country and state code
4. **Get Cities by State** - Get all cities of a specific state/province

### 🔧 Technical Details

- Uses `country-state-city` library v3.1.2
- Compatible with n8n workflow automation platform
- Supports all ISO country codes and state codes
- Returns structured JSON data with geographical coordinates

### 📦 Installation

```bash
npm install n8n-nodes-country-state-city@0.2.0
```

Or install from local package:
```bash
npm install ./n8n-nodes-country-state-city-0.2.0.tgz
```

---

## Version 0.1.0 (2025-10-28)

### 🎉 Initial Release

#### Core Operations
- **Get Country by Code**: Retrieve country details by ISO code
- **Get States by Country**: List all states/provinces in a country
- **Get Cities by State**: List all cities in a state/province

#### Features
- Built for n8n workflow automation
- Uses offline `country-state-city` database
- No API keys required
- Fast, reliable geographical data access

#### Technical Foundation
- TypeScript implementation
- CommonJS module support
- Proper n8n node structure
- Error handling and validation