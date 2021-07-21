export class Brd {
	static parse(bytePart1: string, bytePart2: string) {
		return {
			songTimer: parseInt(bytePart1.substr(2, 4), 16),
			numSongStacks: parseInt(bytePart1.substr(6, 2), 16),
			soulVoiceValue: parseInt(bytePart2.substr(0, 2), 16),
			activeSong: parseInt(bytePart2.substr(2, 2), 16),
		}
	}
}