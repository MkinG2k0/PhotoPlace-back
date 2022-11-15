import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PlaceScalarWhereWithAggregatesInput {

    @Field(() => [PlaceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlaceScalarWhereWithAggregatesInput>;

    @Field(() => [PlaceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlaceScalarWhereWithAggregatesInput>;

    @Field(() => [PlaceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlaceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    images?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    videos?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
