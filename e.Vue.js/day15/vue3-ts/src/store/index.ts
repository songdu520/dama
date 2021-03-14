import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  a: { count: any }
  count: number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

const a = {
  state: {
    count: 0
  }
}

export const store = createStore({
  // state: {
  //   count: 0
  // }
  modules: {
    a
  }
})