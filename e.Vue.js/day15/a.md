1. 安装ts  cnpm i typescript -D
2. 根目录创建tsconfig.json
```
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // this enables stricter inference for data properties on `this`
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```

3. 在src下创建shims-vue.d.ts 
```
declare module '*.vue' {
  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}
```

4. 将main.js改成main.ts

5. 在index.html里面将main.js改成main.ts

6. 将组件的<script>改成<script lang="ts">

7. 为了让TypeScript正确推断Vue组件选项中的类型，您需要使用defineComponent全局方法定义组件：
在组件里面 import { defineComponent } from 'vue'
```
const Component = defineComponent({
  // type inference enabled
})
```

8. data里面的简单类型不需要显示提供类型，因为有类型推断

9. data里面的复杂类型需要提供接口

10. 计算属性的函数必要要有类型

11. 在组合api里面的setup可以接受一个参数为props，并在setup里面不需要提供类型

12. setup里面的ref可以省略类型,也可以let count = ref<number>(0)

13. setup里面reactive可以使用接口

14. 在setup里面也可以使用计算属性，需要从vue里面结构出computed，
    // read-only
    const doubleCount = computed(() => count.value * 2)
    这里不需要提供类型，会自动推断