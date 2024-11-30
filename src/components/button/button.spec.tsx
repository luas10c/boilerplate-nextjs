import { jest, describe, it, expect } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './button'

describe('Button Tests', () => {
  it('should renders correctly', () => {
    render(
      <Button type="button">
        <span>Aaa</span>
      </Button>
    )

    expect(screen.getByRole('button', { name: 'Aaa' })).toBeInTheDocument()
  })

  it('should be able clicks', async () => {
    const handle = jest.fn()

    render(
      <Button type="button" onClick={handle}>
        <span>Aaa</span>
      </Button>
    )

    await userEvent.click(screen.getByRole('button', { name: 'Aaa' }))

    expect(handle).toHaveBeenCalledTimes(1)
  })

  it('should not be clickable when disabled', async () => {
    const handle = jest.fn()

    render(
      <Button type="button" onClick={handle} disabled>
        <span>Aaa</span>
      </Button>
    )

    await userEvent.click(screen.getByRole('button', { name: 'Aaa' }))

    expect(handle).toHaveBeenCalledTimes(0)
  })
})
