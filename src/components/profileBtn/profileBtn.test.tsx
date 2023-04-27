import { render, screen } from '@testing-library/react'
import ProfileBtn from "./ProfileBtn";

test("Profile button should be on the page", () => {
  render(<ProfileBtn />)
  const profileBtn = screen.getByText(/hello world/);
  expect(profileBtn).toBeInTheDocument();
})