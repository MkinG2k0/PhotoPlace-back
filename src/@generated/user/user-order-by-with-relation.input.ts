import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceOrderByRelationAggregateInput } from '../place/place-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secondName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photo?: keyof typeof SortOrder;

    @Field(() => PlaceOrderByRelationAggregateInput, {nullable:true})
    Place?: PlaceOrderByRelationAggregateInput;
}
