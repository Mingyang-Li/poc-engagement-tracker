import * as c from 'colorette';
import { PrismaClient, Prisma, Engagement } from '@prisma/client';
import * as f from '@ngneat/falso';
import { ResultAsync, err, fromPromise, ok } from 'neverthrow';

// helpers
export const isUndefinedOrNull = (args: unknown): args is undefined | null => {
  return args === undefined || args === null;
};

export const YYYY_MM_DD = (args: Date): string =>
  args.toISOString().slice(0, 10);

/** Dummy logger */
export const logger = {
  info: (message: string) => console.log(c.green(`[INFO] ${message}`)),
  debug: (message: string) => console.log(c.blue(`[DEBUG] ${message}`)),
  warning: (message: string) => console.log(c.yellow(`[WARNING] ${message}`)),
  error: (message: string) => console.log(c.red(`[ERROR] ${message}`)),
};

export const customEngagements = [
  `Engagement - Data Science`,
  `Engagement - Software Development`,
  `Engagement - Mergers & Acquisitions`,
  `Engagement - Corporate Finance`,
  `Engagement - Transaction Services`,
] as const;
export type CustomEngagement = (typeof customEngagements)[number];

export type EngagementWithPhases = {
  engagementName: CustomEngagement;
  engagementPartner: string;
  engagementManager: string;
  phases: string[];
};

export const titles = [
  `Graduate`,
  `Associate`,
  `Senior Associate`,
  `Associate Manager`,
  `Manager`,
  `Senior Manager`,
  `Associate Director`,
  `Director`,
  `Senior Director`,
  `Partner`,
] as const;
export type Title = (typeof titles)[number];

/** Fixed  */
export const hourlyRateByTitle = new Map<Title, number>([
  [`Graduate`, 250],
  [`Associate`, 275],
  [`Senior Associate`, 300],
  [`Associate Manager`, 350],
  [`Manager`, 375],
  [`Senior Manager`, 400],
  [`Associate Director`, 450],
  [`Director`, 500],
  [`Senior Director`, 550],
  [`Partner`, 600],
]);

export type Employee = {
  fullName: string;
  email: string;
  title: Title;
};

/**
 * Making it easier to view custom engagement details
 */
export const engagementsWithPhases: EngagementWithPhases[] = [
  {
    engagementName: `Engagement - Data Science`,
    engagementPartner: f.randFullName({ withAccents: false }),
    engagementManager: f.randFullName({ withAccents: false }),
    phases: [
      `Requirements Analysis`,
      `Data Preparation`,
      `Data Analysis`,
      `Building Machining Learning Models`,
      `Provide insights`,
    ],
  },
  {
    engagementName: `Engagement - Software Development`,
    engagementPartner: f.randFullName({ withAccents: false }),
    engagementManager: f.randFullName({ withAccents: false }),
    phases: [
      `Requirements Analysis`,
      `System Design`,
      `Data Migration`,
      `Custom Development`,
      `Quality Assurance`,
      `Post Delivery Support`,
    ],
  },
  {
    engagementName: `Engagement - Mergers & Acquisitions`,
    engagementPartner: f.randFullName({ withAccents: false }),
    engagementManager: f.randFullName({ withAccents: false }),
    phases: [
      `Initial Target Identification`,
      `Due Dilligence`,
      `Valuation & Deal Structuring`,
      `Post Merger Integration`,
    ],
  },
  {
    engagementName: `Engagement - Corporate Finance`,
    engagementPartner: f.randFullName({ withAccents: false }),
    engagementManager: f.randFullName({ withAccents: false }),
    phases: [
      `Strategic Planning`,
      `Capital Budgeting`,
      `Financial Analysis & Modeling`,
      `Financing`,
      `Implementation`,
      `Monitoring & Reporting`,
    ],
  },
  {
    engagementName: `Engagement - Transaction Services`,
    engagementPartner: f.randFullName({ withAccents: false }),
    engagementManager: f.randFullName({ withAccents: false }),
    phases: [
      `Scoping`,
      `Transaction Execution`,
      `Closing & Settlement`,
      `Post-Transaction Support`,
    ],
  },
];

