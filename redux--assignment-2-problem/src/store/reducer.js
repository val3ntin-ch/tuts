const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(), // not really unique but good enough here!
          name: action.personData.name,
          age: action.personData.age
        })
      };

    case 'DELETE_PERSON':
      const updatedArray = state.persons.filter(person => person.id !== action.personId);
      return {
        ...state,
        persons: updatedArray
      };

    default:
      return state;
  }
};

export default reducer;
