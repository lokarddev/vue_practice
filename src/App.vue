<template>
  <AppHeader @open-login-modal="open=true"></AppHeader>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal v-if="open" @close-login="open=false">Login</LoginModal>
  </teleport>
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
