import { SetupWorker, setupWorker } from "msw";
import { handlers } from "@mocks/handlers";

// @see https://mswjs.io/docs/getting-started/integrate/browser
export const worker: SetupWorker = setupWorker(...handlers);
