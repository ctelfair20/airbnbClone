import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GlobeBtn from './GlobeBtn'

afterEach(cleanup)
// TODO: the globle should be a button element and the globle icon should sit inside of the button
describe('GlobleBtn', () => {
  it('should be in the document', () => {
    render(<GlobeBtn />)
    const globeIcon = screen.getByLabelText('globle-button')
    expect(globeIcon).toBeInTheDocument()
  })

  it('should have a container', () => {
    render(<GlobeBtn />)
    const globeContainer = screen.getByRole('button', { name: 'globle-button' })
    const globeIcon = screen.getByLabelText('globle-button')

    expect(globeContainer).toBeInTheDocument()
    expect(globeIcon).toBeInTheDocument()
    expect(globeContainer).toContainElement(globeIcon)
  })

  it('should have a light grey backdrop on hover', () => {
    render(<GlobeBtn />)
    const user = userEvent.setup()

    const globeIcon = screen.getByLabelText('globle-button')
    user.hover(globeIcon)
    expect(globeIcon).toHaveStyle({ background: '#fff' })
  })
})