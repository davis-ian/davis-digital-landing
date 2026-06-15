// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/eslint", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "@/components/ui",
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Davis Digital",
      titleTemplate: "%s | Davis Digital",
      meta: [
        {
          name: "description",
          content:
            "Davis Digital helps small businesses with websites, SEO, maintenance, and social media support without making them manage the tech.",
        },
        {
          property: "og:site_name",
          content: "Davis Digital",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Davis Digital",
        },
        {
          property: "og:description",
          content:
            "Websites, SEO, maintenance, and social media support for small businesses that want clear digital execution.",
        },
        {
          property: "og:image",
          content: "/og-image.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Davis Digital",
        },
        {
          name: "twitter:description",
          content:
            "Websites, SEO, maintenance, and social media support for small businesses that want clear digital execution.",
        },
        {
          name: "twitter:image",
          content: "/og-image.png",
        },
      ],
    },
  },
});
