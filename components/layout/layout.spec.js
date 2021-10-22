import { render } from "@testing-library/react";
import Layout from "./layout";

// eslint-disable-next-line
jest.mock("../logo/logo", () => () => <img src="test.jpg" alt="logo" />);

// eslint-disable-next-line
jest.mock("../navigation/navigation", () => () => <nav>Navigation</nav>);

// eslint-disable-next-line
jest.mock("../footer/footer", () => () => <footer>Footer</footer>);

describe("layout", () => {
  it("should match snapshot", () => {
    const { container } = render(<Layout>children</Layout>);
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="flex flex-col min-h-screen"
  >
    <header
      class="flex p-2.5 justify-between"
    >
      <img
        alt="logo"
        src="test.jpg"
      />
      <nav>
        Navigation
      </nav>
    </header>
    <main
      class="p-2.5 flex-grow"
    >
      children
    </main>
    <footer>
      Footer
    </footer>
  </div>
</div>
`);
  });
});
