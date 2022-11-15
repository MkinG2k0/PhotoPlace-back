import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPlaceInput } from './user-create-without-place.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPlaceInput } from './user-create-or-connect-without-place.input';
import { UserUpsertWithoutPlaceInput } from './user-upsert-without-place.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPlaceInput } from './user-update-without-place.input';

@InputType()
export class UserUpdateOneWithoutPlaceNestedInput {

    @Field(() => UserCreateWithoutPlaceInput, {nullable:true})
    @Type(() => UserCreateWithoutPlaceInput)
    create?: UserCreateWithoutPlaceInput;

    @Field(() => UserCreateOrConnectWithoutPlaceInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: UserCreateOrConnectWithoutPlaceInput;

    @Field(() => UserUpsertWithoutPlaceInput, {nullable:true})
    @Type(() => UserUpsertWithoutPlaceInput)
    upsert?: UserUpsertWithoutPlaceInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPlaceInput, {nullable:true})
    @Type(() => UserUpdateWithoutPlaceInput)
    update?: UserUpdateWithoutPlaceInput;
}
