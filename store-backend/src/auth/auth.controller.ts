import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto, LoginDto, RegisterUserDto, UpdateAuthDto } from './dto';
import { AuthGuard } from './guards/auth.guard';
import { LoginResponse } from './interfaces/login-response';
import { User } from './entities/user.entity';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AdminAuthGuard } from './guards/admin-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create user' })
  // @ApiBody({ type: CreateUserDto })
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.authService.create(createUserDto);
  // }

  @Post('/login')
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ type: LoginDto })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  @ApiOperation({ summary: 'Register' })
  @ApiBody({ type: RegisterUserDto })
  register(@Body() registerDto: RegisterUserDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(AdminAuthGuard)
  @Get('/all')
  @ApiOperation({ summary: 'Get all users' })
  @ApiBearerAuth()
  findAll(@Request() req: Request) {
    // const user = req['user'];

    // return user;
    return this.authService.findAll();
  }

  // LoginResponse
  @UseGuards(AuthGuard)
  @Get('check-token')
  @ApiOperation({ summary: 'Check token' })
  @ApiBearerAuth()
  checkToken(@Request() req: Request): LoginResponse {
    const user = req['user'] as User;

    return {
      user,
      token: this.authService.getJwtToken({ id: user._id }),
    };
  }
}
