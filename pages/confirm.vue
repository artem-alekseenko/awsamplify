<template>
  <div>Waiting for login...</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { query } = useRoute();

// Get redirect path from cookies
const cookieName = useRuntimeConfig().public.supabase.cookieName;

watch(
  user,
  () => {
    if (user.value) {
      useCookie(`${cookieName}-redirect-path`).value = null;
      const to = (query.redirectTo as string) ?? "/";
      return navigateTo(to, {
        replace: true,
      });
    }
  },
  { immediate: true },
);
</script>
