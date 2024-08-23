# API Design (GraphQL)

```graphql

# Given a date, return budget report of that week
query findBudgetReportByWeekEnding(args): BudgetReport

# Create a TimesheetEntry
mutation createTimesheetEntry(args): TimesheetEntry

# Create a Budget
mutation createBudget(args): Budget

# Update a TimesheetEntry
mutation updateTimesheetEntry(args): TimesheetEntry

# Update
```