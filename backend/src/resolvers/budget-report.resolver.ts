import { Args, Field, InputType, Query, Resolver } from '@nestjs/graphql';
import { BudgetReport } from '@/types/budget-report';
import * as service from '@/services/budget-report.service';
import { FindManyBudgetArgs as _FindManyBudgetArgs } from '@/generated';

// must use 'InputType' so that we can bundle all properties into 1 'args` at resolver level
@InputType()
export class GetBudgetReportArgs {
  @Field(() => Date, { nullable: false })
  weekEnding!: Date;

  @Field(() => String, { nullable: false })
  engagementId!: string;
}

@Resolver(() => BudgetReport)
export class BudgetReportResolver {
  @Query(() => BudgetReport)
  public async getBudgetReportByWeekEnding(
    @Args(`args`, { type: () => GetBudgetReportArgs })
    args: GetBudgetReportArgs,
  ): Promise<BudgetReport> {
    const result = service.findBudgetReportByWeekEnding(args);
    if (result.isErr()) {
      throw result.error;
    }
    return result.value;
  }
}
