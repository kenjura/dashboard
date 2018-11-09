export { getLatest, parseData };

async function getLatest() {
	const url = '/api/geo';
	const result = await fetch(url);
	const data = await result.json();
	const sorted = data.sort((a,b) => a.timestamp - b.timestamp);
	const enriched = mapWithPrevious(sorted, (prev={ speed:0, timestamp:0 }, cur) => {
		if (!prev) prev = { speed:0, timestamp:0 }; // ummmm....why is this necessary? Hello? V8?
		return Object.assign(cur, {
			acceleration: (cur.speed - prev.speed) / (cur.timestamp - prev.timestamp) * 1000
		});
	});

	const metadata = parseData(data);

	return Object.assign({}, metadata, { data:enriched });
}

function parseData(data) {
	const maxTimestamp = data.map(d => d.timestamp).reduce((p,c)=>c>p?c:p,-Infinity);
	const minTimestamp = data.map(d => d.timestamp).reduce((p,c)=>c<p?c:p,Infinity);

	return {
		maxTimestamp,
		minTimestamp,
	}
}

function mapWithPrevious(arr, fn) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = fn(i>0 ? arr[i-1] : null, arr[i]);
	}
	return arr;
}