{% raw %}
<template>
  <div v-if="authStore.isAuthenticated">
    <p>User logged in: {{ authStore.getUserName }}</p>
  </div>
  <div v-if="!authStore.isAuthenticated">
    <p>User not logged in</p>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore();

</script>
{% endraw %}