export class MailDispatcherDto {
  readonly from: string;
  readonly to: string | string[];
  readonly subject: string;
  readonly template?: string;
  readonly variables?: object;
  readonly html?: string;
  readonly text?: string;
  readonly attachments?: any;
}
