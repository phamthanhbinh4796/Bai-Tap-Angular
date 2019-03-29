import { SenderName } from '../model/senderName.class';
export class Message {
    folder: string;
    body: string;
    subject: string;
    from: string;
    to: string;
    date: string;
    senderName: SenderName;
    corpus: string;
    _id: string;
}