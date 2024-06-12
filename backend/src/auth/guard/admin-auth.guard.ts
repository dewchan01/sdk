import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserRoles } from '../../user/enum/role.enum';
import { UserService } from '../../user/user.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private userService: UserService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (request?.user) {
      const { id } = request.user;
      const user = await this.userService.findOne(id);
      return user.role === UserRoles.ADMIN;
    }

    return false;
  }
}
