<script setup>
import {reactive, nextTick, ref} from 'vue'

const raw = {count: 0}
const proxy = reactive(raw)

// calling reactive() on the same object returns the same proxy
console.log(reactive(raw) === proxy) // true
// calling reactive() on a proxy returns itself
console.log(reactive(proxy) === proxy) // true

// n is a local variable that is disconnected
// from proxy.count.
let n = proxy.count
// does not affect original proxy
n++
// count is also disconnected from proxy.count.
let {count} = proxy
// does not affect original proxy
count++

const countRef = ref(0)
console.log(countRef) // { value: 0 }
console.log(countRef.value) // 0
countRef.value++
console.log(countRef.value) // 1

async function increment() {
  proxy.count++
  countRef.value++
  // DOM not yet updated
  console.log(document.getElementById('counter').textContent) // 0
  await nextTick()
  // DOM is now updated
  console.log(document.getElementById('counter').textContent) // 1
}
</script>

<template>
  <button id="counter" @click="increment">
    {{ proxy.count }}
  </button>
  <p>countRef: {{countRef + 1}}</p>
</template>
