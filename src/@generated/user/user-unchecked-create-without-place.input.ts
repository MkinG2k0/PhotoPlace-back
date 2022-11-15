import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserUncheckedCreateWithoutPlaceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    firstName!: string;

    @Field(() => String, {nullable:false})
    secondName!: string;

    @Field(() => String, {nullable:false})
    photo!: string;
}
