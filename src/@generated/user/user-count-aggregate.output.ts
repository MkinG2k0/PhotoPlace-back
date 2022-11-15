import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    secondName!: number;

    @Field(() => Int, {nullable:false})
    photo!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
