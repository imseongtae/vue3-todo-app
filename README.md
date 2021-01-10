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


## tailwindcss
다 된 Vue에 tailwindcss 뿌리기  
Vue에 tailwindcss를 얹히는 건 매우 간단하다. 기본적으로 @vue/cli를 통해 프로젝트를 생성했다면 준비해야 될 것들이 별로 없다. 먼저 설치를 한다.

```bash
yarn add tailwindcss
```

설치를 한 뒤에 npx로 tailwindcss 설정 파일을 생성하는 스크립트를 실행한다.

```bash
npx tailwind init --full
```

끝에 --full 옵션을 주게되면 기본 설정 값을 가지는 파일을 만들어서 준다. 줘도 되고 안줘도 된다. 그런 다음, 스타일 파일 하나를 생성한다.

```bash
/* assets/tailwind.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```


```bash
// postcss.config.js
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [autoprefixer, tailwindcss]
}
```


```bash
yarn add --dev @fullhuman/postcss-purgecss
```

```js
// postcss.config.js

const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
+const postcssPurgecss = require(`@fullhuman/postcss-purgecss`)

+const purgecss = postcssPurgecss({
+  content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js'],
+  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
+  whitelistPatterns: [
+   /-(leave|enter|appear)(|-(to|from|active))$/,
+   /^(?!(|.*?:)cursor-move).-move$/,
+   /^router-link(|-exact)-active$/
+ ]
+})

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
+   process.env.NODE_ENV !== 'development' ? purgecss : ''
  ]
}
```


- [출처](https://imkh.dev/vue-tailwindcss/)


