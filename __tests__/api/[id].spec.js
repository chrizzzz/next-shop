import handler from "../../pages/api/products/[id].page";
import axois from "axios";
jest.mock("axios");

describe("product detail api", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return status code 405 and text not allowed, when request is not a get", async () => {
    axois.get.mockResolvedValue({ data: { test: "test" } });

    const endMock = jest.fn();
    const statusMock = jest.fn().mockReturnValue({ end: endMock });

    await handler({ method: "POST", query: { id: 4 } }, { status: statusMock });

    expect(statusMock).toHaveBeenCalledWith(405);
    expect(endMock).toHaveBeenCalledWith("Not Allowed");
  });

  it("should not call fake api, when request is not a get", async () => {
    axois.get.mockResolvedValue({ data: { test: "test" } });

    await handler(
      { method: "POST", query: { id: 4 } },
      { status: jest.fn().mockReturnValue({ json: jest.fn(), end: jest.fn() }) }
    );

    expect(axois.get).not.toHaveBeenCalled();
  });

  it("should return status code 404 and text bad request, when request is a get but does not contain an id", async () => {
    axois.get.mockResolvedValue({ data: { test: "test" } });

    const endMock = jest.fn();
    const statusMock = jest.fn().mockReturnValue({ end: endMock });

    await handler({ method: "POST", query: {} }, { status: statusMock });

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(endMock).toHaveBeenCalledWith("Bad Request");
  });

  it("should not call fake api, when request is a get but does not contain an id", async () => {
    axois.get.mockResolvedValue({ data: { test: "test" } });

    await handler(
      { method: "POST", query: {} },
      { status: jest.fn().mockReturnValue({ json: jest.fn(), end: jest.fn() }) }
    );

    expect(axois.get).not.toHaveBeenCalled();
  });

  it("should call fake api for product, when get request is made", async () => {
    axois.get.mockResolvedValue({ data: { test: "test" } });

    await handler(
      { method: "GET", query: { id: "1" } },
      { status: jest.fn().mockReturnValue({ json: jest.fn(), end: jest.fn() }) }
    );

    expect(axois.get).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products/1"
    );
  });

  it("should return product as json with status code 202, when request is a get and contains an id", async () => {
    axois.get.mockResolvedValue({ data: { test: "test" } });

    const jsonMock = jest.fn();
    const statusMock = jest
      .fn()
      .mockReturnValue({ json: jsonMock, end: jest.fn() });

    await handler({ method: "GET", query: { id: 4 } }, { status: statusMock });

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({ test: "test" });
  });
});
