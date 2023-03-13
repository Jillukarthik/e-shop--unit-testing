import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard/Dashboard.js";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

test("render dashboard Title", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const headingProduct = screen.getByRole("heading", {
    name: /products/i,
  });
  expect(headingProduct).toBeInTheDocument();
});

test("render dashboard logout", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const buttonLogout = screen.getByRole("button", {
    name: /logout/i,
  });
  expect(buttonLogout).toBeInTheDocument();
});

test("render dashboard footercopy rights", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const copyRights = screen.getByText(/e-store © 2023/i);
  expect(copyRights).toBeInTheDocument();
});

test("render dashboard name", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const username = screen.getByTitle("header__name");
  const shop = screen.getByTitle("header__estore");
  expect(username).toBeInTheDocument();
  expect(shop.textContent).toBe("E-Store");
  expect(shop).toBeInTheDocument();
});

test("renders 4 products", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(4);
});

test("renders  products", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const productOne = screen.getByText(/product 1/i);
  const productTwo = screen.getByText(/product 2/i);
  const productthree = screen.getByText(/product 3/i);
  const productFour = screen.getByText(/product 4/i);

  expect(productOne).toBeInTheDocument();
  expect(productTwo).toBeInTheDocument();
  expect(productthree).toBeInTheDocument();
  expect(productFour).toBeInTheDocument();
});

test("renders  exit button", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const conformBtn = screen.getByText(/are you sure you want to logout/i);
  const banner=screen.getByText(/confirmation/i)
  const no=screen.getByText(/no/i)
  const yes=screen.getByText(/yes/i)
  expect(no).toBeInTheDocument();
  expect(yes).toBeInTheDocument();
  expect(conformBtn).toBeInTheDocument();
  expect(banner).toBeInTheDocument();
});