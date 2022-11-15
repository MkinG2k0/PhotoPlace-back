import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserCreateWithoutPlaceInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    firstName!: string;

    @Field(() => String, {nullable:false})
    secondName!: string;

    @Field(() => String, {nullable:false})
    photo!: string;
}
