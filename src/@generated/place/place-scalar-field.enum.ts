import { registerEnumType } from '@nestjs/graphql';

export enum PlaceScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    images = "images",
    videos = "videos",
    userId = "userId"
}


registerEnumType(PlaceScalarFieldEnum, { name: 'PlaceScalarFieldEnum', description: undefined })
