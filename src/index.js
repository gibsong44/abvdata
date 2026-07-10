// Cloudflare Worker entrypoint for abvdata
export default {
  async fetch(request, env) {
    return new Response("Hello from abvdata Worker", {
      headers: { "content-type": "text/plain;charset=UTF-8" },
    });
  },
};
