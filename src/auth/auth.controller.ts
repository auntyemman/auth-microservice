import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto, UpdateUserDto, ResetPasswordDto } from './dto/auth.dto';
import { SubscriberPattern } from '../common/interfaces/subscriber-pattern.interface';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: SubscriberPattern.CREATE_NEW_USER })
  async createNewUser(@Payload() createUserDto: CreateUserDto): Promise<any> {
    return await this.authService.createNewUser(createUserDto);
  }

  @MessagePattern({ cmd: SubscriberPattern.CREATE_NEW_ADMIN_USER })
  async createNewAdminUser(@Payload() createUserDto: CreateUserDto): Promise<any> {
    return await this.authService.createNewAdminUser(createUserDto);
  }

  @MessagePattern({ cmd: SubscriberPattern.LOGIN })
  async login(@Payload() loginDto: LoginDto): Promise<any> {
    return await this.authService.login(loginDto);
  }

  @MessagePattern({ cmd: SubscriberPattern.ACCOUNT_ACTIVATION })
  async accountActivation(@Payload() id: string): Promise<any> {
    return await this.authService.accountActivation(id);
  }

  @MessagePattern({ cmd: SubscriberPattern.FORGOT_PASSWORD })
  async forgotPassword(@Payload() email: string): Promise<any> {
    return await this.authService.forgotPassword(email);
  }

  @MessagePattern({ cmd: SubscriberPattern.RESET_PASSWORD })
  async resetPassword(@Payload() resetPasswordDto: ResetPasswordDto): Promise<any> {
    return await this.authService.resetPassword(resetPasswordDto);
  }

  @MessagePattern({ cmd: SubscriberPattern.USER_PROFILE })
  async userProfile(@Payload() userId: string): Promise<any> {
    return await this.authService.userProfile(userId);
  }

  @MessagePattern({ cmd: SubscriberPattern.UPDATE_USER })
  async updateUser(@Payload() updateUserDto: UpdateUserDto): Promise<any> {
    return await this.authService.updateUser(updateUserDto);
  }
}
