<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="text-center my-5">
            <h1>Login Page</h1>

            <button class="btn btn-success" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",

  data() {
    return {
      title: "Login Page",
      loginData: {
        login: "0534447433",
        password: "123456",
        userType: 1,
        deviceToken:
          "dys9c4WBuJI:APA91bGEkzm5QDgrIlqo1Ln2wjkgAS6TCE_Cba_hM3ugEFkOyc7XemhZijetGJp6-Q8b_BK1U3NU4zBjb0Q5nvczFIFCqFgFiL6QF1txa_SZ2HYJj3gVajdBMgJymRGvDEgh1C4dYMxiHLd_Oxk3FMU_dCMBjT2btQ",
        platform: "web",
      },
    };
  },

  methods: {
    login() {
      console.log(this.$auth);
      // axios
      //   .post(`http://api.local.co:8080/v9/user/login`, this.loginData)
      //   .then((response) => {
      //     console.log(response.data.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },

  head() {
    return {
      title: this.title,
    };
  },
};
</script>
