## 1.Vue3.0六大亮点
  - Performance: 性能比Vue 2.x快了1.2-2倍
  - Tree shaking support: 按需编译，体积比Vue 2.x更小
  - Composition API: 组合API（类似React Hooks）
  - Better TypeScript support： 更好的Ts支持
  - Custom Renderer API： 暴露了自定义的渲染API
  - Fragment， Teleport（Protal），Suspense： 更先进的组件


## 2.Vue3.0为什么更快
  - https://vue-next-template-explorer.netlify.app/
  - diff算法优化
    - Vue3.0中新增了虚拟dom的静态标记（PatchFlag）enum
      在与上次虚拟节点进行对比时候，只对比带有patch flag的节点
      并且可以通过flag的信息得知当前节点要对比的具体内容
      ```
        export const enum PatchFlags {
          // 动态文字内容
          TEXT = 1,

          // 动态 class
          CLASS = 1 << 1,  // 2

          // 动态样式
          STYLE = 1 << 2,  // 4

          // 动态 props
          PROPS = 1 << 3,  // 8

          // 有动态的key，也就是说props对象的key不是确定的
          FULL_PROPS = 1 << 4,

          // 合并事件
          HYDRATE_EVENTS = 1 << 5,

          // children 顺序确定的 fragment
          STABLE_FRAGMENT = 1 << 6,

          // children中有带有key的节点的fragment
          KEYED_FRAGMENT = 1 << 7,

          // 没有key的children的fragment
          UNKEYED_FRAGMENT = 1 << 8,

          // 只有非props需要patch的，比如`ref`
          NEED_PATCH = 1 << 9,

          // 动态的插槽
          DYNAMIC_SLOTS = 1 << 10,

          // SPECIAL FLAGS -------------------------------------------------------------

          // 以下是特殊的flag，不会在优化中被用到，是内置的特殊flag

          // 表示他是静态节点，他的内容永远不会改变，对于hydrate的过程中，不会需要再对其子节点进行diff
          HOISTED = -1,

          // 用来表示一个节点的diff应该结束
          BAIL = -2,
        }
      ```
  - hoistStatic 静态提升
    - 在Vue2.x中无论元素是否参与更新，每次都会重新创建，然后再渲染
    - 在Vue3中对于不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用即可
  - cacheHandlers 事件侦听器缓存
    
    - 默认情况下onClick会被视为动态绑定，所以每次都会去追踪它的变化，但是因为是同一个函数，所以没有追踪变化，直接缓存起来复用即可


## 3.Vue3.0快速上手
  - 1. 使用vue-cli，选择3.x版本构建
  - 2. 使用Vite构建项目
    - Vite是Vue作者开发的一款意图取代webpack的工具
    - 其实现原理是利用ES6的import会发送请求去加载文件的特性，拦截这些请求，做一些预编译，省去webpack冗长的打包时间
    - 安装Vite
      - npm install -g create-vite-app
    - 构建项目
      - create-vite-app projectName
    - 安装依赖运行项目
      - cd projectName
      - npm install
      - npm run dev

  - Vue3.0的写法是完全兼容Vue2.x的


## 4. Composition API
