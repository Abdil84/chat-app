<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showSignin">
      <h2>Sign in</h2>
      <SignInForm @signin="enterChat"/>
      <p>Not registered? <span @click="showSignin = false">Signup</span> Instead</p>
      </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignUpForm @signup="enterChat"/>
      <p>registered? <span @click="showSignin = true">Signin</span> Instead</p>
      </div>
  </div>
</template>

<script>


import SignUpForm from '../components/SignUpForm.vue'
import SignInForm from '../components/SignInForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SignUpForm, SignInForm },
    setup(){
      const showSignin = ref(true)
      const router = useRouter()

      const enterChat = () => {
        router.push({ name: 'Chatroom'})
      }

      return { showSignin, enterChat }
    }
}
</script>

<style>
    .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>