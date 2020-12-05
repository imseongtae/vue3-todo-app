<template>
	<div class="todo-wrapper">
		<form @submit.prevent="onSubmit" class="form">
			<fieldset class="form__wrapper">
				<legend class="form__title">To Do App</legend>
				<p class="todo-input">
					<input class="form__input" v-model="state.content" type="text" />
					<button ref="$submitButton" class="form__submit-btn" type="submit">
						추가 📌
					</button>
				</p>
			</fieldset>
		</form>
		<ul class="todo-list">
			<todo-item
				class="todo-item"
				:todo-items="state.todoList"
				@remove="removeTodoItem"
			/>
		</ul>
	</div>
</template>

<script>
import { reactive, inject } from 'vue';

import TodoItem from '@/components/TodoItem.vue';

export default {
	name: 'Home',
	components: {
		TodoItem,
	},

	setup() {
		const todo = inject('todo');
		const state = reactive({
			content: '',
			todoList: todo.state.list,
		});

		const onSubmit = () => {
			// state.todoList.push({ content: state.content });
			todo.push(state.content);
			state.content = '';
		};

		const removeTodoItem = index => {
			// state.todoList.splice(index, 1);
			todo.remove(index);
		};

		return {
			state,
			onSubmit,
			removeTodoItem,
		};
	},
};
</script>

<style lang="scss" scoped>
// inheritAttrs test
.todo-item {
	border: 3px solid dodgerblue;
}
</style>
