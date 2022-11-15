import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutUserInput } from './place-create-without-user.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutUserInput } from './place-create-or-connect-without-user.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';

@InputType()
export class PlaceUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PlaceCreateWithoutUserInput], {nullable:true})
    @Type(() => PlaceCreateWithoutUserInput)
    create?: Array<PlaceCreateWithoutUserInput>;

    @Field(() => [PlaceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutUserInput>;

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<PlaceWhereUniqueInput>;
}
