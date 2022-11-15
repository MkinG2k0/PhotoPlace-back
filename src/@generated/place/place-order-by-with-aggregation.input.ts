import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceCountOrderByAggregateInput } from './place-count-order-by-aggregate.input';
import { PlaceAvgOrderByAggregateInput } from './place-avg-order-by-aggregate.input';
import { PlaceMaxOrderByAggregateInput } from './place-max-order-by-aggregate.input';
import { PlaceMinOrderByAggregateInput } from './place-min-order-by-aggregate.input';
import { PlaceSumOrderByAggregateInput } from './place-sum-order-by-aggregate.input';

@InputType()
export class PlaceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    videos?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => PlaceCountOrderByAggregateInput, {nullable:true})
    _count?: PlaceCountOrderByAggregateInput;

    @Field(() => PlaceAvgOrderByAggregateInput, {nullable:true})
    _avg?: PlaceAvgOrderByAggregateInput;

    @Field(() => PlaceMaxOrderByAggregateInput, {nullable:true})
    _max?: PlaceMaxOrderByAggregateInput;

    @Field(() => PlaceMinOrderByAggregateInput, {nullable:true})
    _min?: PlaceMinOrderByAggregateInput;

    @Field(() => PlaceSumOrderByAggregateInput, {nullable:true})
    _sum?: PlaceSumOrderByAggregateInput;
}
