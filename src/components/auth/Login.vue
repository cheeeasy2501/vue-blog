<template>
  <b-container>
    <div class="login-component">
      <loginform />
    </div>
  </b-container>
</template>
<script>
import loginform from "@/components/auth/forms/login.form";

export default {
  components: {
    loginform,
  },
};
</script>
