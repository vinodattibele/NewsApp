import { describe, expect, it } from "vitest";
import mockDatabase from "../src/data/mock-db.json";
import { getMockApiData } from "../src/Utils/MockApi";

describe("MockApi", () => {
  it("returns the database and frontpage resources", async () => {
    await expect(getMockApiData("/api/db")).resolves.toEqual(mockDatabase);
    await expect(getMockApiData("/api/frontpage")).resolves.toEqual(
      mockDatabase.frontpage
    );
  });

  it("returns all articles and individual article resources", async () => {
    await expect(getMockApiData("/api/articles")).resolves.toEqual(
      mockDatabase.articles
    );
    await expect(getMockApiData("/api/articles/1")).resolves.toEqual(
      mockDatabase.articles[0]
    );
    await expect(getMockApiData("/api/articles/2")).resolves.toEqual(
      mockDatabase.articles[1]
    );
  });

  it("returns an error for unknown resources", async () => {
    await expect(getMockApiData("/api/unknown")).rejects.toThrow(
      'Mock API: no resource found for "/api/unknown"'
    );
  });
});
