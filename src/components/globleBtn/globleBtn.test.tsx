import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GlobleBtn from './GlobleBtn'

afterEach(cleanup)

describe('GlobleBtn', () => {
  it('should be in the document', () => {
    render(<GlobleBtn />)
    const globleIcon = screen.getByLabelText('globle-button')
    expect(globleIcon).toBeInTheDocument()
  })

  it('should have a container', () => {
    render(<GlobleBtn />)
    const globleContainer = screen.getByRole('button', { name: 'globle-button' })
    const globleIcon = screen.getByLabelText('globle-button')

    expect(globleContainer).toBeInTheDocument()
    expect(globleIcon).toBeInTheDocument()
    expect(globleContainer).toContainElement(globleIcon)
  })

  it('should have a light grey backdrop on hover', () => {
    render(<GlobleBtn />)
    const user = userEvent.setup()

    const globleIcon = screen.getByLabelText('globle-button')
    user.hover(globleIcon)
    expect(globleIcon).toHaveStyle({ background: '#fff' })
  })
})