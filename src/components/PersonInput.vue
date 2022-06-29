<template>
  <div>
    <input type="text" :value="person.name" @input="$emit('updatePerson', { name: $event })" />
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
      required,
      minLength: minLength(2),
    }
  }
}
</script>
