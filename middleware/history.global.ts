export default defineNuxtRouteMiddleware((to) => {
  const navigationHistory = useLocalStorage("history", []);
  navigationHistory.value.push(to.path);
});
