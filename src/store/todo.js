import { reactive, readonly } from 'vue';

const createStore = () => {
  const state = reactive({
    list: [],
  });

  const push = content => {
    state.list.push({
      content,
    });
  };

  const remove = index => {
    state.list.splice(index, 1);
  };

  return {
    state: readonly(state),
    push,
    remove,
  };
};

export default createStore;
