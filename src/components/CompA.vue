<script setup>
import {ref, computed} from 'vue' // or '@vue/composition-api' in Vue 2.x
import {useVuelidate} from '@vuelidate/core'
import {required, integer, between} from '@vuelidate/validators'

const age = ref(null)
const rules = computed(() => ({
  age: {
    required,
    integer,
    between: between(0, 150)
  },
}))

const v$ = useVuelidate(rules, {age})
// useVuelidate(rules, {age})
</script>

<template>
  <input v-model="age" placeholder="age">
</template>
