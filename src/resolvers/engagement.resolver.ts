import { Args, Query, Resolver } from '@nestjs/graphql';
import { Engagement, FindUniqueEngagementArgs } from '@/generated';

@Resolver(() => Engagement)
export class EngagementResolver {
  @Query(() => Engagement)
  public async findOneEngagement(
    @Args() args: FindUniqueEngagementArgs,
  ): Promise<Engagement> {
    return {
      id: ``,
      name: ``,
      engagementManager: ``,
      engagementPartner: ``,
    };
  }
}
