import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneWithoutPlaceNestedInput } from '../user/user-update-one-without-place-nested.input';

@InputType()
export class PlaceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    images?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    videos?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutPlaceNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutPlaceNestedInput;
}
