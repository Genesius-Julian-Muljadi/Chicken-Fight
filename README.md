# Basic Multi-page App Template

Originally meant for a specific "Chicken-Fight" project, this repository was developed into a template instead, with all the data and variables easily editable through apps/web/src/data and apps/web/tailwind.config.ts .

The app has a functioning database ORM with Supabase, JWT Login, and Cloudinary management.

### Active Features

- Sign up and Log in as Participants or Organizers
- Referral codes on registration & purchases
- Organizer dashboard for event history, statistics, & management
- Supabase database integration
  - Database random populator available in footer

### Technologies

- **Languages**: TypeScript, JavaScript, HTML, CSS (Tailwind CSS)
- **Back-end**: Node.js, Express.js, Prisma, JSON Web Token
- **Front-end**: React, Next.js, Material Tailwind, Redux, Formik, Cloudinary
- **Database**: Supabase

### Project Setup

- **Prerequisites**

  - TypeScript
  - **Back-end**: Node.js, Express.js
  - **Front-end**: Next.js 15 with React 19 & TypeScript

- **Easy Installation (Run in terminal)**

  - **Back-end**: Run in `./apps/api`.

    - `npm install`

  - **Front-end**: Run in `./apps/web`. Material Tailwind has issues with further versions of @types/react.

    - `npm install`
    - `npm install @types/react@18.2.39`

- **Environment Variables**

  - **Back-end**: .env in `./apps/api`.

    - SECRET_KEY="[YOUR SECRET KEY]"
    - PORT=8080
    - BASE_WEB_URL="[YOUR WEB URL]"
    - DIRECT_URL="[CHECK SUPABASE PRISMA ORM]"
    - DATABASE_URL="[CHECK SUPABASE PRISMA ORM]"
    - CREATOR_EMAIL="juliangenesiusmuljadi@gmail.com"
    - CLOUDINARY_CLOUD_NAME="[YOUR CLOUDINARY CLOUD NAME]"
    - CLOUDINARY_API_KEY="[YOUR CLOUDINARY API KEY]"
    - CLOUDINARY_API_SECRET="[YOUR CLOUDINARY API SECRET]"

- **Front-end**: .env in `./apps/web`.

    - NEXT_PUBLIC_BASE_API_URL=[YOUR API URL]
    - NEXT_PUBLIC_BASE_WEB_URL=[THIS WEB URL]
    - NEXT_PUBLIC_SECRET_KEY=[YOUR SECRET KEY]
    - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=[YOUR CLOUDINARY CLOUD NAME]
    - NEXT_PUBLIC_CLOUDINARY_API_KEY=[YOUR CLOUDINARY API KEY]

- **Running the Project Locally**

  1.  Open terminals both in `./apps/api` and `./apps/web`.
  2.  Run `npm run build` and `npm run dev` on both.
  3.  Open `http://localhost:3000` on your preferred browser.

- **Database Management**

  - There is no function on the website to register a user. User should be manually created in the database with only the desired username. User can then register by attempting to log in with their desired password.
  - Run `npx prisma migrate dev` to sync Prisma with the database.
