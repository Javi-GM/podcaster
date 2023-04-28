import "@testing-library/jest-dom";
import { beforeAll, afterAll, afterEach } from "vitest";
import { fetch } from "cross-fetch";

import { server } from "../mocks/server";

// mock fetch because it's not available in node(used by vitest)
global.fetch = fetch;

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());