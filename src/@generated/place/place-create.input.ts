import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPlaceInput } from '../user/user-create-nested-one-without-place.input';

@InputType()
export class PlaceCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    images!: string;

    @Field(() => String, {nullable:false})
    videos!: string;

    @Field(() => UserCreateNestedOneWithoutPlaceInput, {nullable:true})
    user?: UserCreateNestedOneWithoutPlaceInput;
}
