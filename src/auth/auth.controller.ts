import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('/login')
export class AuthController {
  constructor(private readonly auth_service: AuthService) {}

  @Post()
  async login(@Body() user: UserLoginDTO) {
    return this.auth_service.login(user);
  }
}
