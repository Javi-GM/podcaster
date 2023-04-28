## TO-DO
- [ ] Improve scrollings and content overflows.
- [ ] Make Layout for episodes section instead <Outlet> from router.
- [ ] Improve use of html tags in some places.

## Running a Vite App in Development Mode

1. Install Node.js: If you don't have Node.js installed, you can download and install it from the official Node.js website (https://nodejs.org/).

2. Install Dependencies: Navigate to your existing Vite app's directory in your terminal and install the dependencies by running:
```
cd /path/to/your/vite-app
npm install
```

3. Start Development Server: To run the Vite app in development mode, use the following command:
```
npm run dev
```
This will start the development server and your Vite app will be accessible at `http://localhost:3000` in your web browser.

## Running a Vite App in Production Mode

1. Build the App: To create a production build of your Vite app, run the following command in your terminal:
```
npm run build
```
This will generate a production-ready build of your app in the `dist` directory.

2. Serve the App: Once the build is complete, you can serve your app locally to test it in production mode using a simple static file server. You can use a tool like `http-server` or `serve` to do this. For example, if you have `http-server` installed globally, you can run:
```
npx http-server dist
```
This will start a local server and your Vite app will be accessible at `http://localhost:8080` (or a different port, depending on the tool you're using) in your web browser.

## Running tests

To run the test suite for this Vite app, you can use the following command:

```
npm run test
```
