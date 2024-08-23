import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EngagementModule } from './modules/engagement.module';

@Module({
  imports: [
    EngagementModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './schema.graphql'),
      introspection: true,
      playground: true,
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
