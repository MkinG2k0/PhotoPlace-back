import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from '../place/place-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlaceOrThrowArgs {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;
}
