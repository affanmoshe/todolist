import React from 'react';
import TodoList from './components/todolist';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TodoList />
    </div>
  );
};

export default App;
