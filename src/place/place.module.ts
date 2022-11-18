import { Module } from '@nestjs/common';
import { FilesModule } from 'src/files/files.module';
import { PlaceSchema } from 'src/place/place.model';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }]),
    // FilesModule,
  ],
  controllers: [],
  providers: [PlaceService],
})
export class PlaceModule {}
