import zipped from './common.zip?url';

async function load() {
	const result = await Promise.all([
		fetch(zipped).then((r) => r.arrayBuffer())
	]);

	return {
		zipped: result[0],
		unzip: ''
	};
}

export const ready = load();
