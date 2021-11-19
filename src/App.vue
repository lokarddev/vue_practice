<template>
  <AppHeader @open-login-modal="open=true"></AppHeader>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="open" @close-login="open=false">Login</LoginModal>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
export default {
  data() {
    return {
      open: false,
    }
  },
  components: {LoginModal, AppHeader},
}
</script>
