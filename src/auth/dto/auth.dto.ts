export class CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  password: string;
}

export class LoginDto {
  readonly email: string;
  readonly password: string;
}

export class ResetPasswordDto {
  token: string;
  password: string;
  confirmPassword: string;
}

export class UpdateUserDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  userId: string;
  readonly avatar?: string;
}
