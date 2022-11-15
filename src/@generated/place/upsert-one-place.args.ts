import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceCreateInput } from './place-create.input';
import { PlaceUpdateInput } from './place-update.input';

@ArgsType()
export class UpsertOnePlaceArgs {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceCreateInput, {nullable:false})
    @Type(() => PlaceCreateInput)
    create!: PlaceCreateInput;

    @Field(() => PlaceUpdateInput, {nullable:false})
    @Type(() => PlaceUpdateInput)
    update!: PlaceUpdateInput;
}
