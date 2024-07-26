export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  console.log("to in auth middleware", to);
  console.log("user.value", user.value);

  if (user.value || to.params.chapterSlug === "1-chapter-1") {
    return;
  }

  return navigateTo(`/login?redirectTo=${to.path}`);
});
