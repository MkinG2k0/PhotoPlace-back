import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceUpdateWithoutUserInput } from './place-update-without-user.input';
import { PlaceCreateWithoutUserInput } from './place-create-without-user.input';

@InputType()
export class PlaceUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceUpdateWithoutUserInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutUserInput)
    update!: PlaceUpdateWithoutUserInput;

    @Field(() => PlaceCreateWithoutUserInput, {nullable:false})
    @Type(() => PlaceCreateWithoutUserInput)
    create!: PlaceCreateWithoutUserInput;
}
