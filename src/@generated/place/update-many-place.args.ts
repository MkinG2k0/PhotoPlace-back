import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceUpdateManyMutationInput } from './place-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlaceWhereInput } from './place-where.input';

@ArgsType()
export class UpdateManyPlaceArgs {

    @Field(() => PlaceUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceUpdateManyMutationInput)
    data!: PlaceUpdateManyMutationInput;

    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: PlaceWhereInput;
}
