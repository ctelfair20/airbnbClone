import { render, screen, cleanup } from '@testing-library/react'
import GlobleBtn from './GlobleBtn'

afterEach(cleanup)

describe('GlobleBtn', () => {
  it('should be in the document', () => {
    render(<GlobleBtn />)
    const globleIcon = screen.getByLabelText('globle-button')
    expect(globleIcon).toBeInTheDocument()
  })
})