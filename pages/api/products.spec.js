import handler from "./products";
import axois from "axios";
jest.mock("axios");

describe("products", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("request is not a get request", () => {
    it("should status code 405 and text not allowed, when request is not a get", async () => {
      axois.get.mockResolvedValue({ data: { test: "test" } });

      const endMock = jest.fn();
      const statusMock = jest.fn().mockReturnValue({ end: endMock });

      await handler(
        { method: "POST", query: { limit: 4 } },
        { status: statusMock }
      );

      expect(statusMock).toHaveBeenCalledWith(405);
      expect(endMock).toHaveBeenCalledWith("Not Allowed");
    });

    it("should not call fake api, when request is not a get", async () => {
      axois.get.mockResolvedValue({ data: { test: "test" } });

      await handler(
        { method: "POST", query: { limit: 4 } },
        {
          status: jest
            .fn()
            .mockReturnValue({ json: jest.fn(), end: jest.fn() }),
        }
      );

      expect(axois.get).not.toHaveBeenCalled();
    });
  });

  describe("request is a get request", () => {
    it("should call fake api for products, when get request is made", async () => {
      axois.get.mockResolvedValue({ data: { test: "test" } });

      await handler(
        { method: "GET", query: {} },
        {
          status: jest
            .fn()
            .mockReturnValue({ json: jest.fn(), end: jest.fn() }),
        }
      );

      expect(axois.get).toHaveBeenCalledWith(
        "https://fakestoreapi.com/products"
      );
    });

    it("should return products as json with status code 202, when request is a get and products were successfully returned", async () => {
      axois.get.mockResolvedValue({ data: { test: "test" } });

      const jsonMock = jest.fn();
      const statusMock = jest
        .fn()
        .mockReturnValue({ json: jsonMock, end: jest.fn() });

      await handler(
        { method: "GET", query: { limit: 4 } },
        { status: statusMock }
      );

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith({ test: "test" });
    });

    describe("request contains a limit queryParam", () => {
      it("should call fake api for products with limits, when request contains a limit", async () => {
        axois.get.mockResolvedValue({ data: { test: "test" } });

        await handler(
          { method: "GET", query: { limit: 4 } },
          {
            status: jest
              .fn()
              .mockReturnValue({ json: jest.fn(), end: jest.fn() }),
          }
        );

        expect(axois.get).toHaveBeenCalledWith(
          "https://fakestoreapi.com/products?limit=4"
        );
      });
    });

    describe("request contains a category queryParam", () => {
      it("should call fake api for products with category, when request contains a category", async () => {
        axois.get.mockResolvedValue({ data: { test: "test" } });

        await handler(
          { method: "GET", query: { category: "test" } },
          {
            status: jest
              .fn()
              .mockReturnValue({ json: jest.fn(), end: jest.fn() }),
          }
        );

        expect(axois.get).toHaveBeenCalledWith(
          "https://fakestoreapi.com/products/category/test"
        );
      });
    });
  });
});
