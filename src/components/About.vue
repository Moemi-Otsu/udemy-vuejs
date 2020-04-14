<template>
  <div>
    <p>About</p>
    <input>
  </div>
</template>

<script>
export default {
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  }
}
</script>