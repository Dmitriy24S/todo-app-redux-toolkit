import { render, screen } from '@testing-library/react'
// import { useSelector } from 'react-redux'
import * as reduxHooks from 'react-redux'

import TotalCompleteItems from '../TotalCompleteItems'

jest.mock('react-redux')

// const mockedSelector = jest.spyOn(useSelector).mockReturnValue([])
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([])

describe('TotalCompleteItems', () => {
  it('should render correct amount of completed items', () => {
    mockedSelector.mockReturnValue([
      {
        completed: true,
      },
      {
        completed: true,
      },
    ])
    const component = render(<TotalCompleteItems />)

    // expect(screen.getByText('Total Complete Items: 1')).toBeInTheDocument() // ! TypeError: expect(...).toBeInTheDocument is not a function (jest-dom?)
    // expect(screen.getByTestI('total-complete-items')).toHaveTextContent('Total Complete Items: 1') // ! TypeError: expect(...).toHaveTextContent is not a function

    expect(screen.getByTestId('total-complete-items').textContent).toBe(
      'Total Complete Items: 2'
    )
    expect(component).toMatchSnapshot()
  })
})
