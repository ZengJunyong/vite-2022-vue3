<template>
  <div>
    <input type="text" :value="person.name" @input="updatePerson" />
    <p>Child component error:</p>
    <div style="color: red;" v-for="error of v$.$silentErrors" :key="error.$uid">
      {{ error.$message }}
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required, minLength} from '@vuelidate/validators'

export default {
  props: {
    person: { type: Object, required: true },
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations: {
    person: {
      name: {
        required,
        minLength: minLength(2),
      }
    }
  },
  methods: {
    updatePerson($event) {
      this.$emit('updatePerson', { name: $event.target.value })
    },
  },
}
</script>
