const request = require('request-promise');
const tempData = require('../../../temp/geoData.json');

module.exports = { get };

async function get() {
	return tempData;
	
	const token = process.env.TOKEN;
	const uri = 'http://alpha.skylo.io/api/devices/history/ids/dd7295fa-6c65-484d-b38d-30df3bc31c0c?since=2018-10-01T13:02:43.000Z&until=2018-11-07T23:02:43.000';
	const options = {
		uri,
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const rawData = await request(options);
	const parsedData = JSON.parse(rawData);

	if (!parsedData || !parsedData.devices) throw new Error('geo > data is not in correct format');

	const finalData = Object.keys(parsedData.devices).map(key => {
		return parsedData.devices[key].map(val => Object.assign({}, val, { deviceId:key }));
	});
	return finalData.flat();
}