<template>
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <h2>{{ title | lowerCase }}</h2>
    <h2>{{ number }}</h2>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber]
}
</script>