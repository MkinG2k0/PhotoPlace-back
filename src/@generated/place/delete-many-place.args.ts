import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceWhereInput } from './place-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPlaceArgs {

    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: PlaceWhereInput;
}
