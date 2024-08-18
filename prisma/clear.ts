/**
 * Clear all data in all tables
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const clearAllData = async () => {
  console.warn(`Clearing db - Deleting all rows in all columns...`);
  await prisma.$executeRawUnsafe(`
    DO
    $$
    DECLARE
      r RECORD;
    BEGIN
      -- Iterate over each table and truncate it
      FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || ' CASCADE';
      END LOOP;
    END
    $$;
  `);
};

clearAllData()
  .then(() => {
    console.info(`DB cleared`);
  })
  .catch((e) => {
    console.error(e);
  });
