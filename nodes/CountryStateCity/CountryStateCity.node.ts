import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';

// Importações compatíveis com CommonJS
const { Country, State, City } = require('country-state-city');

// Importar mapeamentos ISO
import { ISO3_TO_ISO2_MAPPING } from './iso-mappings';

export class CountryStateCity implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Country State City',
		name: 'countryStateCity',
		icon: 'fa:globe',
		group: ['transform'],
		version: 1,
		description: 'Get information about countries, states, and cities',
		defaults: {
			name: 'Country State City',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Get Country by Code',
						value: 'getCountryByCode',
						description: 'Get detailed information about a country by its ISO2 code (2 letters)',
					},
					{
						name: 'Get Country by ISO3 Code',
						value: 'getCountryByISO3Code',
						description: 'Get detailed information about a country by its ISO3 code (3 letters)',
					},
					{
						name: 'Get States by Country',
						value: 'getStatesByCountry',
						description: 'Get all states/provinces of a specific country',
					},
					{
						name: 'Get State by Code',
						value: 'getStateByCode',
						description: 'Get detailed information about a specific state by country and state code',
					},
					{
						name: 'Get Cities by State',
						value: 'getCitiesByState',
						description: 'Get all cities of a specific state/province',
					},
				],
				default: 'getCountryByCode',
			},
			{
				displayName: 'Country Code',
				name: 'countryCode',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g., US, BR, CA',
				description: 'ISO 3166-1 alpha-2 country code (2 letters)',
				displayOptions: {
					show: {
						operation: [
							'getCountryByCode',
							'getStatesByCountry',
							'getStateByCode',
							'getCitiesByState',
						],
					},
				},
			},
			{
				displayName: 'Country ISO3 Code',
				name: 'countryISO3Code',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g., USA, BRA, CAN',
				description: 'ISO 3166-1 alpha-3 country code (3 letters)',
				displayOptions: {
					show: {
						operation: [
							'getCountryByISO3Code',
						],
					},
				},
			},
			{
				displayName: 'State Code',
				name: 'stateCode',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g., CA, NY, SP',
				description: 'State/Province ISO code',
				displayOptions: {
					show: {
						operation: [
							'getStateByCode',
							'getCitiesByState',
						],
					},
				},
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			const operation = this.getNodeParameter('operation', itemIndex, '') as string;
			const countryCode = this.getNodeParameter('countryCode', itemIndex, '') as string;
			const countryISO3Code = this.getNodeParameter('countryISO3Code', itemIndex, '') as string;
			const stateCode = this.getNodeParameter('stateCode', itemIndex, '') as string;

			let result: any = null;

			if (operation === 'getCountryByCode') {
				result = Country.getCountryByCode(countryCode);
			} else if (operation === 'getCountryByISO3Code') {
				// Converter ISO3 para ISO2 e buscar o país
				const iso2Code = ISO3_TO_ISO2_MAPPING[countryISO3Code.toUpperCase()];
				if (iso2Code) {
					result = Country.getCountryByCode(iso2Code);
					// Adicionar o código ISO3 ao resultado
					if (result) {
						result = { ...result, iso3Code: countryISO3Code.toUpperCase() };
					}
				} else {
					throw new Error(`Invalid ISO3 country code: ${countryISO3Code}`);
				}
			} else if (operation === 'getStatesByCountry') {
				result = State.getStatesOfCountry(countryCode);
			} else if (operation === 'getStateByCode') {
				result = State.getStateByCodeAndCountry(stateCode, countryCode);
			} else if (operation === 'getCitiesByState') {
				result = City.getCitiesOfState(countryCode, stateCode);
			}

			if (result) {
				let jsonResult: IDataObject | IDataObject[] = {};
				if(Array.isArray(result)) {
					jsonResult = result.map(item => ({...item}));
				} else {
					jsonResult = {...result};
				}

				const newItem: INodeExecutionData = {
					json: Array.isArray(jsonResult) ? { data: jsonResult } : jsonResult,
					pairedItem: {
						item: itemIndex,
					},
				};
				returnData.push(newItem);
			}
		}

		return this.prepareOutputData(returnData);
	}
}
