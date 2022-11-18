import { Module } from '@nestjs/common';
import { GoogleStrategy } from 'src/google.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [],
  providers: [AuthService],
})
export class AuthModule {}
