# PoC - Engagement Budget Tracker

## Prerequisites:
1. Download & install PNPM
2. Download & install Docker Desktop

## How to use it

1. Clone repo
2. Run `pnpm install` - Install dependencies
3. Open Docker Desktop - You need a place to run db locally
4. Run `pnpm docker:db:create` - Create db in docker
5. Create a `.env` file - Place to keep db URL
6. Add this line to `.env`: `DATABASE_URL="postgres://admin:admin@localhost:1000"` - Tells Prisma where is the db
7. Run `npx prisma db push` - Pushes schema to db
8. Run `npx prisma db seed` - Seeds db
9. **Optional**: Run `pnpm db:clear` - Clears all rows in all tables from db
