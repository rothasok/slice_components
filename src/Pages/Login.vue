<template>
  <form @submit.prevent="handleSubmit" class="login">
    <!-- Alert for failure -->
    <div v-if="fail" class="alert alert-danger" role="alert">
      Login failed. Please check your credentials.
    </div>
    <!-- Alert for success -->
    <div v-if="success" class="alert alert-success" role="alert">
      Login successful!
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
    <!-- <button type="button" class="btn btn-secondary" @click="resetPassword">Reset</button> -->
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      password: "",
      fail: false,   // Fail flag to show failure alert
      success: false // Success flag to show success alert
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("/v1/auth/login", {
          email: this.email,
          password: this.password
        });
        console.log(response.data);

        // If login is successful
        this.success = true;  // Show success message
        this.fail = false;    // Hide failure message

        // Optionally reset the email and password after success
        this.resetPassword();
        // Local Storage
        localStorage.setItem("accessToken",response.data.accessToken);
      } catch (error) {
        console.error('Error during login:', error.message);

        // If login fails
        this.fail = true;     // Show failure message
        this.success = false; // Hide success message

        // Optionally reset the email and password after failure
        this.resetPassword();
      }
    },
    resetPassword() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>
<style scoped>
.login{
padding:50px;
}
</style>
