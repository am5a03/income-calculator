import { initTRPC } from "@trpc/server";
import type { Context } from "./context";
import { transformer } from "@/trpc/shared";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create({ transformer });

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
