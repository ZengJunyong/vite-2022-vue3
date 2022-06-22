<template>
  <ValidateEach
      v-for="(item, index) in collection"
      :key="index"
      :state="item"
      :rules="rules"
  >
    <template #default="{ v }">
      <div>
        <input
            v-model="v.name.$model"
            type="text"
        >
        <div
            v-for="(error, errorIndex) in v.name.$errors"
            :key="errorIndex"
        >
          {{ error.$message }}
        </div>
      </div>
    </template>
  </ValidateEach>
</template>

<script>
import {reactive} from 'vue'
import useVuelidate from '@vuelidate/core'
import {ValidateEach} from '@vuelidate/components'
import {minLength, required} from '@vuelidate/validators'

export default {
  components: {ValidateEach},
  setup() {
    const rules = {
      name: {
        required,
        minLength: minLength(10)
      }
    }
    const collection = reactive([
      {name: 'foo'},
      {name: 'bar'}
    ])
    const v = useVuelidate()

    return {rules, collection, v}
  }
}
</script>
