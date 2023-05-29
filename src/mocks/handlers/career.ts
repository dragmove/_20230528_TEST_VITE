import { rest } from "msw";

export const getCareers = rest.get(
  "https://dragmove.github.io/nop/data/careers.json",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 5,
          company: "포티투닷",
          company_eng: "42dot",
          position: "Front-end Engineer",
          date: "2020.08 - ",
        },
      ])
    );
  }
);

/*
export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(ctx.status(200));
  }),
  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
*/
