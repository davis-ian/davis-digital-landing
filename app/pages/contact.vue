<script setup lang="ts">
import { Button } from "@/components/ui/button";

useSeoMeta({
  title: "Contact",
  description:
    "Start a project conversation with Davis Digital for websites, SEO, maintenance, or social media support.",
  ogTitle: "Contact",
  ogDescription:
    "Tell Davis Digital what you need built, fixed, maintained, or promoted and get a practical next step.",
});

const goodFitItems = [
  "Website launches and refreshes",
  "SEO cleanup or growth planning",
  "Monthly website support",
  "Social media management",
] as const;

const intakePrompts = [
  "What do you need help with?",
  "Do you have a current site?",
  "What timeline are you working toward?",
] as const;
</script>

<template>
  <section
    class="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_24rem] lg:px-8"
  >
    <div class="max-w-3xl space-y-5">
      <p
        class="text-muted-foreground font-display inline-flex rounded-full border px-4 py-2 text-sm tracking-[0.14em] uppercase"
      >
        Contact
      </p>
      <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Tell us what you need built, fixed, maintained, or promoted.
      </h1>
      <p class="text-muted-foreground text-lg leading-8">
        Share the goal, timeline, and current site if you have one. Davis Digital will help you turn
        the need into a practical scope without pushing unnecessary work.
      </p>

      <Button as-child size="lg">
        <a href="mailto:hello.iandavis@gmail.com">Email hello.iandavis@gmail.com</a>
      </Button>
    </div>

    <aside class="border-border bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
      <h2 class="font-semibold">Good fit for</h2>
      <ul class="text-muted-foreground mt-4 space-y-3 text-sm leading-6">
        <li v-for="item in goodFitItems" :key="item" class="flex gap-3">
          <span class="bg-primary mt-2 size-1.5 shrink-0 rounded-full" />
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="border-border mt-6 border-t pt-6">
        <h2 class="font-semibold">Helpful details</h2>
        <ul class="text-muted-foreground mt-4 space-y-3 text-sm leading-6">
          <li v-for="prompt in intakePrompts" :key="prompt">{{ prompt }}</li>
        </ul>
      </div>
    </aside>
  </section>
</template>
