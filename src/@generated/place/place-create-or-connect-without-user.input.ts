import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutUserInput } from './place-create-without-user.input';

@InputType()
export class PlaceCreateOrConnectWithoutUserInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceCreateWithoutUserInput, {nullable:false})
    @Type(() => PlaceCreateWithoutUserInput)
    create!: PlaceCreateWithoutUserInput;
}
