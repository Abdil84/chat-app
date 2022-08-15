<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Enter your email" v-model="email">
    <input type="password" required placeholder="Enter your password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignin from '../composables/useSignin'

export default {
    setup(props, context){
        const email = ref('')
        const password = ref('')

        
        const { error, signin } = useSignin()
        
        const handleSubmit = async () => {
          await signin(email.value, password.value)
          context.emit('signin')
        } 

        return { email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>