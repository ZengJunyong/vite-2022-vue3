<script>
import useVuelidate from '@vuelidate/core'
import {required, email, helpers} from '@vuelidate/validators'

export default {
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      },
      todos: [
        {context: ''},
        {context: ''},
      ],
    }
  },
  validations() {
    return {
      firstName: {required}, // Matches this.firstName
      lastName: {required}, // Matches this.lastName
      contact: {
        email: {required, email} // Matches this.contact.email
      },
      todos: {
        $each: helpers.forEach({
          context: {
            required
          }
        })
      }
    }
  }
}
</script>

<template>
  <input v-model="firstName" placeholder="firstName">
  <input v-model="lastName" placeholder="lastName">
  <input v-model="contact.email" placeholder="contact.email">
  <hr>
  <input v-for="todo in todos" v-model="todo.context" placeholder="todo">
</template>
