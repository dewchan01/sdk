import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiProduces,
  ApiTags,
  ApiBearerAuth,
  // ApiOAuth2,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { EmptyDto } from './empty.dto';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';

@ApiTags('Version')
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Version of the Todo App Service',
    description: 'Gets the version of the service',
  })
  @Get('version')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  // @ApiOAuth2([])
  @ApiProduces('text/plain')
  @ApiExtraModels(EmptyDto)
  @ApiOkResponse({ type: String })
  public getVersion(): string {
    return this.appService.getVersion();
  }
}
