<template>
  <router-view />
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import authService, { UserValue } from './services/authService';
import { useAuthStore } from './store/authStore';


const router = useRouter();
const authStore = useAuthStore();

const setupBff = async (): Promise<void> => {
  axios.defaults.headers.common['x-csrf'] = '1';

  try {
    const user = await authService.getBffUser();
    authStore.setUser(user);
    loginOnSessionExpiry(user);
  } catch (reason) {
    console.log(reason);
    location.replace('/bff/login?returnUrl=' + localLocationComponents());
  }
};

const loginOnSessionExpiry = (user: UserValue[]): void => {
  const sessionExpiryObject = user.find(
    item => item.type === 'bff:session_expires_in'
  );
  if (sessionExpiryObject) {
    setTimeout(() => {
      location.replace('/bff/login?returnUrl=' + localLocationComponents());
    }, +sessionExpiryObject.value * 1000);
  }
};

const localLocationComponents = (): string => {
  return encodeURIComponent(
    window.location.pathname + window.location.search + window.location.hash
  );
};

onMounted(async () => {
  await setupBff();
  await router.isReady();
});
</script>
