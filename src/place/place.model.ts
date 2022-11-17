import * as mongoose from 'mongoose';

export const PlaceSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: String,
  position: [Number],
  address: String,
  images: [String],
  videos: [String],
  userId: String,
});

export class Place {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public position: [number, number],
    public address: string,
    public images: string[],
    public videos: string[],
    public userId: number,
  ) {}
}
