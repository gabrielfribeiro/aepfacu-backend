import { Injectable } from '@nestjs/common';
import { UserLoginDTO } from './auth.dto';

@Injectable()
export class AuthService {
  public async login(user_data: UserLoginDTO) {
    if (user_data.cnpj === user_data.cnpj) return true;
    return false;
  }
}
