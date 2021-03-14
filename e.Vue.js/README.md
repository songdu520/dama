## 学习目标
  - Vue基础
  - Vue进阶
  - Vue项目
  - TypeScript
  - Vue服务端渲染
  - Vue3.0
  - 项目上线
  - webpack

#### 为什么要使用框架
  - 提高工作效率，省钱
  - 提高性能
  - 当项目很大的时候，帮助我们有一个正规的组织形式

#### 什么是Vue.js
  - 官网： https://cn.vuejs.org/
  - 作者： 尤雨溪
  - 特点：
    - 易用： 已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！
    - 灵活： 不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。
    - 高效： 20kB min+gzip 运行大小 超快虚拟 DOM 最省心的优化
    - 受欢迎： 在github上有176k的star
  - Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
  - 与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
  - core -> 引入vue自身周边库（vue-router/vuex等等） -> 引入第三方库（axios） -> 测试工具/ts/服务端渲染


#### 声明式渲染
  - Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
    - 如果是内容 使用 {{  }}
    - 如果是属性 使用 v-bind:xxx="yyy"

#### 条件与循环
  - 条件 v-if
    - 控制一个元素是否被渲染,可以写变量，也可以写表达式
  - 循环 v-for
    - 循环展示列表
    - <p v-for="item in arr">{{ item }}</p>

#### 处理用于输入（事件）
  - v-on:click="change"
  - option -> methods
  - methods: {
    change() {
      // xxxxx
    }
  }
#### 数据双向绑定
 - v-model
 - v-model是v-bind和v-on的语法糖


#### options
  - el
  - data
  - methods
  - computed

#### 指令
  - v-bind    缩写成 :
  - v-if
  - v-for
  - v-model
  - v-on      缩写成 @
  - v-once    只渲染一次
  - v-html    将内容转成标签解析    innerHTML
  - v-text    将内容直接输出        innerTEXT
  - v-else    后面没东西，紧挨着v-if
  - v-else-if
  - v-show


#### v-if和v-show的区别
  v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

  v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

  相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

  一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

  v-show不能用template标签，以及v-else和v-else-if

#### mvc mvp mvvm的区别(面试)
  - 他们都是常见的软件架构思想
  - mvc
    - 视图（View）：用户界面。
    - 控制器（Controller）：业务逻辑
    - 模型（Model）：数据保存
    - 通信方式 ： view -> controller -> model -> view
  - mvvm
    - 视图（View）
    - 模型（Model）
    - 视图模型（ViewModel）
    - 通信方式 ： view <-> ViewModel -><- model


#### 计算属性 vs 方法
  - 计算属性是被动的，只有依赖的响应式数据改变的时候才会重新求值，而不能主动更改。
  - 计算属性可能同时依赖多个响应式数据，其中一个改变就会重新求值
  - 计算属性也能依赖于其他的计算属性
  - 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。

#### 计算属性 vs 侦听属性
  - 计算属性是被动，别人改变我才改变
  - 可以依赖多个

  - 侦听属性是主动，我改变了再让别人改变，或者执行一些方法
  - 只能侦听一个

  - 优先考虑计算属性


#### 组件间的状态通信
  - 父传子
    在父组件里面自定义一个属性
    在子组件里面用props接受

    插槽

    使用this.$root或者this.$parent

    依赖注入(穿透性)
    父组件使用 /prəˈvaɪd/提供 provide() {return {xxxx}}
    子组件    /ɪnˈdʒekt/注入  inject: ['xxxx']

  - 子传父
    在父组件里面定义一个自定义的方法
    在子组件里面调用this.$emit()
    this.$emit()的第一个参数是自定义方法的名字，后面是参数

    作用域插槽

    使用this.$refs





#### 单向数据流
  - 所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

  - 额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

  - 如果想改变，可以将props作为初始值，赋值给data或者computed



#### 插槽
  - 内容分发(可以分发内容/元素/组件)
  - 具名插槽
    - 使用template标签，需要用到v-slot:header，可以简写成#
    - <slot name="header"></slot>
    - slot的name属性默认是default， 如果没有tempalte标签，就都会放入这个默认的slot


