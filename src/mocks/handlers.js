import { rest } from 'msw'
import data from "./fixtures/data.json";

export const handlers = [
    rest.get("data", (req, res, ctx) => res(ctx.status(200), ctx.json(data))),
]