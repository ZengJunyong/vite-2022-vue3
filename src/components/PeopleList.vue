<template>
  <div>
    <PersonInput
      v-for="(person, index) of people"
      :person="person"
      :key="index"
      @updatePerson="updatePerson($event, person)"
    />
    <!-- This list will include all errors,
         both from this component and errors from every <PersonInput> -->
    <p>Parent component error:</p>
    <div style="color: darkred" v-for="error of v$.$silentErrors" :key="error.$uid">
      {{ error.$message }}
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import PersonInput from '@/components/PersonInput.vue'

export default {
  components: { PersonInput },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      people: [ { name: 'John' }, { name: '' } ]
    }
  },
  methods: {
    updatePerson($event,person) {
      person.name = $event.name;
    },
  },
}
</script>
