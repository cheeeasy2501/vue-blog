<template>
  <v-row align="center" justify="center" style="height:100%">
    <v-col cols="12" sm="8" md="6" lg="4">
      <registerform />
    </v-col>
  </v-row>
</template>
<script>
import registerform from "@/components/auth/forms/register.form";

export default {
  components: {
    registerform,
  },
};
</script>
