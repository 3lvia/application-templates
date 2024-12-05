import { defineStore } from 'pinia';
import { UserValue } from '../services/authService';

interface AuthState {
  user: UserValue[];
}

export const useAuthStore = defineStore('authStore', {
  state: (): AuthState => ({
    user: [],
  }),
  actions: {
    setUser(user: UserValue[]) {
      this.user = user;
    },
    signOut() {
      const signOutUrl = this.user.find(
        entry => entry.type === 'bff:logout_url'
      );

      if (signOutUrl) {
        location.replace(signOutUrl.value as string);
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user.length > 0;
    },
    isInternalUser(state) {
      return (
        state.user.find(entry => entry.type === 'idp')?.value === 'elvia-ad'
      );
    },
    getUserName(state) {
      return state.user.find(entry => entry.type === 'name')?.value || '';
    },
    getUserEmail(state) {
      return state.user.find(entry => entry.type === 'email')?.value || '';
    },
  },
});
