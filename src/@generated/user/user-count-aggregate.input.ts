import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    secondName?: true;

    @Field(() => Boolean, {nullable:true})
    photo?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
