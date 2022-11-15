import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PlaceScalarWhereInput {

    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    AND?: Array<PlaceScalarWhereInput>;

    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    OR?: Array<PlaceScalarWhereInput>;

    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    NOT?: Array<PlaceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    images?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    videos?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
