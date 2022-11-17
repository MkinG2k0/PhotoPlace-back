import { IsNumber } from 'class-validator';

export class CreatePlaceDto {
  @IsNumber({}, { message: 'Должно быть строкой' })
  readonly title: string;

  readonly description: string;
  readonly position: number[];
  readonly address: string;
  readonly images: string[];
  readonly videos: string[];
  readonly userId: number;
}
