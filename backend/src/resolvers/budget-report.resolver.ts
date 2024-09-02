import { Args, Field, InputType, Query, Resolver } from '@nestjs/graphql';
import { BudgetReport } from '@/types/budget-report';
import * as service from '@/services/budget-report.service';
import { FindManyBudgetArgs as _FindManyBudgetArgs } from '@/generated';
import { logger } from '@/utils/logger';

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
  public async getBudgetReport(
    @Args(`args`, { type: () => GetBudgetReportArgs })
    args: GetBudgetReportArgs,
  ): Promise<BudgetReport> {
    logger.verbose(
      `Triggering ${
        service.getBudgetReport.name
      }() where engagement ID is "${args?.engagementId}" and week-ending is ${
        args?.weekEnding?.toISOString().slice(0, 10)
      }`,
    );
    const result = service.getBudgetReport(args);
    if (result.isErr()) {
      throw result.error;
    }
    return result.value;
  }
}
