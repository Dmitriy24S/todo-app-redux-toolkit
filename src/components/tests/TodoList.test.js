import { render, screen } from '@testing-library/react'
// import { useSelector } from 'react-redux'
import * as reduxHooks from 'react-redux'
import TodoList from '../TodoList'

jest.mock('react-redux')

const todos = [
  { id: 111, title: 'React', completed: false },
  { id: 222, title: 'Redux', completed: false },
]

const mockedSelector = jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([])

describe('TodoList', () => {
  // expect(screen.getByRole('list')).toBeIntheDocument()
  // expect(screen.getByText('html')).toBeIntheDocument()

  it('should create TodoList with empty todos', () => {
    // useSelector.mockReturnValue([])
    // jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([])
    mockedSelector.mockReturnValue([])

    const component = render(<TodoList />)

    expect(component).toMatchSnapshot()
  })

  it('should create TodoList with todo items', () => {
    // useSelector.mockReturnValue(todos)
    // jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(todos)
    mockedSelector.mockReturnValue(todos)

    const component = render(<TodoList />)

    expect(component).toMatchSnapshot()
  })
})
