import { fireEvent, render, screen } from '@testing-library/react'
// import { useSelector } from 'react-redux'
import * as reduxHooks from 'react-redux'
import * as actions from '../../redux/todoSlice'
import TodoItem from '../TodoItem'

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

describe('TodoItem', () => {
  it('should create TodoItem', () => {
    mockedDispatch.mockReturnValue(jest.fn()) // !

    // const component = render(<TodoItem />)
    const component = render(<TodoItem id='111' title='Redux' completed={false} />)

    // expect(component).toBeInTheDocument() // ! TypeError: expect(...).toBeInTheDocument is not a function
    expect(component).toMatchSnapshot()
  })

  it('should dispatch action toggleComplete', () => {
    const dispatch = jest.fn()
    mockedDispatch.mockReturnValue(dispatch)

    const mockedToggleComplete = jest.spyOn(actions, 'toggleComplete')

    render(<TodoItem id='111' title='Redux' completed={false} />)

    fireEvent.click(screen.getByRole('checkbox'))

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(mockedToggleComplete).toHaveBeenCalled()
    // ! toHaveBeenCalledWith('123')
    // ! dispatch(toggleComplete({ id, completed: !completed }));
    expect(mockedToggleComplete).toHaveBeenCalledWith({
      id: '111',
      //   title: 'Redux', // !
      completed: true,
    })
  })

  it('should dispatch action deleteTodo', () => {
    const dispatch = jest.fn()
    mockedDispatch.mockReturnValue(dispatch)

    const mockedDeleteTodo = jest.spyOn(actions, 'deleteTodo')

    render(<TodoItem id='111' title='Redux' completed={false} />)

    fireEvent.click(screen.getByRole('button'))

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(mockedDeleteTodo).toHaveBeenCalled()
    expect(mockedDeleteTodo).toHaveBeenCalledWith({
      id: '111',
    })
  })
})
