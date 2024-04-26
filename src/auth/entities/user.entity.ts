import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import moment from 'moment';
import { Moment } from 'moment';
import { Role } from 'src/common/interfaces/role.interface';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, required: false })
  firstName: string;

  @Prop({ type: String, required: false })
  lastName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: false })
  password: string;

  @Prop({ type: String, default: Role.RWX_USER })
  role: Role;

  @Prop({ type: Boolean, default: false })
  isVerified: boolean;

  @Prop({
    default: 'https://lh3.googleusercontent.com/p/AF1QipPXMnF2H8CeVjRVbvej3ZkhHcQTtxp9SSGXlbyK=s680-w680-h510',
  })
  avatar: string;

  @Prop({ default: () => moment().utc().toDate(), type: Date })
  createdAt: Moment;
}

export const UserSchema = SchemaFactory.createForClass(User);
