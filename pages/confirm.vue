<template>
  <div>Waiting for login...</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { query } = useRoute();

// Get redirect path from cookies
const cookieName = useRuntimeConfig().public.supabase.cookieName
const redirectPath = useCookie(`${cookieName}-redirect-path`).value

watch(
  user,
  () => {
    console.log("user.value in confirm", user.value);
    if (user.value) {
      useCookie(`${cookieName}-redirect-path`).value = null;
      console.log('redirectPath', redirectPath);
      const to = (query.redirectTo as string) ?? "/";
      console.log("confirm to", to);
      return navigateTo(to, {
        replace: true,
      });
    }
  },
  { immediate: true },
);
</script>
