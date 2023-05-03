import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import ProfileBtn from "./ProfileBtn";

afterEach(cleanup);

describe("ProfileBtn", () => {
  it("should be on the page", () => {
    render(<ProfileBtn />)
    const profileBtn = screen.getByRole('button');
    expect(profileBtn).toBeInTheDocument();
  })

  it("should have a box shadow when moused over", () => {
    // set up user event BEFORE rendering components
    const user = userEvent.setup();
    render(<ProfileBtn />);

    const profileBtn = screen.getByRole('button');
    user.hover(profileBtn);
    expect(profileBtn).toHaveClass('profile-button');
  })

  it("should NOT have a box shadow", () => {
    const user = userEvent.setup()
    render(<ProfileBtn />)
    const profileBtn = screen.getByRole('button');
    user.unhover(profileBtn);
    expect(profileBtn).not.toHaveStyle('box-shadow: 2px 2px 2px gray');
  })

  it("shoule contain a profile image", () => {
    render(<ProfileBtn />)
    const profilePic = screen.getByLabelText("profile-picture");
    expect(profilePic).toBeInTheDocument();
  })

  it("shoule contain a menu image", () => {
    render(<ProfileBtn />)
    const menuPic = screen.getByLabelText("menu");
    const profileBtn = screen.getByRole("button", { name: "profile-button" });
    expect(profileBtn).toContainElement(menuPic);
  })
})
