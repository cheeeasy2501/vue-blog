<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-container class="container">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-b-modal.modal-registration>Registration</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item v-b-modal.modal-singIn>Sing In</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
    <!-- modal pop-up -->
    <register />
    <login />
    <!-- end modal pop-up -->
  </b-navbar>
</template>
<script>
import register from "@/components/auth/Register";
import login from "@/components/auth/Login";
export default {
  data: () => ({
    menuVisible: false,
  }),
  components: {
    register,
    login,
  },
};
</script>
<style scoped></style>
