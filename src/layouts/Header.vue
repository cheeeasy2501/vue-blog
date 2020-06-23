<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container class="container">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-link class="text-light" to='/register'>Sing Up</b-link>
        </b-navbar-nav>
        <b-navbar-nav>
           <b-link class="text-light"  to='/login'>Sing In</b-link>
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
  </b-navbar>
</template>
<script>
export default {
  data: () => ({
    menuVisible: false,
  }),
};
</script>
<style scoped></style>
