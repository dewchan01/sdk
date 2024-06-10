import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async validateUserCreds(
    username: string,
    password: string,
  ): Promise<any> {
    const user = await this.userService.findOne(username);
    if (!user) throw new BadRequestException();

    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();

    return user;
  }

  public generateToken(user: any) {
    return {
      access_token: this.jwtService.sign({
        name: user.username,
        sub: user.id,
      }),
    };
  }
}
