import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceWhereInput } from '../place/place-where.input';
import { Type } from 'class-transformer';
import { PlaceOrderByWithRelationInput } from '../place/place-order-by-with-relation.input';
import { PlaceWhereUniqueInput } from '../place/place-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlaceScalarFieldEnum } from '../place/place-scalar-field.enum';

@ArgsType()
export class FindFirstPlaceOrThrowArgs {

    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: PlaceWhereInput;

    @Field(() => [PlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaceOrderByWithRelationInput>;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    cursor?: PlaceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlaceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PlaceScalarFieldEnum>;
}
