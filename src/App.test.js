import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import App from "./App";

test("Verify Login completes", () => {
  let result = render(<Login />);
  const loginElement = screen.getByText('Login with Google');
  expect(loginElement).toBeInTheDocument();
  fireEvent.click(loginElement);
  result = render(<App name="Kyle" />);
  const textElement = screen.getByText('Kyle');
  expect(textElement).toBeInTheDocument();
});