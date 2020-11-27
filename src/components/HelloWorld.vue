<template>
  <div class="hello">
    <form @reset="onReset" ref="form_input">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" ref="input_email" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="button" class="btn btn-primary" @click="onReset">Reset</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const input_email = ref(null)
    const form_input = ref(null)

    function onReset() {
      form_input.value.reset()
      input_email.value.focus()
    }

    return {
      input_email,
      onReset,
      form_input

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
