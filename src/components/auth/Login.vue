<template>
  <div class="register-component">
    <b-modal id="modal-singIn" centered title="Sing In" hide-footer>
      <loginform />
    </b-modal>
  </div>
</template>
<script>
import loginform from "@/components/auth/forms/login.form";

export default {
  components: {
    loginform,
  },
};
</script>
