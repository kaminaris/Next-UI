export class Util {
	static jobs = {
		NONE: 0,
		GLA: 1,
		PGL: 2,
		MRD: 3,
		LNC: 4,
		ARC: 5,
		CNJ: 6,
		THM: 7,
		CRP: 8,
		BSM: 9,
		ARM: 10,
		GSM: 11,
		LTW: 12,
		WVR: 13,
		ALC: 14,
		CUL: 15,
		MIN: 16,
		BTN: 17,
		FSH: 18,
		PLD: 19,
		MNK: 20,
		WAR: 21,
		DRG: 22,
		BRD: 23,
		WHM: 24,
		BLM: 25,
		ACN: 26,
		SMN: 27,
		SCH: 28,
		ROG: 29,
		NIN: 30,
		MCH: 31,
		DRK: 32,
		AST: 33,
		SAM: 34,
		RDM: 35,
		BLU: 36,
		GNB: 37,
		DNC: 38,
		RPR: 39,
		SGE: 40,
	};

	static jobEnumToJob(id: number): keyof typeof Util.jobs | 'NONE' {
		const job = Object.keys(Util.jobs)[id] as keyof typeof Util.jobs;
		return job ?? 'NONE';
	}

	static jobsArray(includeNone = false): { jobId: number, job: string }[] {
		const out = [];
		const keys = Object.keys(Util.jobs);
		for (const job of keys) {
			if (!includeNone && job === 'NONE') {
				continue;
			}
			out.push({ jobId: (Util.jobs as any)[job], job });
		}

		return out;
	}

	static formatNumber(n: number, format: string) {
		switch (format) {
			case 'prec0':
				return (Math.round(n / 1000)).toString() + 'k';
			case 'prec1':
				return (Math.round(n * 10 / 1000) / 10).toString() + 'k';
			case 'prec2':
				return (Math.round(n * 100 / 1000) / 100).toString() + 'k';
			default:
			case 'full':
				return n.toString();
		}
	}
}