import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPlaceInput } from './user-create-without-place.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPlaceInput } from './user-create-or-connect-without-place.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPlaceInput {

    @Field(() => UserCreateWithoutPlaceInput, {nullable:true})
    @Type(() => UserCreateWithoutPlaceInput)
    create?: UserCreateWithoutPlaceInput;

    @Field(() => UserCreateOrConnectWithoutPlaceInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: UserCreateOrConnectWithoutPlaceInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
