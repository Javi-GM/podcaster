import "@testing-library/jest-dom";
import { beforeAll, afterAll, afterEach } from "vitest";
import { fetch } from "cross-fetch";

import { server } from "../mocks/server";

global.fetch = fetch;

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());