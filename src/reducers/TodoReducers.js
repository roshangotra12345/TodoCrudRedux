const initialData = [];

const todoReducers = (state = initialData, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      if (action.payload?.payload) {
        return (state = [...state, action.payload]);
      }
    case 'DELETE_TODO':
      return state.filter(elem => elem.id !== action.payload);

    case 'UPDATE_TODO':
      const newArr = [];
      state.forEach(elem => {
        if (elem.id == action.payload.id) {
          elem.payload = action.payload.payload;
          newArr.push(elem);
        } else {
          newArr.push(elem);
        }
      });
      return [...newArr];

    default:
      return state;
  }
};

export default todoReducers;
