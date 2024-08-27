import { Args, ArgsType, Field, Query, Resolver } from '@nestjs/graphql';
import { BudgetReport } from '@/types/budget-report';
import * as service from '@/services/budget-report.service';

@ArgsType()
export class GetBudgetReportByWeekEndingArgs {
  @Field(() => Date, { nullable: false })
  weekEnding!: Date;
}

@Resolver(() => BudgetReport)
export class BudgetReportResolver {
  @Query(() => BudgetReport)
  public async getBudgetReportByWeekEnding(
    @Args() args: GetBudgetReportByWeekEndingArgs,
  ): Promise<BudgetReport> {
    const result = service.findBudgetReportByWeekEnding(args?.weekEnding);
    if (result.isErr()) {
      throw result.error;
    }
    return result.value;
  }
}
