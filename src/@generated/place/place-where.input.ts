import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PlaceWhereInput {

    @Field(() => [PlaceWhereInput], {nullable:true})
    AND?: Array<PlaceWhereInput>;

    @Field(() => [PlaceWhereInput], {nullable:true})
    OR?: Array<PlaceWhereInput>;

    @Field(() => [PlaceWhereInput], {nullable:true})
    NOT?: Array<PlaceWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
