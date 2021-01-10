<template>
	<div class="todo-wrapper">
		<form @submit.prevent="onSubmit" class="form">
			<fieldset class="form__fieldset">
				<legend class="form__title">To Do App</legend>
				<p class="form__input-container">
					<input class="form__input" v-model="state.content" type="text" />
					<button ref="$submitButton" class="form__submit-btn" type="submit">
						추가 📌
					</button>
				</p>
			</fieldset>
		</form>
		<ul class="todo-list">
			<!-- <div v-for="(items, date) of list" :key="date"> -->
			<!-- 테스트를 위해 template에서 한 번 더 데이터를 꺼내서 반복해봄 -->
			<template v-for="items in state.todoList">
				<todo-item
					v-for="item of items"
					:key="item.id"
					:index="item.id"
					:content="item.content"
					@remove="removeTodoItem"
				/>
			</template>
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
	data() {
		return {
			list: {
				'2020-12-26': [
					{ content: 'content-1', id: 1 },
					{ content: 'content-2', id: 2 },
				],
				'2020-12-28': [{ content: 'content-1', id: 1 }],
			},
		};
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
