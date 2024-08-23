import { Module } from '@nestjs/common';
import { EngagementResolver } from '@/resolvers/engagement.resolver';

@Module({
  imports: [EngagementResolver],
  exports: [EngagementResolver],
})
export class EngagementModule {}