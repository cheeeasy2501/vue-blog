<template>
  <div class="register-component">
    <b-modal id="modal-registration" centered title="Registration" hide-footer>
      <registerform />
    </b-modal>
  </div>
</template>
<script>
import registerform from "@/components/auth/forms/register.form";

export default {
  components: {
    registerform,
  },
};
</script>
