export default function handler(req, res) {
  const params = new URLSearchParams({
    client_id: process.env.OAUTH_CLIENT_ID,
    scope: 'repo,user',
    allow_signup: 'true',
  });
  res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
}