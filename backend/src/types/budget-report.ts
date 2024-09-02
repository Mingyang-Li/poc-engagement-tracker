import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Engagement } from '@/generated';

export enum BudgetReportPeriod {
  THIS_WEEK,
  YTD,
}
registerEnumType(BudgetReportPeriod, {
  name: `BudgetReportPeriod`,
});

@ObjectType()
export class BudgetBreakdown {
  @Field(() => BudgetReportPeriod, {
    nullable: true,
    description: `Refers to either "this week" or "YTD`,
  })
  period?: BudgetReportPeriod;

  @Field(() => String, {
    nullable: true,
    description: `Refers to the ID of an engagement`,
  })
  engagementId?: string;

  @Field(() => String, {
    nullable: true,
    description: `Refers to the phase of an engagement`,
  })
  phase?: string;

  @Field(() => Float, {
    nullable: true,
    description: `Refers to the overall cost of the engagement of a phase for the period specified`,
  })
  cost?: number;

  @Field(() => Float, {
    nullable: true,
    description: `Refers to the overall budget of the engagement of a phase for the period specified`,
  })
  budget?: number;

  @Field(() => String, {
    nullable: true,
    description: `Briefly describes whether we're under or over budget by x dollars`,
  })
  status?: string;
}

@ObjectType({
  description: `Useful for displaying all critical info of a budget report for a particular week-ending`,
})
export class BudgetReport {
  // overall info
  @Field(() => Date, { nullable: true })
  weekEnding?: Date;

  @Field(() => String, { nullable: true })
  engagementId?: string;

  @Field(() => Engagement, { nullable: true })
  engagement?: Engagement;

  // budget info for the week
  @Field(() => Number, { nullable: true })
  overallBudgetThisWeek?: number;

  @Field(() => Number, { nullable: true })
  overallCostThisWeek?: number;

  @Field(() => String, { nullable: true })
  overallStatusThisWeek?: string;

  @Field(() => [BudgetBreakdown], { nullable: true })
  budgetBreakdownThisWeek?: BudgetBreakdown[];

  // budget info YTD
  @Field(() => Number, { nullable: true })
  overallBudgetYtd?: number;

  @Field(() => Number, { nullable: true })
  overallCostYtd?: number;

  @Field(() => String, { nullable: true })
  overallStatusYtd?: string;

  @Field(() => [BudgetBreakdown], { nullable: true })
  budgetBreakdownYtd?: BudgetBreakdown[];
}