export type EngagementsByName = Map<CustomEngagement, EngagementWithPhases>;
/**
 * Making it easier to lodate custom details of engagements
 * by engagement names.
 */
export const engagementsByName: EngagementsByName = new Map<
  CustomEngagement,
  EngagementWithPhases
>(engagementsWithPhases?.map((item) => [item?.engagementName, item]));

export type EmployeesByEngagement = {
  [key in CustomEngagement]: Employee[];
};
/** Static employees for each engagement */
export const employeesByEngagement: EmployeesByEngagement = {
  'Engagement - Data Science': Array.from({ length: 6 }).map(
    () => {
      const firstName = f.randFirstName({ withAccents: false });
      const lastName = f.randLastName({ withAccents: false });
      const employee: Employee = {
        fullName: `${firstName} ${lastName}`,
        email: f.randEmail({ firstName, lastName, nameSeparator: `-` }),
        title: titles[f.randNumber({ min: 0, max: titles?.length - 1 })],
      };
      return employee;
    },
    // f.randFullName({ withAccents: false }),
  ),
  'Engagement - Software Development': Array.from({ length: 6 }).map(() => {
    const firstName = f.randFirstName({ withAccents: false });
    const lastName = f.randLastName({ withAccents: false });
    const employee: Employee = {
      fullName: `${firstName} ${lastName}`,
      email: f.randEmail({ firstName, lastName, nameSeparator: `-` }),
      title: titles[f.randNumber({ min: 0, max: titles?.length - 1 })],
    };
    return employee;
  }),
  'Engagement - Mergers & Acquisitions': Array.from({ length: 6 }).map(() => {
    const firstName = f.randFirstName({ withAccents: false });
    const lastName = f.randLastName({ withAccents: false });
    const employee: Employee = {
      fullName: `${firstName} ${lastName}`,
      email: f.randEmail({ firstName, lastName, nameSeparator: `-` }),
      title: titles[f.randNumber({ min: 0, max: titles?.length - 1 })],
    };
    return employee;
  }),
  'Engagement - Corporate Finance': Array.from({ length: 6 }).map(() => {
    const firstName = f.randFirstName({ withAccents: false });
    const lastName = f.randLastName({ withAccents: false });
    const employee: Employee = {
      fullName: `${firstName} ${lastName}`,
      email: f.randEmail({ firstName, lastName, nameSeparator: `-` }),
      title: titles[f.randNumber({ min: 0, max: titles?.length - 1 })],
    };
    return employee;
  }),
  'Engagement - Transaction Services': Array.from({ length: 6 }).map(() => {
    const firstName = f.randFirstName({ withAccents: false });
    const lastName = f.randLastName({ withAccents: false });
    const employee: Employee = {
      fullName: `${firstName} ${lastName}`,
      email: f.randEmail({ firstName, lastName, nameSeparator: `-` }),
      title: titles[f.randNumber({ min: 0, max: titles?.length - 1 })],
    };
    return employee;
  }),
};

export type SeedEngagementsArgs = {
  prisma: PrismaClient;
  engagementsWithPhases: EngagementWithPhases[];
};
const seedEngagements = async (
  args: SeedEngagementsArgs,
): Promise<ResultAsync<Engagement[], Error>> => {
  const { prisma, engagementsWithPhases } = args;

  let engagementsInserted: Engagement[] = [];

  for await (const item of engagementsWithPhases) {
    const { engagementName, engagementManager, engagementPartner } = item;
    logger.warning(
      `seeding ${Prisma.ModelName.Engagement} with name "${engagementName}"...`,
    );

    const result = await fromPromise(
      prisma.engagement.create({
        data: {
          name: engagementName,
          engagementPartner,
          engagementManager,
        },
      }),
      (e) => e,
    );

    if (result.isErr()) {
      logger.error(
        `Failed to seed ${
          Prisma.ModelName.Engagement
        } with name "${engagementName}". Error: ${JSON.stringify(
          result.error,
        )}`,
      );
    }

    if (result.isOk()) {
      logger.info(
        `seeded ${Prisma.ModelName.Engagement} with name "${engagementName}".`,
      );
      // adding item we just created into engagementsInserted
      engagementsInserted = [...engagementsInserted, result.value];
      logger.info(
        `Added ${Prisma.ModelName.Engagement} with name "${engagementName}" into "engagementsInserted" (Current items count: ${engagementsInserted?.length})`,
      );
    }
  }

  if (engagementsInserted?.length !== engagementsWithPhases?.length) {
    return err(
      new Error(
        `Only inserted ${engagementsInserted?.length} out of ${engagementsWithPhases?.length} items into db`,
      ),
    );
  }

  return ok<Engagement[]>(engagementsInserted);
};

