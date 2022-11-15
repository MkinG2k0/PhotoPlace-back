import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutUserInput } from './place-create-without-user.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutUserInput } from './place-create-or-connect-without-user.input';
import { PlaceUpsertWithWhereUniqueWithoutUserInput } from './place-upsert-with-where-unique-without-user.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { PlaceUpdateWithWhereUniqueWithoutUserInput } from './place-update-with-where-unique-without-user.input';
import { PlaceUpdateManyWithWhereWithoutUserInput } from './place-update-many-with-where-without-user.input';
import { PlaceScalarWhereInput } from './place-scalar-where.input';

@InputType()
export class PlaceUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [PlaceCreateWithoutUserInput], {nullable:true})
    @Type(() => PlaceCreateWithoutUserInput)
    create?: Array<PlaceCreateWithoutUserInput>;

    @Field(() => [PlaceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutUserInput>;

    @Field(() => [PlaceUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PlaceUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PlaceUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    set?: Array<PlaceWhereUniqueInput>;

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    disconnect?: Array<PlaceWhereUniqueInput>;

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    delete?: Array<PlaceWhereUniqueInput>;

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<PlaceWhereUniqueInput>;

    @Field(() => [PlaceUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PlaceUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PlaceUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PlaceUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PlaceUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PlaceUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    @Type(() => PlaceScalarWhereInput)
    deleteMany?: Array<PlaceScalarWhereInput>;
}
