import Login from "../components/Login/Login";
import { render, screen,fireEvent,act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import logimg from "../assests/lgimg.avif"
test("render Title", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const titleLogin = screen.getByRole("heading");
  expect(titleLogin).toBeInTheDocument();
});

test("render label Email", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const labelEmail = screen.getByTitle("label-email");
  expect(labelEmail).toBeInTheDocument();
});

test("render  Email", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const labelEmail = screen.getByRole("textbox");
  expect(labelEmail).toBeInTheDocument();
});

test("render input placeHolder", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const inputPlaceholder = screen.getByPlaceholderText("Email");
  expect(inputPlaceholder).toBeInTheDocument();
  expect(inputPlaceholder.nodeValue).toBe(null);
});

test("render button submit", async() => {
    
    render(
      <Router>
        <Login />
      </Router>
    );
    await act(async () => {
    const buttonSubmit=screen.getByText(/submit/i);
    const inputField = screen.getByPlaceholderText("Email");
    expect(buttonSubmit).toBeInTheDocument();
     expect(inputField.value).toBe("")
     expect(inputField.disabled).toBe(false)
     expect(buttonSubmit).toBeDisabled()
    fireEvent.click(buttonSubmit)
    })
  })
    test("render button signup",async()=>{
        render(
            <Router>
              <Login />
            </Router>
          );
          await act(async () => {
          const buttonSignup=screen.getByText(/signup/i)
          expect(buttonSignup.textContent).toBe("Signup")
          expect(buttonSignup).toBeEnabled()
          expect(buttonSignup.disabled).toBe(false);
          fireEvent.click(buttonSignup)
    })
  })


    test("render image",()=>{
        render(
            <Router>
              <Login />
            </Router>
          );
          const renderImage=screen.getByRole("img")
          expect(renderImage).toBeInTheDocument();
          expect(renderImage).toHaveAttribute("class","login__image css-0")
          expect(renderImage).toHaveAttribute("src",logimg)
    })