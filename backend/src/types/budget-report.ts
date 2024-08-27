import { Field, ObjectType } from '@nestjs/graphql';
import { Budget, Engagement } from '@/generated';

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

  @Field(() => [Budget], { nullable: true })
  budgetBreakdownThisWeek?: Budget[];

  // budget info YTD
  @Field(() => Number, { nullable: true })
  overallBudgetYtd?: number;

  @Field(() => Number, { nullable: true })
  overallCostYtd?: number;

  @Field(() => String, { nullable: true })
  overallStatusYtd?: string;

  @Field(() => [Budget], { nullable: true })
  budgetBreakdownYtd?: Budget[];
}
