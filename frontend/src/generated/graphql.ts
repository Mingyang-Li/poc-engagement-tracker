export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Budget = {
  __typename?: 'Budget';
  amount: Scalars['Float']['output'];
  engagement: Engagement;
  engagementId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  phase: Scalars['String']['output'];
  weekEnding: Scalars['DateTime']['output'];
};

export type BudgetAvgAggregate = {
  __typename?: 'BudgetAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type BudgetCountAggregate = {
  __typename?: 'BudgetCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  engagementId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  phase: Scalars['Int']['output'];
  weekEnding: Scalars['Int']['output'];
};

export type BudgetMaxAggregate = {
  __typename?: 'BudgetMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  engagementId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<Scalars['String']['output']>;
  weekEnding?: Maybe<Scalars['DateTime']['output']>;
};

export type BudgetMinAggregate = {
  __typename?: 'BudgetMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  engagementId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<Scalars['String']['output']>;
  weekEnding?: Maybe<Scalars['DateTime']['output']>;
};

/** Useful for displaying all critical info of a budget report for a particular week-ending */
export type BudgetReport = {
  __typename?: 'BudgetReport';
  budgetBreakdownThisWeek?: Maybe<Array<Budget>>;
  budgetBreakdownYtd?: Maybe<Array<Budget>>;
  engagement?: Maybe<Engagement>;
  engagementId?: Maybe<Scalars['String']['output']>;
  overallBudgetThisWeek?: Maybe<Scalars['Float']['output']>;
  overallBudgetYtd?: Maybe<Scalars['Float']['output']>;
  overallCostThisWeek?: Maybe<Scalars['Float']['output']>;
  overallCostYtd?: Maybe<Scalars['Float']['output']>;
  overallStatusThisWeek?: Maybe<Scalars['String']['output']>;
  overallStatusYtd?: Maybe<Scalars['String']['output']>;
  weekEnding?: Maybe<Scalars['DateTime']['output']>;
};

export type BudgetSumAggregate = {
  __typename?: 'BudgetSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type Engagement = {
  __typename?: 'Engagement';
  _count: EngagementCount;
  budgets?: Maybe<Array<Budget>>;
  engagementManager: Scalars['String']['output'];
  engagementPartner: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  timesheetEntries?: Maybe<Array<TimesheetEntry>>;
};

export type EngagementCount = {
  __typename?: 'EngagementCount';
  budgets: Scalars['Int']['output'];
  timesheetEntries: Scalars['Int']['output'];
};

export type EngagementCountAggregate = {
  __typename?: 'EngagementCountAggregate';
  _all: Scalars['Int']['output'];
  engagementManager: Scalars['Int']['output'];
  engagementPartner: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type EngagementMaxAggregate = {
  __typename?: 'EngagementMaxAggregate';
  engagementManager?: Maybe<Scalars['String']['output']>;
  engagementPartner?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EngagementMinAggregate = {
  __typename?: 'EngagementMinAggregate';
  engagementManager?: Maybe<Scalars['String']['output']>;
  engagementPartner?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getBudgetReportByWeekEnding: BudgetReport;
};


export type QueryGetBudgetReportByWeekEndingArgs = {
  weekEnding: Scalars['DateTime']['input'];
};

export type TimesheetEntry = {
  __typename?: 'TimesheetEntry';
  employeeName: Scalars['String']['output'];
  employeeTitle: Scalars['String']['output'];
  engagement: Engagement;
  engagementId: Scalars['String']['output'];
  hourlyRate: Scalars['Float']['output'];
  hoursWorked: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  phase: Scalars['String']['output'];
  weekEnding: Scalars['DateTime']['output'];
};

export type TimesheetEntryAvgAggregate = {
  __typename?: 'TimesheetEntryAvgAggregate';
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
};

export type TimesheetEntryCountAggregate = {
  __typename?: 'TimesheetEntryCountAggregate';
  _all: Scalars['Int']['output'];
  employeeName: Scalars['Int']['output'];
  employeeTitle: Scalars['Int']['output'];
  engagementId: Scalars['Int']['output'];
  hourlyRate: Scalars['Int']['output'];
  hoursWorked: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  phase: Scalars['Int']['output'];
  weekEnding: Scalars['Int']['output'];
};

export type TimesheetEntryMaxAggregate = {
  __typename?: 'TimesheetEntryMaxAggregate';
  employeeName?: Maybe<Scalars['String']['output']>;
  employeeTitle?: Maybe<Scalars['String']['output']>;
  engagementId?: Maybe<Scalars['String']['output']>;
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<Scalars['String']['output']>;
  weekEnding?: Maybe<Scalars['DateTime']['output']>;
};

export type TimesheetEntryMinAggregate = {
  __typename?: 'TimesheetEntryMinAggregate';
  employeeName?: Maybe<Scalars['String']['output']>;
  employeeTitle?: Maybe<Scalars['String']['output']>;
  engagementId?: Maybe<Scalars['String']['output']>;
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<Scalars['String']['output']>;
  weekEnding?: Maybe<Scalars['DateTime']['output']>;
};

export type TimesheetEntrySumAggregate = {
  __typename?: 'TimesheetEntrySumAggregate';
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
};
