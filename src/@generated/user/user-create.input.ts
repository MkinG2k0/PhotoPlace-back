import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PlaceCreateNestedManyWithoutUserInput } from '../place/place-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    firstName!: string;

    @Field(() => String, {nullable:false})
    secondName!: string;

    @Field(() => String, {nullable:false})
    photo!: string;

    @Field(() => PlaceCreateNestedManyWithoutUserInput, {nullable:true})
    Place?: PlaceCreateNestedManyWithoutUserInput;
}
