import React from 'react';

type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex justify-between p-4 border rounded mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="ml-4 text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
