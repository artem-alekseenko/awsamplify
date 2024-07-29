import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);

  // Errors with "invalid claim: missing sub claim"
  // See https://github.com/nuxt-modules/supabase/issues/238
  if (
    (cookies["sb-access-token"] && cookies["sb-refresh-token"]) ||
    (cookies["sb-zbdjagpmxjjghbjbfskb-auth-token.0"] &&
      cookies["sb-zbdjagpmxjjghbjbfskb-auth-token.1"])
  ) {
    const user = await serverSupabaseUser(event);
    event.context.user = user;
  }
});
