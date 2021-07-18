const fs = require('fs');
const path = require('path');

const testFolder = './data/tool/status/';
const assetsDir = path.join('src', 'assets', 'status');
console.log(assetsDir)

const concated = [];

const files = fs.readdirSync(testFolder);
for (const file of files) {
	if (!file.endsWith('.json')) {
		continue;
	}

	const iconName = file.replace('.json', '.png');
	const iconFile = path.join(testFolder, iconName);
	if (!fs.existsSync(iconFile)) {
		continue;
	}

	fs.copyFileSync(iconFile, path.join(assetsDir, iconName));

	const data = JSON.parse(fs.readFileSync(path.join(testFolder, file)));
	// console.log(data)
	concated.push({
		id: data.ID,
		category: data.Category,
		isPermanent: data.IsPermanent,
		maxStacks: data.MaxStacks,
		partyListPriority: data.PartyListPriority
	});
}

const out = `export const statuses = ${JSON.stringify(concated, null, 4)};`;
fs.writeFileSync(path.join('src', 'app', 'Data', 'status.ts'), out);