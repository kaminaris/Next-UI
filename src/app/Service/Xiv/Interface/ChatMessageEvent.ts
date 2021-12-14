import { XivChatType } from './XivChatType';

export interface ChatMessageEvent {
	typeId: XivChatType;
	senderId: number;
	sender: string;
	message: string;
}