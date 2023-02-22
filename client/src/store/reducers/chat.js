export const ADD_PROMPT = 'ADD_PROMPT';
export const ADD_RESPONSE = 'ADD_RESPONSE';

//Action Creators below:

export const addPrompt = (prompt) => ({
  type: ADD_PROMPT,
  payload: prompt,
});

export const addResponse = (response) => ({
  type: ADD_RESPONSE,
  payload: response,
});

const initialState = {
  prompts: [],
  responses: [],
};

//Reducer below:

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROMPT:
      return {
        ...state,
        prompts: [...state.prompts, action.payload],
      };
    case ADD_RESPONSE:
      return {
        ...state,
        responses: [...state.responses, action.payload],
      };
    default:
      return state;
  }
};

export default chatReducer;
