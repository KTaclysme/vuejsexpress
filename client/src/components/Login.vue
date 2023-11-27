<template>
  <div>
    <form action="action_page.php">
      <div class="container">
        <h1>Login</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

        <button type="submit" class="loginbtn">Connexion</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'LOGIN'
    }
  }
}
</script>

<style>
</style>
