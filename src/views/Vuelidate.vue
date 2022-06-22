<script>
import CompA from '@/components/CompA.vue'
import useVuelidate from '@vuelidate/core'
import {required, email, helpers} from '@vuelidate/validators'

export default {
  components: {CompA},
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
  Are all the fields valid? {{!v$.$invalid}}
  <hr>
  <input v-model="firstName" placeholder="firstName">
  <input v-model="lastName" placeholder="lastName">
  <input v-model="contact.email" placeholder="contact.email">
  <hr>
  <input v-for="todo in todos" v-model="todo.context" placeholder="todo">
  <hr>
  <CompA/>
</template>
