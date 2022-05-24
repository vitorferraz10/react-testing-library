import { fireEvent, render } from '@testing-library/react';
import TodoList from './index'
describe('', () => {
   it('should add new task in TodoList', () => {
      const { getByTestId } = render(<TodoList />)

      const input = getByTestId('input-todo')
      const form = getByTestId('form-todo')

      fireEvent.change(input, { target: { value: 'new task' } })
      fireEvent.submit(form)

      const listRender = getByTestId('item-add-todo')
      expect(listRender).toBeInTheDocument()

      const btnDelete = getByTestId('btn-delete-task')
      expect(btnDelete).toBeInTheDocument()

      fireEvent.click(btnDelete)
      expect(listRender).not.toBeInTheDocument()

   });
})

