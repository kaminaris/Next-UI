import { Injectable } from '@angular/core';

declare var CompressionStream: any;
declare var DecompressionStream: any;

@Injectable({ providedIn: 'root' })
export class CompressionService {
	method = 'gzip';
	hasCompressionSupport = !!(window as any).CompressionStream;

	async compress(s: string): Promise<string> {
		if (!this.hasCompressionSupport) {
			return s;
		}
		let blob = new Blob([s], { type: 'text/plain' });

		let compressedReadableStream: any = blob.stream().pipeThrough(new CompressionStream(this.method));
		const compressedBlob = await new Response(compressedReadableStream).blob();

		return await this.blobToBase64(compressedBlob);
	}

	async decompress(s: string): Promise<string> {
		if (!this.hasCompressionSupport) {
			return s;
		}
		const full = 'data:application/octet-stream;base64,' + s;
		const response = await fetch(full);
		const compressedBlob = await response.blob();

		let decompressedReadableStream: any = compressedBlob.stream().pipeThrough(new DecompressionStream(this.method));
		return (await new Response(decompressedReadableStream).blob()).text();
	}

	blobToBase64(blob: Blob): Promise<string> {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onloadend = function() {
				const base64data = reader.result as string;
				const idx = base64data.indexOf('base64,');
				resolve(base64data.substr(idx + 7));
			};
		});
	}
}