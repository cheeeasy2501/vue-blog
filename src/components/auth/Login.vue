<template>
  <v-row align="center" justify="center" style="height:100%" >
    <v-col  cols="12" sm="8" md="6" lg="4">
      <loginform />
    </v-col>
  </v-row>
</template>
<script>
import loginform from "@/components/auth/forms/login.form";

export default {
  components: {
    loginform,
  },
};
</script>
