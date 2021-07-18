const fs = require('fs');
const csv = require('csvtojson');
const axios = require('axios').default;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const limit = 1000;
let i = 0;

(async () => {
	const jsonArray = await csv()
	.fromFile('./Status.csv');
	// console.log(jsonArray)

	for (const status of jsonArray) {
		console.log(status.Id);
		if (!status.Id || status.Id === '0') {
			continue;
		}
		const statusId = +status.Id;
		if (fs.existsSync(`./status/${ statusId }.json`)) {
			continue;
		}

		const url = 'https://xivapi.com/Status/' + statusId;
		const response = await axios.get(url);

		try {
			const iconUrl = 'https://xivapi.com' + response.data.IconHD;
			console.log(iconUrl)
			const response2 = await axios.get(iconUrl, { responseType: 'arraybuffer' });
			fs.writeFileSync(`./status/${ statusId }.png`, response2.data);
			fs.writeFileSync(`./status/${ statusId }.json`, JSON.stringify(response.data));
			// const parsed = JSON.parse(response.data.toString());
		}
		catch (e) {
			console.log(e.toString())
		}

		await sleep(1000);
		if (i++ > limit) {
			break;
		}
	}
})()
