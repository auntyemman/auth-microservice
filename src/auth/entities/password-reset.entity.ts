import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PasswordResetDocument = PasswordReset & Document;

@Schema()
export class PasswordReset {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  token: string;

  @Prop({ type: Date, required: true })
  expiresIn: Date;
}

export const PasswordResetSchema = SchemaFactory.createForClass(PasswordReset);