#### vue脚手架
  - vue-cli
  - 安装 npm install -g @vue/cli
  - 创建项目  vue create <项目名称>   (不要用git base去创建 ， 用vscode或者cmd)
    - Please pick a preset  ->  Manually select features(自定义选择安装)
    - Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
      (*) Choose Vue version
      (*) Babel   // es6转es5
      ( ) TypeScript
      ( ) Progressive Web App (PWA) Support
      (*) Router   // 路由
      (*) Vuex     // 全局状态管理
      (*) CSS Pre-processors   // css预编译工具
      (*) Linter / Formatter   // 代码风格检查工具
      ( ) Unit Testing
      ( ) E2E Testing
    - Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)    ->  n
    - Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default)
      -> sass
    - Pick a linter / formatter config: (Use arrow keys)

#### 目录结构
  - node_modules      项目所用到的依赖包
  - public            静态资源目录（不会被打包进去的）
    - favicon.ico     小图标
    - index.html      html文件(一个项目都只有一个html文件，单页面应用 spa)
  - src               源目录，开发目录
    - assets          静态资源目录（会被打包的）
    - components      存放组件的文件夹
    - router          存放路由的文件夹
    - store           存放vuex的文件夹
    - views           存放页面的文件夹（大一点的组件）
    - App.vue         项目的根组件
    - main.js         项目的入口的js文件
  - .browserslistrc   显示浏览器支持
  - .eslintrc         eslint的配置文件
  - .gitignore        git的忽略上传的文件
  - babel.config.js   用于配置babel的文件
  - package.json      项目依赖的记录文件
  - package-lock.json
  - README.md         项目说明

#### 单文件组件
  - 后缀是.vue
  - template  script  style

#### 移动端适配
  - 使用postcss的postcss-pxtorem(转换单位的), lib-flexible（定义跟字体大小）插件
  - 安装 npm i amfe-flexible -S
  - 安装 npm i postcss-pxtorem -D
  - 在main.js里面引入 import "amfe-flexible"
  - 在根目录创建一个文件 .postcssrc.js
    ```
      module.exports = {
        plugins: {
          autoprefixer: {
            browsers: ['Android >= 4.0', 'iOS >= 8'],
          },
          'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
          },
        },
      };
    ```

#### 文件后缀省略规则
  先看有没有.json -> .js -> .vue


#### better-scroll插件
  官网 https://better-scroll.github.io/docs/zh-CN/guide/#%E6%BB%9A%E5%8A%A8%E5%8E%9F%E7%90%86
  注意：
    1. 父元素必须有确定的宽高
    2. 子元素的外面要套一层
    3. 父元素overflow: hidden;
  安装：
    cnpm install better-scroll --save
  使用： 
    谁需要滚动，就给谁加
    pullUpLoad: true 这个配置项用于允许元素上拉加载
    配合bs.on("pullingUp", () => {
      // 加载数据和逻辑处理
      bs.refresh()   // 重新计算容器高度
      bs.finishPullUp()  // 表示这次已经结束了，可以进行下一次了
    })方法做上拉加载

#### Vue-Router
  router-link:
    to属性: to 属性指定目标地址
    replace属性： 让浏览器没有历史记录
    tag属性：换标签
    active-class属性: 设置高亮的类名


#### 路由守卫
  - 全局的前置守卫
    - router.beforeEach
    - 接受一个回调函数，函数有三个参数 to, from, next
    - to和from都是route，表示要去的和所在的路由
    - next()表示放行  next(false)表示不放行  next(path)表示重定向
    - next只能被执行一次

  - 全局后置钩子
    - router.afterEach
    - 接受一个回调函数，函数有两个个参数 to, from

  - 路由独享的守卫
    - beforeEnter
    - 写在单个的路由里面
    - 用法和beforeEach一致

  - 组件内的守卫
    - beforeRouteEnter 
    - beforeRouteUpdate
      - 用来解决query或者params改变的时候，页面不触发生命周期钩子的问题
    - beforeRouteLeave

  - 完整的导航解析流程
    - 导航被触发。
    - 在失活的组件里调用 beforeRouteLeave 守卫。
    - 调用全局的 beforeEach 守卫。
    - 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    - 在路由配置里调用 beforeEnter。
    - 解析异步路由组件。
    - 在被激活的组件里调用 beforeRouteEnter。
    - 调用全局的 beforeResolve 守卫 (2.5+)。
    - 导航被确认。
    - 调用全局的 afterEach 钩子。
    - 触发 DOM 更新。
    - 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。



#### Vuex
  vuex是状态管理模式（全局状态管理工具）
  vuex由5部分组成
    - state
    - mutations 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件
    - actions 
              Action 类似于 mutation 
              Action 提交的是 mutation，而不是直接变更状态。
              Action 可以包含任意异步操作。

    - getters   可以认为是 store 的计算属性   mapGetters 
    - modules  