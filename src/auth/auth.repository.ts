import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropDataInput } from '../common/interfaces/util.interface';
import { User, UserDocument } from './entities/user.entity';
import { PasswordReset, PasswordResetDocument } from './entities/password-reset.entity';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(PasswordReset.name)
    private passwordResetModel: Model<PasswordResetDocument>,
  ) {}

  async createUser(data: any): Promise<UserDocument> {
    try {
      return await this.userModel.create(data);
    } catch (error) {
      console.log(error);
      throw new Error(error?.messsage);
    }
  }
  async findUser(where: PropDataInput, attributes?: string): Promise<UserDocument> {
    return await this.userModel.findOne(where).lean().select(attributes);
  }
  async updateUser(where: PropDataInput, data: any): Promise<UserDocument> {
    return await this.userModel.findOneAndUpdate(where, data, {
      new: true,
    });
  }
  async findResetPwdToken(where: PropDataInput): Promise<PasswordResetDocument> {
    return await this.passwordResetModel.findOne(where).lean();
  }
  async createResetPwdToken(data: any): Promise<PasswordResetDocument> {
    try {
      return await this.passwordResetModel.create(data);
    } catch (error) {
      throw new Error(error?.messsage);
    }
  }

  async updateResetPwdToken(where: any, data: any): Promise<PasswordResetDocument> {
    return await this.passwordResetModel.findOneAndUpdate(where, data, {
      new: true,
    });
  }
  async removeResetPwdToken(where: any): Promise<PasswordResetDocument> {
    return await this.passwordResetModel.findByIdAndDelete(where);
  }
}
