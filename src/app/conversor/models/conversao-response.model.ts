export class ConversaoResponse {
  constructor(
    public type?: 'temperature',
    public from?: string,
    public to?: string,
    public value?: any) { }
}