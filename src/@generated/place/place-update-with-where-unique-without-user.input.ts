import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceUpdateWithoutUserInput } from './place-update-without-user.input';

@InputType()
export class PlaceUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceUpdateWithoutUserInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutUserInput)
    data!: PlaceUpdateWithoutUserInput;
}
