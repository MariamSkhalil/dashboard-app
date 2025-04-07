This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

## Implementation Process
>.First started with setting up the react next.js project and downloading redux, tailwindcss, firebase, recharts and simple-datatables
>.Then created a store with an authSlice used for authurization to log in, sign up and log out using firebase as well
>.wrapped the app with the provider
>.implemented my login page that had the handlelogin function that used auth from firebase and authSlice, and implemented the html form
>.after a successful login the user is redirected to the dashboard so used a router for the re-direction
>.the dashboard consists of: Header, DataTable, Chart
>.Starting with the header it has the name of the app and a log out button
>.The dataTable implemented with hardcoded data and its html template from simple-datatables library with modifications to its UI for a more user/mobile friendly experience
>.The charts (Line Chart and Bar Chart) are implemented using the recharts library and samples from the data used in the data table

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
