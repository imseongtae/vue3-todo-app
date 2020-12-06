# vue3-todo-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## ESLint setting

```bash
yarn add -D @vue/cli-plugin-babel @vue/cli-plugin-eslint @vue/cli-plugin-unit-jest @vue/cli-service @vue/eslint-config-prettier @vue/test-utils babel-eslint eslint eslint-plugin-prettier eslint-plugin-vue prettier vue-template-compiler
```

## vue-router setting

```bash
npm install vue-router@4.0.0-beta.5
```


## 속성 상속을 제어하는 inheritAttrs
부모 컴포넌트의 요소에 속성을 추가하면 자녀 컴포넌트의 루투 요소에 속성이 추가되는데, 이를 속성 상속(attribute inheritance)이라고 한다. 아래와 같이 inheritAttrs: false를 주어서 상속을 막는 문법이 `2.4.0` 이후 추가됨

```js
export default {
	inheritAttrs: false,
	props: {
		todoItems: {
			type: Array,
			required: true,
		},
  },
}
```