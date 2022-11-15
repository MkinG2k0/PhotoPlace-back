import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Place } from '../place/place.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    secondName!: string;

    @Field(() => String, {nullable:false})
    photo!: string;

    @Field(() => [Place], {nullable:true})
    Place?: Array<Place>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
