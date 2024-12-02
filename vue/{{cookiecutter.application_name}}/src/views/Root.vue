<template>
  <elvia-header
    :username="authStore.getUserName"
    :email="authStore.getUserEmail"
    :appTitle="'Title'"
    @onSignOutClick="authStore.signOut()"
    v-if="authStore.isAuthenticated"
  >
    <div slot="appContent" class="app-content">
      <elvia-illustrations-hello class="illustration e-mb-8" />
      <h1 class="e-title-lg e-text-center">Velkommen til din Elvia App! 🥳</h1>
      <p class="e-text-lg e-text-center">
        Gratulerer! Du har nå opprettet et nytt forntend-prosjekt i Elvia. <br />Prosjektet er satt opp med BFF og
        designsystemet.
      </p>
      <footer class="e-flex e-align-items-center e-justify-content-center e-flex-wrap e-gap-24">
        <a class="e-link e-link--action" href="https://elvia.atlassian.net/wiki/spaces/Utviklerhandbok/overview">
          <span class="e-link__title"> Utviklerhåndboka </span>
          <span class="e-link__icon">
            <i class="e-icon e-icon--arrow_right_circle-color" aria-hidden="true"> </i>
            <i class="e-icon e-icon--arrow_right_circle-filled-color" aria-hidden="true"> </i>
          </span>
        </a>
        <a class="e-link e-link--action" href="https://design.elvia.io/components">
          <span class="e-link__title"> Designsystem komponenter </span>
          <span class="e-link__icon">
            <i class="e-icon e-icon--arrow_right_circle-color" aria-hidden="true"> </i>
            <i class="e-icon e-icon--arrow_right_circle-filled-color" aria-hidden="true"> </i>
          </span>
        </a>
      </footer>
    </div>
  </elvia-header>
</template>

<script setup lang="ts">
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore();
</script>

<style scoped>
.app-content {
  display: grid;
  justify-items: center;
  place-content: center;
  padding: 0 8px;
  gap: 32px;
  height: calc(100vh - 64px);
}

.illustration {
  max-width: 330px;
}
</style>