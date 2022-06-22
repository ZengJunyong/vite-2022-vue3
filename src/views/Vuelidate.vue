<script>
import useVuelidate from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'

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
      }
    }
  },
  validations() {
    return {
      firstName: {required}, // Matches this.firstName
      lastName: {required}, // Matches this.lastName
      contact: {
        email: {required, email} // Matches this.contact.email
      }
    }
  }
}
</script>

<template>
  <input v-model="firstName" placeholder="firstName">
  <input v-model="lastName" placeholder="lastName">
  <input v-model="contact.email" placeholder="contact.email">
</template>
