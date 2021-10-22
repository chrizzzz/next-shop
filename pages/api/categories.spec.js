import handler, { translationEnglish, translationGerman } from "./categories";
import axois from "axios";
jest.mock("axios");

describe("category api", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return status code 405 and text not allowed, when request is not a get", async () => {
    axois.get.mockResolvedValue({ data: { test: "test" } });

    const endMock = jest.fn();
    const statusMock = jest.fn().mockReturnValue({ end: endMock });

    await handler({ method: "POST", query: {} }, { status: statusMock });

    expect(statusMock).toHaveBeenCalledWith(405);
    expect(endMock).toHaveBeenCalledWith("Not Allowed");
  });

  it("should return categories as json with status code 202, when request is a get", async () => {
    axois.get.mockResolvedValue({ data: { test: "test" } });

    const jsonMock = jest.fn();
    const statusMock = jest
      .fn()
      .mockReturnValue({ json: jsonMock, end: jest.fn() });

    await handler({ method: "GET", query: {} }, { status: statusMock });

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(translationEnglish);
  });

  describe("with translation parameter in request", () => {
    it("should return english translation, when parameter is en", async () => {
      axois.get.mockResolvedValue({ data: { test: "test" } });

      const jsonMock = jest.fn();
      const statusMock = jest
        .fn()
        .mockReturnValue({ json: jsonMock, end: jest.fn() });

      await handler(
        { method: "GET", query: { lang: "en" } },
        { status: statusMock }
      );

      expect(jsonMock).toHaveBeenCalledWith(translationEnglish);
    });

    it("should return german translation, when parameter is de", async () => {
      axois.get.mockResolvedValue({ data: { test: "test" } });

      const jsonMock = jest.fn();
      const statusMock = jest
        .fn()
        .mockReturnValue({ json: jsonMock, end: jest.fn() });

      await handler(
        { method: "GET", query: { lang: "de" } },
        { status: statusMock }
      );

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(translationGerman);
    });
  });
});
