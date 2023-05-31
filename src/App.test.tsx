import axios from "axios";
import { getCareers } from "./mocks/handlers/career";
import { server } from "./mocks/server";

describe("App", () => {
  it("should get careers data", async () => {
    server.use(getCareers);

    const { status, data } = await axios.get(
      "https://dragmove.github.io/nop/data/careers.json"
    );

    expect(status).toEqual(200);

    expect(data).toEqual([
      {
        id: 5,
        company: "포티투닷",
        company_eng: "42dot",
        position: "Front-end Engineer",
        date: "2020.08 - ",
      },
    ]);
  });
});
