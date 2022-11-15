import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPlaceInput } from './user-create-without-place.input';

@InputType()
export class UserCreateOrConnectWithoutPlaceInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPlaceInput, {nullable:false})
    @Type(() => UserCreateWithoutPlaceInput)
    create!: UserCreateWithoutPlaceInput;
}
