import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceCreateInput } from './place-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlaceArgs {

    @Field(() => PlaceCreateInput, {nullable:false})
    @Type(() => PlaceCreateInput)
    data!: PlaceCreateInput;
}