/** Generates a list of Sundays of the past x weeks
 *
 * Useful for getting the week-ending dates for an engagement
 *
 * Typically, week-endings are the Sundays of each week, regardless of holidays.
 */
export const generateSundaysOfPastXWeeks = (weeks: number): Date[] => {
  const sundays: Date[] = [];
  const today = new Date();
  const currentDay = today.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
  const daysSinceLastSunday = currentDay; // Number of days since the last Sunday

  // Loop for the past x weeks
  for (let i = 0; i < weeks; i++) {
    const sunday = new Date(today); // Create a new Date object for today
    sunday.setDate(today.getDate() - daysSinceLastSunday - i * 7); // Set the date to the previous Sunday for each week
    sundays.push(sunday);
  }

  return sundays;
};

export type GenerateBudgetDataArgs = {
  weekEndings: Date[];
  engagementsCreated: Engagement[];
  engagementsByName: EngagementsByName;
};
export const generateBudgetData = (
  args: GenerateBudgetDataArgs,
): Map<string, Prisma.BudgetCreateInput[]> => {
  const { weekEndings, engagementsCreated, engagementsByName } = args;

  const weeklyBudgetFigures = [0, 1500, 3000, 4500, 6000, 10000];

  const budgetsByEngagementIds = new Map<string, Prisma.BudgetCreateInput[]>(
    engagementsCreated?.map((engagement) => {
      // engagement ID
      const engagementId = engagement?.id;

      // get phases of this engagement
      const engagementDetails = engagementsByName.get(
        engagement?.name as CustomEngagement,
      ) as EngagementWithPhases;
      const { phases } = engagementDetails;

      const budgets: Prisma.BudgetCreateInput[] = weekEndings
        ?.map((weekEnding) => {
          return phases
            ?.map((phase) => {
              const input: Prisma.BudgetCreateInput = {
                engagement: { connect: { id: engagementId } },
                phase,
                weekEnding,
                amount:
                  weeklyBudgetFigures[
                    f.randNumber({
                      min: 0,
                      max: weeklyBudgetFigures?.length - 1,
                    })
                  ],
              };
              return input;
            })
            .flatMap((item) => item);
        })
        .flatMap((item) => item);

      return [engagementId, budgets];
    }),
  );

  return budgetsByEngagementIds;
};

export type SeedBudgetsArgs = {
  prisma: PrismaClient;
  items: Prisma.BudgetCreateInput[];
};
/**
 * Given an array of budgets, seed db
 */
const seedBudget = async (args: SeedBudgetsArgs) => {
  const { prisma, items } = args;

  for await (const item of items) {
    logger.warning(`Adding "${Prisma.ModelName.Budget}" into db...`);
    prisma.budget
      .create({
        data: item,
      })
      .then((e) => {
        logger.info(`Added "${Prisma.ModelName.Budget}" into db. ID: ${e?.id}`);
      })
      .catch((e) => {
        logger.error(
          `Failed to add "${Prisma.ModelName.Budget}" into db. ${JSON.stringify(
            e,
          )}`,
        );
      });
  }
};

