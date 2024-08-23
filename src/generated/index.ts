import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum TimesheetEntryScalarFieldEnum {
  id = 'id',
  engagementId = 'engagementId',
  hourlyRate = 'hourlyRate',
  hoursWorked = 'hoursWorked',
  weekEnding = 'weekEnding',
  phase = 'phase',
  employeeName = 'employeeName',
  employeeTitle = 'employeeTitle',
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum EngagementScalarFieldEnum {
  id = 'id',
  name = 'name',
  engagementPartner = 'engagementPartner',
  engagementManager = 'engagementManager',
}

export enum BudgetScalarFieldEnum {
  id = 'id',
  engagementId = 'engagementId',
  weekEnding = 'weekEnding',
  amount = 'amount',
  phase = 'phase',
}

registerEnumType(BudgetScalarFieldEnum, {
  name: 'BudgetScalarFieldEnum',
  description: undefined,
});
registerEnumType(EngagementScalarFieldEnum, {
  name: 'EngagementScalarFieldEnum',
  description: undefined,
});
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(TimesheetEntryScalarFieldEnum, {
  name: 'TimesheetEntryScalarFieldEnum',
  description: undefined,
});

@ObjectType()
export class AggregateBudget {
  @Field(() => BudgetCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BudgetCountAggregate>;
  @Field(() => BudgetAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof BudgetAvgAggregate>;
  @Field(() => BudgetSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof BudgetSumAggregate>;
  @Field(() => BudgetMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BudgetMinAggregate>;
  @Field(() => BudgetMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BudgetMaxAggregate>;
}

@ArgsType()
export class BudgetAggregateArgs {
  @Field(() => BudgetWhereInput, { nullable: true })
  @Type(() => BudgetWhereInput)
  where?: InstanceType<typeof BudgetWhereInput>;
  @Field(() => [BudgetOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BudgetOrderByWithRelationInput>;
  @Field(() => BudgetWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BudgetCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BudgetCountAggregateInput>;
  @Field(() => BudgetAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BudgetAvgAggregateInput>;
  @Field(() => BudgetSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BudgetSumAggregateInput>;
  @Field(() => BudgetMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BudgetMinAggregateInput>;
  @Field(() => BudgetMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BudgetMaxAggregateInput>;
}

@InputType()
export class BudgetAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  amount?: true;
}

@ObjectType()
export class BudgetAvgAggregate {
  @Field(() => Float, { nullable: true })
  amount?: number;
}

@InputType()
export class BudgetAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
}

@InputType()
export class BudgetCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  engagementId?: true;
  @Field(() => Boolean, { nullable: true })
  weekEnding?: true;
  @Field(() => Boolean, { nullable: true })
  amount?: true;
  @Field(() => Boolean, { nullable: true })
  phase?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class BudgetCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  engagementId!: number;
  @Field(() => Int, { nullable: false })
  weekEnding!: number;
  @Field(() => Int, { nullable: false })
  amount!: number;
  @Field(() => Int, { nullable: false })
  phase!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class BudgetCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
}

@InputType()
export class BudgetCreateManyEngagementInputEnvelope {
  @Field(() => [BudgetCreateManyEngagementInput], { nullable: false })
  @Type(() => BudgetCreateManyEngagementInput)
  data!: Array<BudgetCreateManyEngagementInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class BudgetCreateManyEngagementInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => Float, { nullable: false })
  amount!: number;
  @Field(() => String, { nullable: false })
  phase!: string;
}

@InputType()
export class BudgetCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  engagementId!: string;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => Float, { nullable: false })
  amount!: number;
  @Field(() => String, { nullable: false })
  phase!: string;
}

@InputType()
export class BudgetCreateNestedManyWithoutEngagementInput {
  @Field(() => [BudgetCreateWithoutEngagementInput], { nullable: true })
  @Type(() => BudgetCreateWithoutEngagementInput)
  create?: Array<BudgetCreateWithoutEngagementInput>;
  @Field(() => [BudgetCreateOrConnectWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetCreateOrConnectWithoutEngagementInput)
  connectOrCreate?: Array<BudgetCreateOrConnectWithoutEngagementInput>;
  @Field(() => BudgetCreateManyEngagementInputEnvelope, { nullable: true })
  @Type(() => BudgetCreateManyEngagementInputEnvelope)
  createMany?: InstanceType<typeof BudgetCreateManyEngagementInputEnvelope>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
}

@InputType()
export class BudgetCreateOrConnectWithoutEngagementInput {
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  @Type(() => BudgetWhereUniqueInput)
  where!: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
  @Field(() => BudgetCreateWithoutEngagementInput, { nullable: false })
  @Type(() => BudgetCreateWithoutEngagementInput)
  create!: InstanceType<typeof BudgetCreateWithoutEngagementInput>;
}

@InputType()
export class BudgetCreateWithoutEngagementInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => Float, { nullable: false })
  amount!: number;
  @Field(() => String, { nullable: false })
  phase!: string;
}

@InputType()
export class BudgetCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => Float, { nullable: false })
  amount!: number;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => EngagementCreateNestedOneWithoutBudgetsInput, {
    nullable: false,
  })
  engagement!: InstanceType<
    typeof EngagementCreateNestedOneWithoutBudgetsInput
  >;
}

@ArgsType()
export class BudgetGroupByArgs {
  @Field(() => BudgetWhereInput, { nullable: true })
  @Type(() => BudgetWhereInput)
  where?: InstanceType<typeof BudgetWhereInput>;
  @Field(() => [BudgetOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BudgetOrderByWithAggregationInput>;
  @Field(() => [BudgetScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BudgetScalarFieldEnum>;
  @Field(() => BudgetScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof BudgetScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BudgetCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BudgetCountAggregateInput>;
  @Field(() => BudgetAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BudgetAvgAggregateInput>;
  @Field(() => BudgetSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BudgetSumAggregateInput>;
  @Field(() => BudgetMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BudgetMinAggregateInput>;
  @Field(() => BudgetMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BudgetMaxAggregateInput>;
}

@ObjectType()
export class BudgetGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  engagementId!: string;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => Float, { nullable: false })
  amount!: number;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => BudgetCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BudgetCountAggregate>;
  @Field(() => BudgetAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof BudgetAvgAggregate>;
  @Field(() => BudgetSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof BudgetSumAggregate>;
  @Field(() => BudgetMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BudgetMinAggregate>;
  @Field(() => BudgetMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BudgetMaxAggregate>;
}

@InputType()
export class BudgetListRelationFilter {
  @Field(() => BudgetWhereInput, { nullable: true })
  every?: InstanceType<typeof BudgetWhereInput>;
  @Field(() => BudgetWhereInput, { nullable: true })
  some?: InstanceType<typeof BudgetWhereInput>;
  @Field(() => BudgetWhereInput, { nullable: true })
  none?: InstanceType<typeof BudgetWhereInput>;
}

@InputType()
export class BudgetMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  engagementId?: true;
  @Field(() => Boolean, { nullable: true })
  weekEnding?: true;
  @Field(() => Boolean, { nullable: true })
  amount?: true;
  @Field(() => Boolean, { nullable: true })
  phase?: true;
}

@ObjectType()
export class BudgetMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  engagementId?: string;
  @Field(() => Date, { nullable: true })
  weekEnding?: Date | string;
  @Field(() => Float, { nullable: true })
  amount?: number;
  @Field(() => String, { nullable: true })
  phase?: string;
}

@InputType()
export class BudgetMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
}

@InputType()
export class BudgetMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  engagementId?: true;
  @Field(() => Boolean, { nullable: true })
  weekEnding?: true;
  @Field(() => Boolean, { nullable: true })
  amount?: true;
  @Field(() => Boolean, { nullable: true })
  phase?: true;
}

@ObjectType()
export class BudgetMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  engagementId?: string;
  @Field(() => Date, { nullable: true })
  weekEnding?: Date | string;
  @Field(() => Float, { nullable: true })
  amount?: number;
  @Field(() => String, { nullable: true })
  phase?: string;
}

@InputType()
export class BudgetMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
}

@InputType()
export class BudgetOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class BudgetOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
  @Field(() => BudgetCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BudgetCountOrderByAggregateInput>;
  @Field(() => BudgetAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BudgetAvgOrderByAggregateInput>;
  @Field(() => BudgetMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BudgetMaxOrderByAggregateInput>;
  @Field(() => BudgetMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BudgetMinOrderByAggregateInput>;
  @Field(() => BudgetSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BudgetSumOrderByAggregateInput>;
}

@InputType()
export class BudgetOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
  @Field(() => EngagementOrderByWithRelationInput, { nullable: true })
  engagement?: InstanceType<typeof EngagementOrderByWithRelationInput>;
}

@InputType()
export class BudgetScalarWhereWithAggregatesInput {
  @Field(() => [BudgetScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BudgetScalarWhereWithAggregatesInput>;
  @Field(() => [BudgetScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BudgetScalarWhereWithAggregatesInput>;
  @Field(() => [BudgetScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BudgetScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  engagementId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  amount?: InstanceType<typeof FloatWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phase?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class BudgetScalarWhereInput {
  @Field(() => [BudgetScalarWhereInput], { nullable: true })
  AND?: Array<BudgetScalarWhereInput>;
  @Field(() => [BudgetScalarWhereInput], { nullable: true })
  OR?: Array<BudgetScalarWhereInput>;
  @Field(() => [BudgetScalarWhereInput], { nullable: true })
  NOT?: Array<BudgetScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  engagementId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFilter>;
  @Field(() => FloatFilter, { nullable: true })
  amount?: InstanceType<typeof FloatFilter>;
  @Field(() => StringFilter, { nullable: true })
  phase?: InstanceType<typeof StringFilter>;
}

@InputType()
export class BudgetSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  amount?: true;
}

@ObjectType()
export class BudgetSumAggregate {
  @Field(() => Float, { nullable: true })
  amount?: number;
}

@InputType()
export class BudgetSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
}

@InputType()
export class BudgetUncheckedCreateNestedManyWithoutEngagementInput {
  @Field(() => [BudgetCreateWithoutEngagementInput], { nullable: true })
  @Type(() => BudgetCreateWithoutEngagementInput)
  create?: Array<BudgetCreateWithoutEngagementInput>;
  @Field(() => [BudgetCreateOrConnectWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetCreateOrConnectWithoutEngagementInput)
  connectOrCreate?: Array<BudgetCreateOrConnectWithoutEngagementInput>;
  @Field(() => BudgetCreateManyEngagementInputEnvelope, { nullable: true })
  @Type(() => BudgetCreateManyEngagementInputEnvelope)
  createMany?: InstanceType<typeof BudgetCreateManyEngagementInputEnvelope>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
}

@InputType()
export class BudgetUncheckedCreateWithoutEngagementInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => Float, { nullable: false })
  amount!: number;
  @Field(() => String, { nullable: false })
  phase!: string;
}

@InputType()
export class BudgetUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  engagementId!: string;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => Float, { nullable: false })
  amount!: number;
  @Field(() => String, { nullable: false })
  phase!: string;
}

@InputType()
export class BudgetUncheckedUpdateManyWithoutEngagementNestedInput {
  @Field(() => [BudgetCreateWithoutEngagementInput], { nullable: true })
  @Type(() => BudgetCreateWithoutEngagementInput)
  create?: Array<BudgetCreateWithoutEngagementInput>;
  @Field(() => [BudgetCreateOrConnectWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetCreateOrConnectWithoutEngagementInput)
  connectOrCreate?: Array<BudgetCreateOrConnectWithoutEngagementInput>;
  @Field(() => [BudgetUpsertWithWhereUniqueWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetUpsertWithWhereUniqueWithoutEngagementInput)
  upsert?: Array<BudgetUpsertWithWhereUniqueWithoutEngagementInput>;
  @Field(() => BudgetCreateManyEngagementInputEnvelope, { nullable: true })
  @Type(() => BudgetCreateManyEngagementInputEnvelope)
  createMany?: InstanceType<typeof BudgetCreateManyEngagementInputEnvelope>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  set?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
  @Field(() => [BudgetUpdateWithWhereUniqueWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetUpdateWithWhereUniqueWithoutEngagementInput)
  update?: Array<BudgetUpdateWithWhereUniqueWithoutEngagementInput>;
  @Field(() => [BudgetUpdateManyWithWhereWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetUpdateManyWithWhereWithoutEngagementInput)
  updateMany?: Array<BudgetUpdateManyWithWhereWithoutEngagementInput>;
  @Field(() => [BudgetScalarWhereInput], { nullable: true })
  @Type(() => BudgetScalarWhereInput)
  deleteMany?: Array<BudgetScalarWhereInput>;
}

@InputType()
export class BudgetUncheckedUpdateManyWithoutEngagementInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class BudgetUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class BudgetUncheckedUpdateWithoutEngagementInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class BudgetUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class BudgetUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class BudgetUpdateManyWithWhereWithoutEngagementInput {
  @Field(() => BudgetScalarWhereInput, { nullable: false })
  @Type(() => BudgetScalarWhereInput)
  where!: InstanceType<typeof BudgetScalarWhereInput>;
  @Field(() => BudgetUpdateManyMutationInput, { nullable: false })
  @Type(() => BudgetUpdateManyMutationInput)
  data!: InstanceType<typeof BudgetUpdateManyMutationInput>;
}

@InputType()
export class BudgetUpdateManyWithoutEngagementNestedInput {
  @Field(() => [BudgetCreateWithoutEngagementInput], { nullable: true })
  @Type(() => BudgetCreateWithoutEngagementInput)
  create?: Array<BudgetCreateWithoutEngagementInput>;
  @Field(() => [BudgetCreateOrConnectWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetCreateOrConnectWithoutEngagementInput)
  connectOrCreate?: Array<BudgetCreateOrConnectWithoutEngagementInput>;
  @Field(() => [BudgetUpsertWithWhereUniqueWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetUpsertWithWhereUniqueWithoutEngagementInput)
  upsert?: Array<BudgetUpsertWithWhereUniqueWithoutEngagementInput>;
  @Field(() => BudgetCreateManyEngagementInputEnvelope, { nullable: true })
  @Type(() => BudgetCreateManyEngagementInputEnvelope)
  createMany?: InstanceType<typeof BudgetCreateManyEngagementInputEnvelope>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  set?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
  @Field(() => [BudgetWhereUniqueInput], { nullable: true })
  @Type(() => BudgetWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>>;
  @Field(() => [BudgetUpdateWithWhereUniqueWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetUpdateWithWhereUniqueWithoutEngagementInput)
  update?: Array<BudgetUpdateWithWhereUniqueWithoutEngagementInput>;
  @Field(() => [BudgetUpdateManyWithWhereWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => BudgetUpdateManyWithWhereWithoutEngagementInput)
  updateMany?: Array<BudgetUpdateManyWithWhereWithoutEngagementInput>;
  @Field(() => [BudgetScalarWhereInput], { nullable: true })
  @Type(() => BudgetScalarWhereInput)
  deleteMany?: Array<BudgetScalarWhereInput>;
}

@InputType()
export class BudgetUpdateWithWhereUniqueWithoutEngagementInput {
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  @Type(() => BudgetWhereUniqueInput)
  where!: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
  @Field(() => BudgetUpdateWithoutEngagementInput, { nullable: false })
  @Type(() => BudgetUpdateWithoutEngagementInput)
  data!: InstanceType<typeof BudgetUpdateWithoutEngagementInput>;
}

@InputType()
export class BudgetUpdateWithoutEngagementInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class BudgetUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EngagementUpdateOneRequiredWithoutBudgetsNestedInput, {
    nullable: true,
  })
  engagement?: InstanceType<
    typeof EngagementUpdateOneRequiredWithoutBudgetsNestedInput
  >;
}

@InputType()
export class BudgetUpsertWithWhereUniqueWithoutEngagementInput {
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  @Type(() => BudgetWhereUniqueInput)
  where!: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
  @Field(() => BudgetUpdateWithoutEngagementInput, { nullable: false })
  @Type(() => BudgetUpdateWithoutEngagementInput)
  update!: InstanceType<typeof BudgetUpdateWithoutEngagementInput>;
  @Field(() => BudgetCreateWithoutEngagementInput, { nullable: false })
  @Type(() => BudgetCreateWithoutEngagementInput)
  create!: InstanceType<typeof BudgetCreateWithoutEngagementInput>;
}

@InputType()
export class BudgetWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [BudgetWhereInput], { nullable: true })
  AND?: Array<BudgetWhereInput>;
  @Field(() => [BudgetWhereInput], { nullable: true })
  OR?: Array<BudgetWhereInput>;
  @Field(() => [BudgetWhereInput], { nullable: true })
  NOT?: Array<BudgetWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  engagementId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFilter>;
  @Field(() => FloatFilter, { nullable: true })
  amount?: InstanceType<typeof FloatFilter>;
  @Field(() => StringFilter, { nullable: true })
  phase?: InstanceType<typeof StringFilter>;
  @Field(() => EngagementRelationFilter, { nullable: true })
  engagement?: InstanceType<typeof EngagementRelationFilter>;
}

@InputType()
export class BudgetWhereInput {
  @Field(() => [BudgetWhereInput], { nullable: true })
  AND?: Array<BudgetWhereInput>;
  @Field(() => [BudgetWhereInput], { nullable: true })
  OR?: Array<BudgetWhereInput>;
  @Field(() => [BudgetWhereInput], { nullable: true })
  NOT?: Array<BudgetWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  engagementId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFilter>;
  @Field(() => FloatFilter, { nullable: true })
  amount?: InstanceType<typeof FloatFilter>;
  @Field(() => StringFilter, { nullable: true })
  phase?: InstanceType<typeof StringFilter>;
  @Field(() => EngagementRelationFilter, { nullable: true })
  engagement?: InstanceType<typeof EngagementRelationFilter>;
}

@ObjectType()
export class Budget {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  engagementId!: string;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date;
  @Field(() => Float, { nullable: false })
  amount!: number;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => Engagement, { nullable: false })
  engagement?: InstanceType<typeof Engagement>;
}

@ArgsType()
export class CreateManyBudgetArgs {
  @Field(() => [BudgetCreateManyInput], { nullable: false })
  @Type(() => BudgetCreateManyInput)
  data!: Array<BudgetCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBudgetArgs {
  @Field(() => BudgetCreateInput, { nullable: false })
  @Type(() => BudgetCreateInput)
  data!: InstanceType<typeof BudgetCreateInput>;
}

@ArgsType()
export class DeleteManyBudgetArgs {
  @Field(() => BudgetWhereInput, { nullable: true })
  @Type(() => BudgetWhereInput)
  where?: InstanceType<typeof BudgetWhereInput>;
}

@ArgsType()
export class DeleteOneBudgetArgs {
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  @Type(() => BudgetWhereUniqueInput)
  where!: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstBudgetOrThrowArgs {
  @Field(() => BudgetWhereInput, { nullable: true })
  @Type(() => BudgetWhereInput)
  where?: InstanceType<typeof BudgetWhereInput>;
  @Field(() => [BudgetOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BudgetOrderByWithRelationInput>;
  @Field(() => BudgetWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BudgetScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BudgetScalarFieldEnum>;
}

@ArgsType()
export class FindFirstBudgetArgs {
  @Field(() => BudgetWhereInput, { nullable: true })
  @Type(() => BudgetWhereInput)
  where?: InstanceType<typeof BudgetWhereInput>;
  @Field(() => [BudgetOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BudgetOrderByWithRelationInput>;
  @Field(() => BudgetWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BudgetScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BudgetScalarFieldEnum>;
}

@ArgsType()
export class FindManyBudgetArgs {
  @Field(() => BudgetWhereInput, { nullable: true })
  @Type(() => BudgetWhereInput)
  where?: InstanceType<typeof BudgetWhereInput>;
  @Field(() => [BudgetOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BudgetOrderByWithRelationInput>;
  @Field(() => BudgetWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BudgetScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BudgetScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBudgetOrThrowArgs {
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  @Type(() => BudgetWhereUniqueInput)
  where!: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueBudgetArgs {
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  @Type(() => BudgetWhereUniqueInput)
  where!: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyBudgetArgs {
  @Field(() => BudgetUpdateManyMutationInput, { nullable: false })
  @Type(() => BudgetUpdateManyMutationInput)
  data!: InstanceType<typeof BudgetUpdateManyMutationInput>;
  @Field(() => BudgetWhereInput, { nullable: true })
  @Type(() => BudgetWhereInput)
  where?: InstanceType<typeof BudgetWhereInput>;
}

@ArgsType()
export class UpdateOneBudgetArgs {
  @Field(() => BudgetUpdateInput, { nullable: false })
  @Type(() => BudgetUpdateInput)
  data!: InstanceType<typeof BudgetUpdateInput>;
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  @Type(() => BudgetWhereUniqueInput)
  where!: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneBudgetArgs {
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  @Type(() => BudgetWhereUniqueInput)
  where!: Prisma.AtLeast<BudgetWhereUniqueInput, 'id'>;
  @Field(() => BudgetCreateInput, { nullable: false })
  @Type(() => BudgetCreateInput)
  create!: InstanceType<typeof BudgetCreateInput>;
  @Field(() => BudgetUpdateInput, { nullable: false })
  @Type(() => BudgetUpdateInput)
  update!: InstanceType<typeof BudgetUpdateInput>;
}

@ObjectType()
export class AggregateEngagement {
  @Field(() => EngagementCountAggregate, { nullable: true })
  _count?: InstanceType<typeof EngagementCountAggregate>;
  @Field(() => EngagementMinAggregate, { nullable: true })
  _min?: InstanceType<typeof EngagementMinAggregate>;
  @Field(() => EngagementMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof EngagementMaxAggregate>;
}

@ArgsType()
export class CreateManyEngagementArgs {
  @Field(() => [EngagementCreateManyInput], { nullable: false })
  @Type(() => EngagementCreateManyInput)
  data!: Array<EngagementCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneEngagementArgs {
  @Field(() => EngagementCreateInput, { nullable: false })
  @Type(() => EngagementCreateInput)
  data!: InstanceType<typeof EngagementCreateInput>;
}

@ArgsType()
export class DeleteManyEngagementArgs {
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
}

@ArgsType()
export class DeleteOneEngagementArgs {
  @Field(() => EngagementWhereUniqueInput, { nullable: false })
  @Type(() => EngagementWhereUniqueInput)
  where!: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
}

@ArgsType()
export class EngagementAggregateArgs {
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
  @Field(() => [EngagementOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<EngagementOrderByWithRelationInput>;
  @Field(() => EngagementWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => EngagementCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof EngagementCountAggregateInput>;
  @Field(() => EngagementMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof EngagementMinAggregateInput>;
  @Field(() => EngagementMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof EngagementMaxAggregateInput>;
}

@InputType()
export class EngagementCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  engagementPartner?: true;
  @Field(() => Boolean, { nullable: true })
  engagementManager?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class EngagementCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  engagementPartner!: number;
  @Field(() => Int, { nullable: false })
  engagementManager!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class EngagementCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementPartner?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementManager?: keyof typeof SortOrder;
}

@ObjectType()
export class EngagementCount {
  @Field(() => Int, { nullable: false })
  budgets?: number;
  @Field(() => Int, { nullable: false })
  timesheetEntries?: number;
}

@InputType()
export class EngagementCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
}

@InputType()
export class EngagementCreateNestedOneWithoutBudgetsInput {
  @Field(() => EngagementCreateWithoutBudgetsInput, { nullable: true })
  @Type(() => EngagementCreateWithoutBudgetsInput)
  create?: InstanceType<typeof EngagementCreateWithoutBudgetsInput>;
  @Field(() => EngagementCreateOrConnectWithoutBudgetsInput, { nullable: true })
  @Type(() => EngagementCreateOrConnectWithoutBudgetsInput)
  connectOrCreate?: InstanceType<
    typeof EngagementCreateOrConnectWithoutBudgetsInput
  >;
  @Field(() => EngagementWhereUniqueInput, { nullable: true })
  @Type(() => EngagementWhereUniqueInput)
  connect?: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
}

@InputType()
export class EngagementCreateNestedOneWithoutTimesheetEntriesInput {
  @Field(() => EngagementCreateWithoutTimesheetEntriesInput, { nullable: true })
  @Type(() => EngagementCreateWithoutTimesheetEntriesInput)
  create?: InstanceType<typeof EngagementCreateWithoutTimesheetEntriesInput>;
  @Field(() => EngagementCreateOrConnectWithoutTimesheetEntriesInput, {
    nullable: true,
  })
  @Type(() => EngagementCreateOrConnectWithoutTimesheetEntriesInput)
  connectOrCreate?: InstanceType<
    typeof EngagementCreateOrConnectWithoutTimesheetEntriesInput
  >;
  @Field(() => EngagementWhereUniqueInput, { nullable: true })
  @Type(() => EngagementWhereUniqueInput)
  connect?: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
}

@InputType()
export class EngagementCreateOrConnectWithoutBudgetsInput {
  @Field(() => EngagementWhereUniqueInput, { nullable: false })
  @Type(() => EngagementWhereUniqueInput)
  where!: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => EngagementCreateWithoutBudgetsInput, { nullable: false })
  @Type(() => EngagementCreateWithoutBudgetsInput)
  create!: InstanceType<typeof EngagementCreateWithoutBudgetsInput>;
}

@InputType()
export class EngagementCreateOrConnectWithoutTimesheetEntriesInput {
  @Field(() => EngagementWhereUniqueInput, { nullable: false })
  @Type(() => EngagementWhereUniqueInput)
  where!: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => EngagementCreateWithoutTimesheetEntriesInput, {
    nullable: false,
  })
  @Type(() => EngagementCreateWithoutTimesheetEntriesInput)
  create!: InstanceType<typeof EngagementCreateWithoutTimesheetEntriesInput>;
}

@InputType()
export class EngagementCreateWithoutBudgetsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
  @Field(() => TimesheetEntryCreateNestedManyWithoutEngagementInput, {
    nullable: true,
  })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryCreateNestedManyWithoutEngagementInput
  >;
}

@InputType()
export class EngagementCreateWithoutTimesheetEntriesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
  @Field(() => BudgetCreateNestedManyWithoutEngagementInput, { nullable: true })
  budgets?: InstanceType<typeof BudgetCreateNestedManyWithoutEngagementInput>;
}

@InputType()
export class EngagementCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
  @Field(() => BudgetCreateNestedManyWithoutEngagementInput, { nullable: true })
  budgets?: InstanceType<typeof BudgetCreateNestedManyWithoutEngagementInput>;
  @Field(() => TimesheetEntryCreateNestedManyWithoutEngagementInput, {
    nullable: true,
  })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryCreateNestedManyWithoutEngagementInput
  >;
}

@ArgsType()
export class EngagementGroupByArgs {
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
  @Field(() => [EngagementOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<EngagementOrderByWithAggregationInput>;
  @Field(() => [EngagementScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof EngagementScalarFieldEnum>;
  @Field(() => EngagementScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof EngagementScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => EngagementCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof EngagementCountAggregateInput>;
  @Field(() => EngagementMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof EngagementMinAggregateInput>;
  @Field(() => EngagementMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof EngagementMaxAggregateInput>;
}

@ObjectType()
export class EngagementGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
  @Field(() => EngagementCountAggregate, { nullable: true })
  _count?: InstanceType<typeof EngagementCountAggregate>;
  @Field(() => EngagementMinAggregate, { nullable: true })
  _min?: InstanceType<typeof EngagementMinAggregate>;
  @Field(() => EngagementMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof EngagementMaxAggregate>;
}

@InputType()
export class EngagementMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  engagementPartner?: true;
  @Field(() => Boolean, { nullable: true })
  engagementManager?: true;
}

@ObjectType()
export class EngagementMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  engagementPartner?: string;
  @Field(() => String, { nullable: true })
  engagementManager?: string;
}

@InputType()
export class EngagementMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementPartner?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementManager?: keyof typeof SortOrder;
}

@InputType()
export class EngagementMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  engagementPartner?: true;
  @Field(() => Boolean, { nullable: true })
  engagementManager?: true;
}

@ObjectType()
export class EngagementMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  engagementPartner?: string;
  @Field(() => String, { nullable: true })
  engagementManager?: string;
}

@InputType()
export class EngagementMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementPartner?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementManager?: keyof typeof SortOrder;
}

@InputType()
export class EngagementOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementPartner?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementManager?: keyof typeof SortOrder;
  @Field(() => EngagementCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof EngagementCountOrderByAggregateInput>;
  @Field(() => EngagementMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof EngagementMaxOrderByAggregateInput>;
  @Field(() => EngagementMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof EngagementMinOrderByAggregateInput>;
}

@InputType()
export class EngagementOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementPartner?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementManager?: keyof typeof SortOrder;
  @Field(() => BudgetOrderByRelationAggregateInput, { nullable: true })
  budgets?: InstanceType<typeof BudgetOrderByRelationAggregateInput>;
  @Field(() => TimesheetEntryOrderByRelationAggregateInput, { nullable: true })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryOrderByRelationAggregateInput
  >;
}

@InputType()
export class EngagementRelationFilter {
  @Field(() => EngagementWhereInput, { nullable: true })
  is?: InstanceType<typeof EngagementWhereInput>;
  @Field(() => EngagementWhereInput, { nullable: true })
  isNot?: InstanceType<typeof EngagementWhereInput>;
}

@InputType()
export class EngagementScalarWhereWithAggregatesInput {
  @Field(() => [EngagementScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<EngagementScalarWhereWithAggregatesInput>;
  @Field(() => [EngagementScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<EngagementScalarWhereWithAggregatesInput>;
  @Field(() => [EngagementScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<EngagementScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  engagementPartner?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  engagementManager?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class EngagementUncheckedCreateWithoutBudgetsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
  @Field(() => TimesheetEntryUncheckedCreateNestedManyWithoutEngagementInput, {
    nullable: true,
  })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryUncheckedCreateNestedManyWithoutEngagementInput
  >;
}

@InputType()
export class EngagementUncheckedCreateWithoutTimesheetEntriesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
  @Field(() => BudgetUncheckedCreateNestedManyWithoutEngagementInput, {
    nullable: true,
  })
  budgets?: InstanceType<
    typeof BudgetUncheckedCreateNestedManyWithoutEngagementInput
  >;
}

@InputType()
export class EngagementUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
  @Field(() => BudgetUncheckedCreateNestedManyWithoutEngagementInput, {
    nullable: true,
  })
  budgets?: InstanceType<
    typeof BudgetUncheckedCreateNestedManyWithoutEngagementInput
  >;
  @Field(() => TimesheetEntryUncheckedCreateNestedManyWithoutEngagementInput, {
    nullable: true,
  })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryUncheckedCreateNestedManyWithoutEngagementInput
  >;
}

@InputType()
export class EngagementUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementManager?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class EngagementUncheckedUpdateWithoutBudgetsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementManager?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TimesheetEntryUncheckedUpdateManyWithoutEngagementNestedInput, {
    nullable: true,
  })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryUncheckedUpdateManyWithoutEngagementNestedInput
  >;
}

@InputType()
export class EngagementUncheckedUpdateWithoutTimesheetEntriesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementManager?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BudgetUncheckedUpdateManyWithoutEngagementNestedInput, {
    nullable: true,
  })
  budgets?: InstanceType<
    typeof BudgetUncheckedUpdateManyWithoutEngagementNestedInput
  >;
}

@InputType()
export class EngagementUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementManager?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BudgetUncheckedUpdateManyWithoutEngagementNestedInput, {
    nullable: true,
  })
  budgets?: InstanceType<
    typeof BudgetUncheckedUpdateManyWithoutEngagementNestedInput
  >;
  @Field(() => TimesheetEntryUncheckedUpdateManyWithoutEngagementNestedInput, {
    nullable: true,
  })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryUncheckedUpdateManyWithoutEngagementNestedInput
  >;
}

@InputType()
export class EngagementUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementManager?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class EngagementUpdateOneRequiredWithoutBudgetsNestedInput {
  @Field(() => EngagementCreateWithoutBudgetsInput, { nullable: true })
  @Type(() => EngagementCreateWithoutBudgetsInput)
  create?: InstanceType<typeof EngagementCreateWithoutBudgetsInput>;
  @Field(() => EngagementCreateOrConnectWithoutBudgetsInput, { nullable: true })
  @Type(() => EngagementCreateOrConnectWithoutBudgetsInput)
  connectOrCreate?: InstanceType<
    typeof EngagementCreateOrConnectWithoutBudgetsInput
  >;
  @Field(() => EngagementUpsertWithoutBudgetsInput, { nullable: true })
  @Type(() => EngagementUpsertWithoutBudgetsInput)
  upsert?: InstanceType<typeof EngagementUpsertWithoutBudgetsInput>;
  @Field(() => EngagementWhereUniqueInput, { nullable: true })
  @Type(() => EngagementWhereUniqueInput)
  connect?: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => EngagementUpdateToOneWithWhereWithoutBudgetsInput, {
    nullable: true,
  })
  @Type(() => EngagementUpdateToOneWithWhereWithoutBudgetsInput)
  update?: InstanceType<
    typeof EngagementUpdateToOneWithWhereWithoutBudgetsInput
  >;
}

@InputType()
export class EngagementUpdateOneRequiredWithoutTimesheetEntriesNestedInput {
  @Field(() => EngagementCreateWithoutTimesheetEntriesInput, { nullable: true })
  @Type(() => EngagementCreateWithoutTimesheetEntriesInput)
  create?: InstanceType<typeof EngagementCreateWithoutTimesheetEntriesInput>;
  @Field(() => EngagementCreateOrConnectWithoutTimesheetEntriesInput, {
    nullable: true,
  })
  @Type(() => EngagementCreateOrConnectWithoutTimesheetEntriesInput)
  connectOrCreate?: InstanceType<
    typeof EngagementCreateOrConnectWithoutTimesheetEntriesInput
  >;
  @Field(() => EngagementUpsertWithoutTimesheetEntriesInput, { nullable: true })
  @Type(() => EngagementUpsertWithoutTimesheetEntriesInput)
  upsert?: InstanceType<typeof EngagementUpsertWithoutTimesheetEntriesInput>;
  @Field(() => EngagementWhereUniqueInput, { nullable: true })
  @Type(() => EngagementWhereUniqueInput)
  connect?: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => EngagementUpdateToOneWithWhereWithoutTimesheetEntriesInput, {
    nullable: true,
  })
  @Type(() => EngagementUpdateToOneWithWhereWithoutTimesheetEntriesInput)
  update?: InstanceType<
    typeof EngagementUpdateToOneWithWhereWithoutTimesheetEntriesInput
  >;
}

@InputType()
export class EngagementUpdateToOneWithWhereWithoutBudgetsInput {
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
  @Field(() => EngagementUpdateWithoutBudgetsInput, { nullable: false })
  @Type(() => EngagementUpdateWithoutBudgetsInput)
  data!: InstanceType<typeof EngagementUpdateWithoutBudgetsInput>;
}

@InputType()
export class EngagementUpdateToOneWithWhereWithoutTimesheetEntriesInput {
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
  @Field(() => EngagementUpdateWithoutTimesheetEntriesInput, {
    nullable: false,
  })
  @Type(() => EngagementUpdateWithoutTimesheetEntriesInput)
  data!: InstanceType<typeof EngagementUpdateWithoutTimesheetEntriesInput>;
}

@InputType()
export class EngagementUpdateWithoutBudgetsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementManager?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TimesheetEntryUpdateManyWithoutEngagementNestedInput, {
    nullable: true,
  })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryUpdateManyWithoutEngagementNestedInput
  >;
}

@InputType()
export class EngagementUpdateWithoutTimesheetEntriesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementManager?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BudgetUpdateManyWithoutEngagementNestedInput, { nullable: true })
  budgets?: InstanceType<typeof BudgetUpdateManyWithoutEngagementNestedInput>;
}

@InputType()
export class EngagementUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementManager?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BudgetUpdateManyWithoutEngagementNestedInput, { nullable: true })
  budgets?: InstanceType<typeof BudgetUpdateManyWithoutEngagementNestedInput>;
  @Field(() => TimesheetEntryUpdateManyWithoutEngagementNestedInput, {
    nullable: true,
  })
  timesheetEntries?: InstanceType<
    typeof TimesheetEntryUpdateManyWithoutEngagementNestedInput
  >;
}

@InputType()
export class EngagementUpsertWithoutBudgetsInput {
  @Field(() => EngagementUpdateWithoutBudgetsInput, { nullable: false })
  @Type(() => EngagementUpdateWithoutBudgetsInput)
  update!: InstanceType<typeof EngagementUpdateWithoutBudgetsInput>;
  @Field(() => EngagementCreateWithoutBudgetsInput, { nullable: false })
  @Type(() => EngagementCreateWithoutBudgetsInput)
  create!: InstanceType<typeof EngagementCreateWithoutBudgetsInput>;
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
}

@InputType()
export class EngagementUpsertWithoutTimesheetEntriesInput {
  @Field(() => EngagementUpdateWithoutTimesheetEntriesInput, {
    nullable: false,
  })
  @Type(() => EngagementUpdateWithoutTimesheetEntriesInput)
  update!: InstanceType<typeof EngagementUpdateWithoutTimesheetEntriesInput>;
  @Field(() => EngagementCreateWithoutTimesheetEntriesInput, {
    nullable: false,
  })
  @Type(() => EngagementCreateWithoutTimesheetEntriesInput)
  create!: InstanceType<typeof EngagementCreateWithoutTimesheetEntriesInput>;
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
}

@InputType()
export class EngagementWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [EngagementWhereInput], { nullable: true })
  AND?: Array<EngagementWhereInput>;
  @Field(() => [EngagementWhereInput], { nullable: true })
  OR?: Array<EngagementWhereInput>;
  @Field(() => [EngagementWhereInput], { nullable: true })
  NOT?: Array<EngagementWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  engagementManager?: InstanceType<typeof StringFilter>;
  @Field(() => BudgetListRelationFilter, { nullable: true })
  budgets?: InstanceType<typeof BudgetListRelationFilter>;
  @Field(() => TimesheetEntryListRelationFilter, { nullable: true })
  timesheetEntries?: InstanceType<typeof TimesheetEntryListRelationFilter>;
}

@InputType()
export class EngagementWhereInput {
  @Field(() => [EngagementWhereInput], { nullable: true })
  AND?: Array<EngagementWhereInput>;
  @Field(() => [EngagementWhereInput], { nullable: true })
  OR?: Array<EngagementWhereInput>;
  @Field(() => [EngagementWhereInput], { nullable: true })
  NOT?: Array<EngagementWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  engagementPartner?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  engagementManager?: InstanceType<typeof StringFilter>;
  @Field(() => BudgetListRelationFilter, { nullable: true })
  budgets?: InstanceType<typeof BudgetListRelationFilter>;
  @Field(() => TimesheetEntryListRelationFilter, { nullable: true })
  timesheetEntries?: InstanceType<typeof TimesheetEntryListRelationFilter>;
}

@ObjectType()
export class Engagement {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  engagementPartner!: string;
  @Field(() => String, { nullable: false })
  engagementManager!: string;
  @Field(() => [Budget], { nullable: true })
  budgets?: Array<Budget>;
  @Field(() => [TimesheetEntry], { nullable: true })
  timesheetEntries?: Array<TimesheetEntry>;
  @Field(() => EngagementCount, { nullable: false })
  _count?: InstanceType<typeof EngagementCount>;
}

@ArgsType()
export class FindFirstEngagementOrThrowArgs {
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
  @Field(() => [EngagementOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<EngagementOrderByWithRelationInput>;
  @Field(() => EngagementWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [EngagementScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof EngagementScalarFieldEnum>;
}

@ArgsType()
export class FindFirstEngagementArgs {
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
  @Field(() => [EngagementOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<EngagementOrderByWithRelationInput>;
  @Field(() => EngagementWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [EngagementScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof EngagementScalarFieldEnum>;
}

@ArgsType()
export class FindManyEngagementArgs {
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
  @Field(() => [EngagementOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<EngagementOrderByWithRelationInput>;
  @Field(() => EngagementWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [EngagementScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof EngagementScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueEngagementOrThrowArgs {
  @Field(() => EngagementWhereUniqueInput, { nullable: false })
  @Type(() => EngagementWhereUniqueInput)
  where!: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueEngagementArgs {
  @Field(() => EngagementWhereUniqueInput, { nullable: false })
  @Type(() => EngagementWhereUniqueInput)
  where!: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyEngagementArgs {
  @Field(() => EngagementUpdateManyMutationInput, { nullable: false })
  @Type(() => EngagementUpdateManyMutationInput)
  data!: InstanceType<typeof EngagementUpdateManyMutationInput>;
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: InstanceType<typeof EngagementWhereInput>;
}

@ArgsType()
export class UpdateOneEngagementArgs {
  @Field(() => EngagementUpdateInput, { nullable: false })
  @Type(() => EngagementUpdateInput)
  data!: InstanceType<typeof EngagementUpdateInput>;
  @Field(() => EngagementWhereUniqueInput, { nullable: false })
  @Type(() => EngagementWhereUniqueInput)
  where!: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneEngagementArgs {
  @Field(() => EngagementWhereUniqueInput, { nullable: false })
  @Type(() => EngagementWhereUniqueInput)
  where!: Prisma.AtLeast<EngagementWhereUniqueInput, 'id'>;
  @Field(() => EngagementCreateInput, { nullable: false })
  @Type(() => EngagementCreateInput)
  create!: InstanceType<typeof EngagementCreateInput>;
  @Field(() => EngagementUpdateInput, { nullable: false })
  @Type(() => EngagementUpdateInput)
  update!: InstanceType<typeof EngagementUpdateInput>;
}

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class DateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class FloatFieldUpdateOperationsInput {
  @Field(() => Float, { nullable: true })
  set?: number;
  @Field(() => Float, { nullable: true })
  increment?: number;
  @Field(() => Float, { nullable: true })
  decrement?: number;
  @Field(() => Float, { nullable: true })
  multiply?: number;
  @Field(() => Float, { nullable: true })
  divide?: number;
}

@InputType()
export class FloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _min?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedDateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedFloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatWithAggregatesFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _min?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateTimesheetEntry {
  @Field(() => TimesheetEntryCountAggregate, { nullable: true })
  _count?: InstanceType<typeof TimesheetEntryCountAggregate>;
  @Field(() => TimesheetEntryAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof TimesheetEntryAvgAggregate>;
  @Field(() => TimesheetEntrySumAggregate, { nullable: true })
  _sum?: InstanceType<typeof TimesheetEntrySumAggregate>;
  @Field(() => TimesheetEntryMinAggregate, { nullable: true })
  _min?: InstanceType<typeof TimesheetEntryMinAggregate>;
  @Field(() => TimesheetEntryMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof TimesheetEntryMaxAggregate>;
}

@ArgsType()
export class CreateManyTimesheetEntryArgs {
  @Field(() => [TimesheetEntryCreateManyInput], { nullable: false })
  @Type(() => TimesheetEntryCreateManyInput)
  data!: Array<TimesheetEntryCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTimesheetEntryArgs {
  @Field(() => TimesheetEntryCreateInput, { nullable: false })
  @Type(() => TimesheetEntryCreateInput)
  data!: InstanceType<typeof TimesheetEntryCreateInput>;
}

@ArgsType()
export class DeleteManyTimesheetEntryArgs {
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  @Type(() => TimesheetEntryWhereInput)
  where?: InstanceType<typeof TimesheetEntryWhereInput>;
}

@ArgsType()
export class DeleteOneTimesheetEntryArgs {
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: false })
  @Type(() => TimesheetEntryWhereUniqueInput)
  where!: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstTimesheetEntryOrThrowArgs {
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  @Type(() => TimesheetEntryWhereInput)
  where?: InstanceType<typeof TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TimesheetEntryOrderByWithRelationInput>;
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TimesheetEntryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TimesheetEntryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstTimesheetEntryArgs {
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  @Type(() => TimesheetEntryWhereInput)
  where?: InstanceType<typeof TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TimesheetEntryOrderByWithRelationInput>;
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TimesheetEntryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TimesheetEntryScalarFieldEnum>;
}

@ArgsType()
export class FindManyTimesheetEntryArgs {
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  @Type(() => TimesheetEntryWhereInput)
  where?: InstanceType<typeof TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TimesheetEntryOrderByWithRelationInput>;
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TimesheetEntryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TimesheetEntryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTimesheetEntryOrThrowArgs {
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: false })
  @Type(() => TimesheetEntryWhereUniqueInput)
  where!: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueTimesheetEntryArgs {
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: false })
  @Type(() => TimesheetEntryWhereUniqueInput)
  where!: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class TimesheetEntryAggregateArgs {
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  @Type(() => TimesheetEntryWhereInput)
  where?: InstanceType<typeof TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TimesheetEntryOrderByWithRelationInput>;
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => TimesheetEntryCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TimesheetEntryCountAggregateInput>;
  @Field(() => TimesheetEntryAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof TimesheetEntryAvgAggregateInput>;
  @Field(() => TimesheetEntrySumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof TimesheetEntrySumAggregateInput>;
  @Field(() => TimesheetEntryMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TimesheetEntryMinAggregateInput>;
  @Field(() => TimesheetEntryMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TimesheetEntryMaxAggregateInput>;
}

@InputType()
export class TimesheetEntryAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  hourlyRate?: true;
  @Field(() => Boolean, { nullable: true })
  hoursWorked?: true;
}

@ObjectType()
export class TimesheetEntryAvgAggregate {
  @Field(() => Float, { nullable: true })
  hourlyRate?: number;
  @Field(() => Float, { nullable: true })
  hoursWorked?: number;
}

@InputType()
export class TimesheetEntryAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  hourlyRate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hoursWorked?: keyof typeof SortOrder;
}

@InputType()
export class TimesheetEntryCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  engagementId?: true;
  @Field(() => Boolean, { nullable: true })
  hourlyRate?: true;
  @Field(() => Boolean, { nullable: true })
  hoursWorked?: true;
  @Field(() => Boolean, { nullable: true })
  weekEnding?: true;
  @Field(() => Boolean, { nullable: true })
  phase?: true;
  @Field(() => Boolean, { nullable: true })
  employeeName?: true;
  @Field(() => Boolean, { nullable: true })
  employeeTitle?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class TimesheetEntryCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  engagementId!: number;
  @Field(() => Int, { nullable: false })
  hourlyRate!: number;
  @Field(() => Int, { nullable: false })
  hoursWorked!: number;
  @Field(() => Int, { nullable: false })
  weekEnding!: number;
  @Field(() => Int, { nullable: false })
  phase!: number;
  @Field(() => Int, { nullable: false })
  employeeName!: number;
  @Field(() => Int, { nullable: false })
  employeeTitle!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class TimesheetEntryCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourlyRate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hoursWorked?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeTitle?: keyof typeof SortOrder;
}

@InputType()
export class TimesheetEntryCreateManyEngagementInputEnvelope {
  @Field(() => [TimesheetEntryCreateManyEngagementInput], { nullable: false })
  @Type(() => TimesheetEntryCreateManyEngagementInput)
  data!: Array<TimesheetEntryCreateManyEngagementInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class TimesheetEntryCreateManyEngagementInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Float, { nullable: false })
  hourlyRate!: number;
  @Field(() => Float, { nullable: false })
  hoursWorked!: number;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => String, { nullable: false })
  employeeName!: string;
  @Field(() => String, { nullable: false })
  employeeTitle!: string;
}

@InputType()
export class TimesheetEntryCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  engagementId!: string;
  @Field(() => Float, { nullable: false })
  hourlyRate!: number;
  @Field(() => Float, { nullable: false })
  hoursWorked!: number;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => String, { nullable: false })
  employeeName!: string;
  @Field(() => String, { nullable: false })
  employeeTitle!: string;
}

@InputType()
export class TimesheetEntryCreateNestedManyWithoutEngagementInput {
  @Field(() => [TimesheetEntryCreateWithoutEngagementInput], { nullable: true })
  @Type(() => TimesheetEntryCreateWithoutEngagementInput)
  create?: Array<TimesheetEntryCreateWithoutEngagementInput>;
  @Field(() => [TimesheetEntryCreateOrConnectWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryCreateOrConnectWithoutEngagementInput)
  connectOrCreate?: Array<TimesheetEntryCreateOrConnectWithoutEngagementInput>;
  @Field(() => TimesheetEntryCreateManyEngagementInputEnvelope, {
    nullable: true,
  })
  @Type(() => TimesheetEntryCreateManyEngagementInputEnvelope)
  createMany?: InstanceType<
    typeof TimesheetEntryCreateManyEngagementInputEnvelope
  >;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class TimesheetEntryCreateOrConnectWithoutEngagementInput {
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: false })
  @Type(() => TimesheetEntryWhereUniqueInput)
  where!: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
  @Field(() => TimesheetEntryCreateWithoutEngagementInput, { nullable: false })
  @Type(() => TimesheetEntryCreateWithoutEngagementInput)
  create!: InstanceType<typeof TimesheetEntryCreateWithoutEngagementInput>;
}

@InputType()
export class TimesheetEntryCreateWithoutEngagementInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Float, { nullable: false })
  hourlyRate!: number;
  @Field(() => Float, { nullable: false })
  hoursWorked!: number;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => String, { nullable: false })
  employeeName!: string;
  @Field(() => String, { nullable: false })
  employeeTitle!: string;
}

@InputType()
export class TimesheetEntryCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Float, { nullable: false })
  hourlyRate!: number;
  @Field(() => Float, { nullable: false })
  hoursWorked!: number;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => String, { nullable: false })
  employeeName!: string;
  @Field(() => String, { nullable: false })
  employeeTitle!: string;
  @Field(() => EngagementCreateNestedOneWithoutTimesheetEntriesInput, {
    nullable: false,
  })
  engagement!: InstanceType<
    typeof EngagementCreateNestedOneWithoutTimesheetEntriesInput
  >;
}

@ArgsType()
export class TimesheetEntryGroupByArgs {
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  @Type(() => TimesheetEntryWhereInput)
  where?: InstanceType<typeof TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<TimesheetEntryOrderByWithAggregationInput>;
  @Field(() => [TimesheetEntryScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof TimesheetEntryScalarFieldEnum>;
  @Field(() => TimesheetEntryScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof TimesheetEntryScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => TimesheetEntryCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TimesheetEntryCountAggregateInput>;
  @Field(() => TimesheetEntryAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof TimesheetEntryAvgAggregateInput>;
  @Field(() => TimesheetEntrySumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof TimesheetEntrySumAggregateInput>;
  @Field(() => TimesheetEntryMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TimesheetEntryMinAggregateInput>;
  @Field(() => TimesheetEntryMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TimesheetEntryMaxAggregateInput>;
}

@ObjectType()
export class TimesheetEntryGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  engagementId!: string;
  @Field(() => Float, { nullable: false })
  hourlyRate!: number;
  @Field(() => Float, { nullable: false })
  hoursWorked!: number;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => String, { nullable: false })
  employeeName!: string;
  @Field(() => String, { nullable: false })
  employeeTitle!: string;
  @Field(() => TimesheetEntryCountAggregate, { nullable: true })
  _count?: InstanceType<typeof TimesheetEntryCountAggregate>;
  @Field(() => TimesheetEntryAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof TimesheetEntryAvgAggregate>;
  @Field(() => TimesheetEntrySumAggregate, { nullable: true })
  _sum?: InstanceType<typeof TimesheetEntrySumAggregate>;
  @Field(() => TimesheetEntryMinAggregate, { nullable: true })
  _min?: InstanceType<typeof TimesheetEntryMinAggregate>;
  @Field(() => TimesheetEntryMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof TimesheetEntryMaxAggregate>;
}

@InputType()
export class TimesheetEntryListRelationFilter {
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  every?: InstanceType<typeof TimesheetEntryWhereInput>;
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  some?: InstanceType<typeof TimesheetEntryWhereInput>;
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  none?: InstanceType<typeof TimesheetEntryWhereInput>;
}

@InputType()
export class TimesheetEntryMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  engagementId?: true;
  @Field(() => Boolean, { nullable: true })
  hourlyRate?: true;
  @Field(() => Boolean, { nullable: true })
  hoursWorked?: true;
  @Field(() => Boolean, { nullable: true })
  weekEnding?: true;
  @Field(() => Boolean, { nullable: true })
  phase?: true;
  @Field(() => Boolean, { nullable: true })
  employeeName?: true;
  @Field(() => Boolean, { nullable: true })
  employeeTitle?: true;
}

@ObjectType()
export class TimesheetEntryMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  engagementId?: string;
  @Field(() => Float, { nullable: true })
  hourlyRate?: number;
  @Field(() => Float, { nullable: true })
  hoursWorked?: number;
  @Field(() => Date, { nullable: true })
  weekEnding?: Date | string;
  @Field(() => String, { nullable: true })
  phase?: string;
  @Field(() => String, { nullable: true })
  employeeName?: string;
  @Field(() => String, { nullable: true })
  employeeTitle?: string;
}

@InputType()
export class TimesheetEntryMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourlyRate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hoursWorked?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeTitle?: keyof typeof SortOrder;
}

@InputType()
export class TimesheetEntryMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  engagementId?: true;
  @Field(() => Boolean, { nullable: true })
  hourlyRate?: true;
  @Field(() => Boolean, { nullable: true })
  hoursWorked?: true;
  @Field(() => Boolean, { nullable: true })
  weekEnding?: true;
  @Field(() => Boolean, { nullable: true })
  phase?: true;
  @Field(() => Boolean, { nullable: true })
  employeeName?: true;
  @Field(() => Boolean, { nullable: true })
  employeeTitle?: true;
}

@ObjectType()
export class TimesheetEntryMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  engagementId?: string;
  @Field(() => Float, { nullable: true })
  hourlyRate?: number;
  @Field(() => Float, { nullable: true })
  hoursWorked?: number;
  @Field(() => Date, { nullable: true })
  weekEnding?: Date | string;
  @Field(() => String, { nullable: true })
  phase?: string;
  @Field(() => String, { nullable: true })
  employeeName?: string;
  @Field(() => String, { nullable: true })
  employeeTitle?: string;
}

@InputType()
export class TimesheetEntryMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourlyRate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hoursWorked?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeTitle?: keyof typeof SortOrder;
}

@InputType()
export class TimesheetEntryOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class TimesheetEntryOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourlyRate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hoursWorked?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeTitle?: keyof typeof SortOrder;
  @Field(() => TimesheetEntryCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TimesheetEntryCountOrderByAggregateInput>;
  @Field(() => TimesheetEntryAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof TimesheetEntryAvgOrderByAggregateInput>;
  @Field(() => TimesheetEntryMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TimesheetEntryMaxOrderByAggregateInput>;
  @Field(() => TimesheetEntryMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TimesheetEntryMinOrderByAggregateInput>;
  @Field(() => TimesheetEntrySumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof TimesheetEntrySumOrderByAggregateInput>;
}

@InputType()
export class TimesheetEntryOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  engagementId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourlyRate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hoursWorked?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weekEnding?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phase?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  employeeTitle?: keyof typeof SortOrder;
  @Field(() => EngagementOrderByWithRelationInput, { nullable: true })
  engagement?: InstanceType<typeof EngagementOrderByWithRelationInput>;
}

@InputType()
export class TimesheetEntryScalarWhereWithAggregatesInput {
  @Field(() => [TimesheetEntryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<TimesheetEntryScalarWhereWithAggregatesInput>;
  @Field(() => [TimesheetEntryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<TimesheetEntryScalarWhereWithAggregatesInput>;
  @Field(() => [TimesheetEntryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<TimesheetEntryScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  engagementId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatWithAggregatesFilter>;
  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phase?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  employeeName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  employeeTitle?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class TimesheetEntryScalarWhereInput {
  @Field(() => [TimesheetEntryScalarWhereInput], { nullable: true })
  AND?: Array<TimesheetEntryScalarWhereInput>;
  @Field(() => [TimesheetEntryScalarWhereInput], { nullable: true })
  OR?: Array<TimesheetEntryScalarWhereInput>;
  @Field(() => [TimesheetEntryScalarWhereInput], { nullable: true })
  NOT?: Array<TimesheetEntryScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  engagementId?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  phase?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  employeeName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFilter>;
}

@InputType()
export class TimesheetEntrySumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  hourlyRate?: true;
  @Field(() => Boolean, { nullable: true })
  hoursWorked?: true;
}

@ObjectType()
export class TimesheetEntrySumAggregate {
  @Field(() => Float, { nullable: true })
  hourlyRate?: number;
  @Field(() => Float, { nullable: true })
  hoursWorked?: number;
}

@InputType()
export class TimesheetEntrySumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  hourlyRate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hoursWorked?: keyof typeof SortOrder;
}

@InputType()
export class TimesheetEntryUncheckedCreateNestedManyWithoutEngagementInput {
  @Field(() => [TimesheetEntryCreateWithoutEngagementInput], { nullable: true })
  @Type(() => TimesheetEntryCreateWithoutEngagementInput)
  create?: Array<TimesheetEntryCreateWithoutEngagementInput>;
  @Field(() => [TimesheetEntryCreateOrConnectWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryCreateOrConnectWithoutEngagementInput)
  connectOrCreate?: Array<TimesheetEntryCreateOrConnectWithoutEngagementInput>;
  @Field(() => TimesheetEntryCreateManyEngagementInputEnvelope, {
    nullable: true,
  })
  @Type(() => TimesheetEntryCreateManyEngagementInputEnvelope)
  createMany?: InstanceType<
    typeof TimesheetEntryCreateManyEngagementInputEnvelope
  >;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class TimesheetEntryUncheckedCreateWithoutEngagementInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Float, { nullable: false })
  hourlyRate!: number;
  @Field(() => Float, { nullable: false })
  hoursWorked!: number;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => String, { nullable: false })
  employeeName!: string;
  @Field(() => String, { nullable: false })
  employeeTitle!: string;
}

@InputType()
export class TimesheetEntryUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  engagementId!: string;
  @Field(() => Float, { nullable: false })
  hourlyRate!: number;
  @Field(() => Float, { nullable: false })
  hoursWorked!: number;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date | string;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => String, { nullable: false })
  employeeName!: string;
  @Field(() => String, { nullable: false })
  employeeTitle!: string;
}

@InputType()
export class TimesheetEntryUncheckedUpdateManyWithoutEngagementNestedInput {
  @Field(() => [TimesheetEntryCreateWithoutEngagementInput], { nullable: true })
  @Type(() => TimesheetEntryCreateWithoutEngagementInput)
  create?: Array<TimesheetEntryCreateWithoutEngagementInput>;
  @Field(() => [TimesheetEntryCreateOrConnectWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryCreateOrConnectWithoutEngagementInput)
  connectOrCreate?: Array<TimesheetEntryCreateOrConnectWithoutEngagementInput>;
  @Field(() => [TimesheetEntryUpsertWithWhereUniqueWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryUpsertWithWhereUniqueWithoutEngagementInput)
  upsert?: Array<TimesheetEntryUpsertWithWhereUniqueWithoutEngagementInput>;
  @Field(() => TimesheetEntryCreateManyEngagementInputEnvelope, {
    nullable: true,
  })
  @Type(() => TimesheetEntryCreateManyEngagementInputEnvelope)
  createMany?: InstanceType<
    typeof TimesheetEntryCreateManyEngagementInputEnvelope
  >;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  set?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
  @Field(() => [TimesheetEntryUpdateWithWhereUniqueWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryUpdateWithWhereUniqueWithoutEngagementInput)
  update?: Array<TimesheetEntryUpdateWithWhereUniqueWithoutEngagementInput>;
  @Field(() => [TimesheetEntryUpdateManyWithWhereWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryUpdateManyWithWhereWithoutEngagementInput)
  updateMany?: Array<TimesheetEntryUpdateManyWithWhereWithoutEngagementInput>;
  @Field(() => [TimesheetEntryScalarWhereInput], { nullable: true })
  @Type(() => TimesheetEntryScalarWhereInput)
  deleteMany?: Array<TimesheetEntryScalarWhereInput>;
}

@InputType()
export class TimesheetEntryUncheckedUpdateManyWithoutEngagementInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TimesheetEntryUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TimesheetEntryUncheckedUpdateWithoutEngagementInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TimesheetEntryUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  engagementId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TimesheetEntryUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TimesheetEntryUpdateManyWithWhereWithoutEngagementInput {
  @Field(() => TimesheetEntryScalarWhereInput, { nullable: false })
  @Type(() => TimesheetEntryScalarWhereInput)
  where!: InstanceType<typeof TimesheetEntryScalarWhereInput>;
  @Field(() => TimesheetEntryUpdateManyMutationInput, { nullable: false })
  @Type(() => TimesheetEntryUpdateManyMutationInput)
  data!: InstanceType<typeof TimesheetEntryUpdateManyMutationInput>;
}

@InputType()
export class TimesheetEntryUpdateManyWithoutEngagementNestedInput {
  @Field(() => [TimesheetEntryCreateWithoutEngagementInput], { nullable: true })
  @Type(() => TimesheetEntryCreateWithoutEngagementInput)
  create?: Array<TimesheetEntryCreateWithoutEngagementInput>;
  @Field(() => [TimesheetEntryCreateOrConnectWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryCreateOrConnectWithoutEngagementInput)
  connectOrCreate?: Array<TimesheetEntryCreateOrConnectWithoutEngagementInput>;
  @Field(() => [TimesheetEntryUpsertWithWhereUniqueWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryUpsertWithWhereUniqueWithoutEngagementInput)
  upsert?: Array<TimesheetEntryUpsertWithWhereUniqueWithoutEngagementInput>;
  @Field(() => TimesheetEntryCreateManyEngagementInputEnvelope, {
    nullable: true,
  })
  @Type(() => TimesheetEntryCreateManyEngagementInputEnvelope)
  createMany?: InstanceType<
    typeof TimesheetEntryCreateManyEngagementInputEnvelope
  >;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  set?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
  @Field(() => [TimesheetEntryWhereUniqueInput], { nullable: true })
  @Type(() => TimesheetEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>>;
  @Field(() => [TimesheetEntryUpdateWithWhereUniqueWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryUpdateWithWhereUniqueWithoutEngagementInput)
  update?: Array<TimesheetEntryUpdateWithWhereUniqueWithoutEngagementInput>;
  @Field(() => [TimesheetEntryUpdateManyWithWhereWithoutEngagementInput], {
    nullable: true,
  })
  @Type(() => TimesheetEntryUpdateManyWithWhereWithoutEngagementInput)
  updateMany?: Array<TimesheetEntryUpdateManyWithWhereWithoutEngagementInput>;
  @Field(() => [TimesheetEntryScalarWhereInput], { nullable: true })
  @Type(() => TimesheetEntryScalarWhereInput)
  deleteMany?: Array<TimesheetEntryScalarWhereInput>;
}

@InputType()
export class TimesheetEntryUpdateWithWhereUniqueWithoutEngagementInput {
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: false })
  @Type(() => TimesheetEntryWhereUniqueInput)
  where!: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
  @Field(() => TimesheetEntryUpdateWithoutEngagementInput, { nullable: false })
  @Type(() => TimesheetEntryUpdateWithoutEngagementInput)
  data!: InstanceType<typeof TimesheetEntryUpdateWithoutEngagementInput>;
}

@InputType()
export class TimesheetEntryUpdateWithoutEngagementInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TimesheetEntryUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phase?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EngagementUpdateOneRequiredWithoutTimesheetEntriesNestedInput, {
    nullable: true,
  })
  engagement?: InstanceType<
    typeof EngagementUpdateOneRequiredWithoutTimesheetEntriesNestedInput
  >;
}

@InputType()
export class TimesheetEntryUpsertWithWhereUniqueWithoutEngagementInput {
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: false })
  @Type(() => TimesheetEntryWhereUniqueInput)
  where!: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
  @Field(() => TimesheetEntryUpdateWithoutEngagementInput, { nullable: false })
  @Type(() => TimesheetEntryUpdateWithoutEngagementInput)
  update!: InstanceType<typeof TimesheetEntryUpdateWithoutEngagementInput>;
  @Field(() => TimesheetEntryCreateWithoutEngagementInput, { nullable: false })
  @Type(() => TimesheetEntryCreateWithoutEngagementInput)
  create!: InstanceType<typeof TimesheetEntryCreateWithoutEngagementInput>;
}

@InputType()
export class TimesheetEntryWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [TimesheetEntryWhereInput], { nullable: true })
  AND?: Array<TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryWhereInput], { nullable: true })
  OR?: Array<TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryWhereInput], { nullable: true })
  NOT?: Array<TimesheetEntryWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  engagementId?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  phase?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  employeeName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFilter>;
  @Field(() => EngagementRelationFilter, { nullable: true })
  engagement?: InstanceType<typeof EngagementRelationFilter>;
}

@InputType()
export class TimesheetEntryWhereInput {
  @Field(() => [TimesheetEntryWhereInput], { nullable: true })
  AND?: Array<TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryWhereInput], { nullable: true })
  OR?: Array<TimesheetEntryWhereInput>;
  @Field(() => [TimesheetEntryWhereInput], { nullable: true })
  NOT?: Array<TimesheetEntryWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  engagementId?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  hourlyRate?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  hoursWorked?: InstanceType<typeof FloatFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  weekEnding?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  phase?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  employeeName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  employeeTitle?: InstanceType<typeof StringFilter>;
  @Field(() => EngagementRelationFilter, { nullable: true })
  engagement?: InstanceType<typeof EngagementRelationFilter>;
}

@ObjectType()
export class TimesheetEntry {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  engagementId!: string;
  @Field(() => Float, { nullable: false })
  hourlyRate!: number;
  @Field(() => Float, { nullable: false })
  hoursWorked!: number;
  @Field(() => Date, { nullable: false })
  weekEnding!: Date;
  @Field(() => String, { nullable: false })
  phase!: string;
  @Field(() => String, { nullable: false })
  employeeName!: string;
  @Field(() => String, { nullable: false })
  employeeTitle!: string;
  @Field(() => Engagement, { nullable: false })
  engagement?: InstanceType<typeof Engagement>;
}

@ArgsType()
export class UpdateManyTimesheetEntryArgs {
  @Field(() => TimesheetEntryUpdateManyMutationInput, { nullable: false })
  @Type(() => TimesheetEntryUpdateManyMutationInput)
  data!: InstanceType<typeof TimesheetEntryUpdateManyMutationInput>;
  @Field(() => TimesheetEntryWhereInput, { nullable: true })
  @Type(() => TimesheetEntryWhereInput)
  where?: InstanceType<typeof TimesheetEntryWhereInput>;
}

@ArgsType()
export class UpdateOneTimesheetEntryArgs {
  @Field(() => TimesheetEntryUpdateInput, { nullable: false })
  @Type(() => TimesheetEntryUpdateInput)
  data!: InstanceType<typeof TimesheetEntryUpdateInput>;
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: false })
  @Type(() => TimesheetEntryWhereUniqueInput)
  where!: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneTimesheetEntryArgs {
  @Field(() => TimesheetEntryWhereUniqueInput, { nullable: false })
  @Type(() => TimesheetEntryWhereUniqueInput)
  where!: Prisma.AtLeast<TimesheetEntryWhereUniqueInput, 'id'>;
  @Field(() => TimesheetEntryCreateInput, { nullable: false })
  @Type(() => TimesheetEntryCreateInput)
  create!: InstanceType<typeof TimesheetEntryCreateInput>;
  @Field(() => TimesheetEntryUpdateInput, { nullable: false })
  @Type(() => TimesheetEntryUpdateInput)
  update!: InstanceType<typeof TimesheetEntryUpdateInput>;
}
