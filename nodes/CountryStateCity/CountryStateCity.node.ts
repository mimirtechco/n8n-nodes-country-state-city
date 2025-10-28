import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';
import { ICountry, IState, ICity } from 'country-state-city';
import Country from 'country-state-city/lib/country';
import State from 'country-state-city/lib/state';
import City from 'country-state-city/lib/city';

export default class CountryStateCity implements INodeType {
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
					},
					{
						name: 'Get States by Country',
						value: 'getStatesByCountry',
					},
					{
						name: 'Get Cities by State',
						value: 'getCitiesByState',
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
				displayOptions: {
					show: {
						operation: [
							'getCountryByCode',
							'getStatesByCountry',
							'getCitiesByState',
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
				displayOptions: {
					show: {
						operation: [
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
			const stateCode = this.getNodeParameter('stateCode', itemIndex, '') as string;

			let result: ICountry | IState[] | ICity[] | undefined | null = null;

			if (operation === 'getCountryByCode') {
				result = Country.getCountryByCode(countryCode);
			} else if (operation === 'getStatesByCountry') {
				result = State.getStatesOfCountry(countryCode);
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
