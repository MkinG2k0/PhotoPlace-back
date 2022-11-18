import { Module } from '@nestjs/common';
import { FilesModule } from 'src/files/files.module';
import { PlaceSchema } from 'src/place/place.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceModule } from './place/place.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mking:mking2000@cluster0.lwywdhj.mongodb.net/?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    PlaceModule,
    // AuthModule,
    FilesModule,
    MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
