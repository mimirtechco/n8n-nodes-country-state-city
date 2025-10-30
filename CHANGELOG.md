# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.3.0] - 2025-10-28

### Added
- **New Operation**: "Get Country by ISO3 Code" - Support for 3-letter country codes
  - Comprehensive ISO2 to ISO3 mapping for all 249 countries
  - Automatic conversion from ISO3 to ISO2 for data lookup
  - Enhanced result includes both ISO2 and ISO3 codes in response
  - Examples: `USA` → United States, `BRA` → Brazil, `CAN` → Canada, `GBR` → United Kingdom

### Changed
- **Clarified field descriptions**: Distinguished between ISO2 (2 letters) and ISO3 (3 letters) codes
- **Updated operation descriptions**: "Get Country by Code" now specifies ISO2 support
- **Enhanced error handling**: Proper validation and error messages for invalid ISO3 codes

### Technical
- Created `iso-mappings.ts` with complete ISO2 ↔ ISO3 country code mappings
- Added input validation for ISO3 codes with informative error messages
- Extended node interface to support both ISO2 and ISO3 code inputs

## [0.2.0] - 2025-10-28

### Added
- **New Operation**: "Get State by Code" - Get detailed information about a specific state/province
  - Uses `State.getStateByCodeAndCountry(stateCode, countryCode)` method
  - Returns state name, ISO code, country code, latitude, and longitude
  - Examples: California (US,CA), São Paulo (BR,SP), Ontario (CA,ON)

### Changed
- **Enhanced UI/UX**: Improved operation descriptions and field labels
- **Better placeholders**: Added helpful examples for Country Code (`"e.g., US, BR, CA"`) and State Code (`"e.g., CA, NY, SP"`)
- **Detailed descriptions**: Each operation now includes clear, descriptive help text

### Technical
- Updated TypeScript compilation targets
- Improved error handling and validation
- Enhanced code documentation

## [0.1.0] - 2025-10-28

### Added
- **Initial release** of n8n Country State City node
- **Core Operations**:
  - `Get Country by Code` - Retrieve country details by ISO code
  - `Get States by Country` - List all states/provinces in a country  
  - `Get Cities by State` - List all cities in a state/province
- **Features**:
  - Built for n8n workflow automation platform
  - Uses offline `country-state-city` library v3.1.2
  - No API keys required - works completely offline
  - Fast, reliable geographical data access
  - Support for all ISO country codes and state codes

### Technical
- TypeScript implementation with proper type definitions
- CommonJS module support for n8n compatibility
- Proper n8n node structure following community standards
- Comprehensive error handling and input validation
- Complete build pipeline with TypeScript compilation

### Fixed
- **Node loading issues**: Fixed "Class could not be found" error
- **Export structure**: Changed from `export default` to named exports
- **Package configuration**: Updated package.json to follow n8n-nodes-starter pattern
- **Dependencies**: Configured proper peer dependencies for n8n-workflow
- **Imports**: Fixed country-state-city library imports for CommonJS compatibility

## [Links]
- [0.1.3]: https://github.com/mimirtechco/n8n-nodes-country-state-city/releases/tag/v0.1.3
- [0.2.0]: https://github.com/mimirtechco/n8n-nodes-country-state-city/releases/tag/v0.2.0
- [0.1.0]: https://github.com/mimirtechco/n8n-nodes-country-state-city/releases/tag/v0.1.0
- [Unreleased]: https://github.com/mimirtechco/n8n-nodes-country-state-city/compare/v0.1.3...HEAD

n8n, n8n-community-nodes, n8n-nodes, country-data, country-state-city, geography, iso-codes, workflow-automation, offline-data, no-api-keys, typescript