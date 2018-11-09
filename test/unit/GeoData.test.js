import { expect } from 'chai';
import { parseData } from '../../src/services/GeoData';

describe('parseData', () => {
	it('should calculate minimimum timestamp correctly', () => {
		const testData = getTestData();
		const expected = 1539729617000;
		const actual = parseData(testData).minTimestamp;
		expect(actual).to.eq(expected);
	});
	it('should calculate maximum timestamp correctly', () => {
		const testData = getTestData();
		const expected = 1539729637000;
		const actual = parseData(testData).maxTimestamp;
		expect(actual).to.eq(expected);
	});
});


function getTestData() {
	return [
		{"lat":37.571568,"long":-122.33103,"rssi":4,"angle":0,"speed":0,"timestamp":1539729617000,"eventTimestamp":"2018-10-16T22:40:19.998Z","deviceId":"dd7295fa-6c65-484d-b38d-30df3bc31c0c"},
		{"lat":37.571568,"long":-122.33103,"rssi":4,"angle":0,"speed":0,"timestamp":1539729627000,"eventTimestamp":"2018-10-16T22:40:29.993Z","deviceId":"dd7295fa-6c65-484d-b38d-30df3bc31c0c"},
		{"lat":37.571568,"long":-122.33103,"rssi":4,"angle":0,"speed":0,"timestamp":1539729637000,"eventTimestamp":"2018-10-16T22:40:39.993Z","deviceId":"dd7295fa-6c65-484d-b38d-30df3bc31c0c"},
	]
}