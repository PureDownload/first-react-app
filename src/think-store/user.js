const user = {
    state: {
      id: 123,
      name: "cc",
    },
    reducers: { //* 相当于mutation
      setName(state, payload) {
        return {
          ...state,
          ...payload,
        };
      },
    },
    effects: { //* 相当于action */
      async setNameAsync(dispatch, state, payload) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch({
          type: "setName",
          payload,
        });
      },
    },
  };
  export default user;