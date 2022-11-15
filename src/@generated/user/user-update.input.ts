import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PlaceUpdateManyWithoutUserNestedInput } from '../place/place-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    photo?: StringFieldUpdateOperationsInput;

    @Field(() => PlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    Place?: PlaceUpdateManyWithoutUserNestedInput;
}
