import Auth from './auth'

import './middleware'

// Active schemes
import scheme_003d9a64 from './schemes/local.js'
import scheme_23514a38 from './schemes/oauth2.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/","home":"/","callback":"/login"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"https://127.0.0.1:8000/login_check","method":"post","propertyName":"token"},"logout":{"url":"https://127.0.0.1:8000/logout","method":"get"},"user":{"url":"/users/7","method":"get","propertyName":"user"}},"redirect":{"login":"/blogposts","logout":"/"},"tokenType":"bearer","_name":"local"}))

  // github
  $auth.registerStrategy('github', new scheme_23514a38($auth, {"client_id":"54db107e16189892c68b","_name":"github","authorization_endpoint":"https://github.com/login/oauth/authorize","token_endpoint":"https://github.com/login/oauth/access_token","userinfo_endpoint":"https://api.github.com/user","scope":["user","email"],"access_token_endpoint":"/_auth/oauth/github/authorize","response_type":"code"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
