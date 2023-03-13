import Signup from "../components/Signup/Signup"
import { render,screen,fireEvent,act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import logimg from "../assests/lgimg.avif"

test("render title",()=>{
    render(
        <Router>
          <Signup/>
        </Router>
      );
      const titleAccount=screen.getByTitle("head")
      expect(titleAccount.textContent).toBe("Create an Account")
      expect(titleAccount).toBeInTheDocument()
})

test("render labels",()=>{
    render(
        <Router>
          <Signup/>
        </Router>
      );
      const labelAll=screen.getAllByLabelText(/enter/i)
      expect(labelAll.length).toBe(1);
})


test("render placeholder Email",()=>{
  render(
      <Router>
        <Signup/>
      </Router>
    );
const placeholderName=screen.getAllByPlaceholderText(/name/i);
const placeholderEmail=screen.getAllByPlaceholderText(/email/i);
expect(placeholderName.length).toBe(1)
expect(placeholderEmail.length).toBe(1)
  })


  
// test("render errortext",()=>{
//   render(
//       <Router>
//         <Signup/>
//       </Router>
//     );
// const error=screen.queryByText(/This is required/i);
// const errortextMini=screen.queryByText(/Minimum length should be 4/i);
// const errormail=screen.queryByText(/enter the valid email/i);
// //  expect(errortextMini.["email"].message).toBe(null);
//  expect(errormail["email"].innerText).toBe(null);
//   })


  test("render button",async()=>{
    render(
        <Router>
          <Signup/>
        </Router>
      );
      await act(async () => {
      const buttonSubmit=screen.getByText(/submit/i);
      const buttonLogin=screen.getByText(/login/i);
      fireEvent.click(buttonSubmit)
      fireEvent.click(buttonLogin)
    })
  })

    test("render image",()=>{
      render(
          <Router>
            <Signup />
          </Router>
        );
        const renderImage=screen.getByRole("img")
        expect(renderImage).toBeInTheDocument();
        expect(renderImage).toHaveAttribute("class","signup__image css-0")
        expect(renderImage).toHaveAttribute("src",logimg)
  })