import { SetupServer, setupServer } from "msw/node";
import { handlers } from "./handlers";

// @see https://mswjs.io/docs/getting-started/integrate/node
export const server: SetupServer = setupServer(...handlers);
