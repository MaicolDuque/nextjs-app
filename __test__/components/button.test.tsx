
import { fireEvent, render, screen } from '@testing-library/react'

import { AloButton } from '@components/AloButton'


describe('Button', () => {
  it('should fire onClik event when is clicked', () => {
    let responseOnClick = ''
    render(<AloButton onClick={() => responseOnClick = 'clicked'} text="My Button" />)
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(responseOnClick).toEqual('clicked')
  })

  it('should show button disabled', () => {
    render(<AloButton onClick={() => null } text="My Button" disabled={true} />)
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(button).toBeDisabled()
  })

  it('should show My Button text', () => {
    render(<AloButton onClick={() => null } text="My Button" disabled={true} />)
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(button).toHaveTextContent('My Button')
  })
})
