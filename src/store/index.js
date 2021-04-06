import create from 'zustand';

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, {
      ...todo,
      id: state.todos.length === 0 ? 0 : Math.max(...state.todos.map((i) => i.id)) + 1,
    }],
  })),
  updateTodo: () => set(),
  deleteTodo: () => set(),

}));

export default useStore;