export const seedTimesheetEntries = async (args: {
  prisma: PrismaClient;
  weekEndings: Date[];
  createdEngagementsByName: Map<string, Engagement>;
}) => {
  const { prisma, weekEndings, createdEngagementsByName } = args;

  // generate payload

  // week-ending -> engagement -> phase -> employee
  const items: Prisma.TimesheetEntryCreateInput[] = weekEndings
    ?.map((weekEnding) => {
      return customEngagements
        ?.map((engagement) => {
          // potentially undefined
          const engagementDetails = engagementsByName.get(
            engagement,
          ) as EngagementWithPhases;

          const engagementId = createdEngagementsByName.get(engagement)?.id;

          // get employees of current engagement
          const employeesOfCurrentEngagement =
            employeesByEngagement[engagement];

          // get phases of current engagement
          const { phases } = engagementDetails;

          return phases
            ?.map((phase) => {
              return employeesOfCurrentEngagement
                ?.map((employee) => {
                  const hourlyRate = hourlyRateByTitle.get(
                    employee?.title,
                  ) as number;

                  const hoursWorked = f.randNumber({ min: 0.25, max: 60 });
                  const employeeName = employee?.fullName;
                  const employeeTitle = employee?.title;

                  const input: Prisma.TimesheetEntryCreateInput = {
                    engagement: { connect: { id: engagementId } },
                    phase,
                    weekEnding,
                    hourlyRate,
                    hoursWorked,
                    employeeName,
                    employeeTitle,
                  };
                  return input;
                })
                .flatMap((item) => item);
            })
            .flatMap((item) => item);
        })
        .flatMap((item) => item);
    })
    .flatMap((item) => item);

  // seeding
  for await (const item of items) {
    const {
      employeeName,
      employeeTitle,
      hoursWorked,
      hourlyRate,
      weekEnding,
      engagement,
      phase,
    } = item;

    const engagementId = engagement?.connect?.id;

    const message = `Employee "${employeeName}" (${employeeTitle}) who worked ${hoursWorked} hrs at $${hourlyRate}/hr for week ending ${YYYY_MM_DD(
      new Date(weekEnding),
    )} on phase "${phase}" for engagement "${engagementId}"`;

    logger.debug(`Seeding TimesheetEntry for ${message}...`);

    prisma.timesheetEntry
      .create({ data: item })
      .then(() => {
        logger.info(`Seeded TimesheetEntry for ${message}`);
      })
      .catch((e) => {
        logger.error(
          `Failed to seed TimesheetEntry for ${message}. ${JSON.stringify(e)}`,
        );
      });
  }
};

const seed = async () => {
  const prisma = new PrismaClient();

  const seedingEngagements = await seedEngagements({
    prisma,
    engagementsWithPhases,
  });

  if (seedingEngagements.isErr()) {
    logger.error(
      `Failed to seed engagements. Error: ${seedingEngagements.error.message}`,
    );
    return;
  }

  // setup common week-endings so we can use the same dates to seed both
  // Budget table and timesheetEntry table
  const weekEndings = generateSundaysOfPastXWeeks(10);

  // only seed budgets if we successfully seeded Engagement table
  if (seedingEngagements.isOk()) {
    // to be used for linking to engagements when seedingf Budget table and timesheetEntry table
    const createdEngagementsByName = new Map<string, Engagement>(
      seedingEngagements.value?.map((item) => [item?.name, item]),
    );

    // generate budgets data (grouped by engagement IDs)
    const budgetsByEngagementIds = generateBudgetData({
      weekEndings,
      engagementsCreated: seedingEngagements.value,
      engagementsByName,
    });

    const engagementIds = Array.from(budgetsByEngagementIds?.keys());

    // seed budget
    for await (const engagementId of engagementIds) {
      // potentially undefined
      const items = budgetsByEngagementIds.get(
        engagementId,
      ) as Prisma.BudgetCreateInput[];
      logger.warning(
        `Seeding ${items?.length} "${Prisma.ModelName.Budget}"s  for Engagement with ID: "${engagementId}"...`,
      );
      seedBudget({ prisma, items });
    }

    // seed time entries
    seedTimesheetEntries({ prisma, weekEndings, createdEngagementsByName });
  }
};

seed();
