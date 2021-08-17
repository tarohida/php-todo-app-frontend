<template>
  <input type="checkbox" id="checkbox1" value="item1" v-model="checked" />
  <label for="checkbox1">{{ checked }}</label>
  <br />
  <input type="checkbox" id="checkbox2" value="item1" v-model="checkedItems" />
  <label for="checkbox2">{{ checkedItems }}</label>
</template>

<script>
export default {
  data () {
    return {
      checkedItems: [],
      checked: false
    }
  }
}
</script>