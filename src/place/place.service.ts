import { Injectable } from '@nestjs/common';
import { FilesService } from 'src/files/files.service';
import { CreatePlaceDto } from 'src/place/dto/create-place.dto';
import { Place } from 'src/place/place.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel('Place') private readonly placeModel: Model<Place>,
    private fileService: FilesService,
  ) {}

  async create(createPlaceDto: CreatePlaceDto) {
    const fileNames = [];

    createPlaceDto.images.map((image) => {
      this.fileService.createFile(image).then((name) => fileNames.push(name));
    });

    const newProduct = new this.placeModel({
      ...createPlaceDto,
      images: fileNames,
    });

    return newProduct.save();
  }

  findAll() {
    return this.placeModel.find();
  }

  findOne(id: number) {
    return this.placeModel.findOne({ where: { id } });
  }

  update(id: number, updatePlaceDto: any) {
    const find = this.findOne(id);

    if (find) {
      return this.placeModel.update({ where: { id }, data: updatePlaceDto });
    }
  }

  remove(id: number) {
    const find = this.findOne(id);

    if (find) {
      return this.placeModel.remove({ where: { id } });
    }
  }
}
