<script setup lang="ts">
import { Button } from "@/components/ui/button";

interface ServiceOverview {
  title: string;
  priceNote: string;
  description: string;
  bullets: readonly string[];
}

useSeoMeta({
  title: "Services",
  description:
    "Explore Davis Digital web development, maintenance, SEO, and social media services for small businesses that need clear, practical digital support.",
  ogTitle: "Services | Davis Digital",
  ogDescription:
    "Web development, maintenance, SEO, and social media services scoped around your business goals.",
});

const services: readonly ServiceOverview[] = [
  {
    title: "Web Development",
    priceNote: "Starter websites from $1,500+. Custom builds scoped by project.",
    description:
      "Launch a polished site, refresh an outdated presence, or scope custom functionality when your business needs more than a brochure page.",
    bullets: [
      "Business websites and landing pages",
      "CMS add-ons for editable content",
      "Custom builds with payments, logins, dashboards, or integrations",
    ],
  },
  {
    title: "Website Maintenance",
    priceNote: "Quarterly and monthly care plans available.",
    description:
      "Keep your site secure, updated, and supported after launch without having to manage the technical work yourself.",
    bullets: [
      "Updates, security checks, and broken link reviews",
      "Content, layout, and troubleshooting support",
      "Priority support options for growing businesses",
    ],
  },
  {
    title: "Search Engine Optimization",
    priceNote: "Audits and retainers scoped after review.",
    description:
      "Find the technical, content, and keyword opportunities that can help the right customers discover your business.",
    bullets: [
      "Technical SEO and site-health audits",
      "Keyword and competitor opportunity research",
      "Ongoing optimization and content tuning",
    ],
  },
  {
    title: "Social Media Management",
    priceNote: "Monthly support starts at $500+.",
    description:
      "Stay consistent across your social channels with captions, graphics, engagement support, and simple reporting.",
    bullets: [
      "Monthly posts and strategic captions",
      "Custom graphics and platform-specific content",
      "Audience engagement and performance reporting",
    ],
  },
] as const;

const processSteps = [
  "Clarify the goal and best-fit service path",
  "Scope the deliverables, timeline, and support level",
  "Build, launch, and keep improving with practical next steps",
] as const;
</script>

<template>
  <div>
    <section class="bg-brand-surface text-brand-surface-foreground relative overflow-hidden">
      <div
        class="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,var(--brand-glow),transparent_42%)]"
      />

      <div class="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-6">
          <p
            class="bg-brand-label text-brand-label-foreground font-display inline-flex rounded-full border px-4 py-2 text-sm tracking-[0.14em] uppercase shadow-xs"
          >
            Services
          </p>
          <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Digital support that starts clear and scales when you need it.
          </h1>
          <p class="text-brand-surface-muted max-w-2xl text-lg leading-8">
            Davis Digital helps with websites, maintenance, SEO, and social media without forcing
            you into a one-size-fits-all package. Start with the right service, then scope the work
            around your goals.
          </p>

          <div class="flex flex-col gap-3 sm:flex-row">
            <Button as-child size="lg">
              <NuxtLink to="/contact">Request a Scope</NuxtLink>
            </Button>
            <Button
              as-child
              variant="outline"
              size="lg"
              class="border-brand-surface-border text-brand-surface-foreground hover:bg-brand-label hover:text-brand-label-foreground bg-transparent"
            >
              <NuxtLink to="/contact">Not Sure What You Need?</NuxtLink>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="max-w-3xl space-y-4">
        <p class="text-muted-foreground text-sm font-medium tracking-[0.14em] uppercase">
          What We Offer
        </p>
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Choose the support path that fits the next stage of your business.
        </h2>
        <p class="text-muted-foreground text-lg leading-8">
          Public pricing stays intentionally simple. Full package details are scoped in conversation
          so the recommendation matches your timeline, complexity, and budget.
        </p>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-2">
        <article
          v-for="service in services"
          :key="service.title"
          class="border-border bg-card text-card-foreground rounded-2xl border p-6 shadow-xs"
        >
          <p class="text-muted-foreground font-display text-xs tracking-[0.14em] uppercase">
            {{ service.priceNote }}
          </p>
          <h3 class="mt-4 text-2xl font-semibold">{{ service.title }}</h3>
          <p class="text-muted-foreground mt-3 text-sm leading-6">
            {{ service.description }}
          </p>
          <ul class="mt-6 space-y-3 text-sm leading-6">
            <li v-for="bullet in service.bullets" :key="bullet" class="flex gap-3">
              <span class="bg-primary mt-2 size-1.5 shrink-0 rounded-full" />
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="bg-muted/30 border-border border-y">
      <div
        class="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"
      >
        <div class="space-y-4">
          <p class="text-muted-foreground font-display text-sm tracking-[0.14em] uppercase">
            How It Works
          </p>
          <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A simple path from need to next step.
          </h2>
          <p class="text-muted-foreground text-lg leading-8">
            The goal is not to sell the biggest package. It is to identify the useful starting point
            and build from there.
          </p>
        </div>

        <ol class="space-y-4">
          <li
            v-for="(step, index) in processSteps"
            :key="step"
            class="border-border bg-card rounded-2xl border p-5 shadow-xs"
          >
            <div class="flex gap-4">
              <span
                class="bg-primary text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-full text-sm"
              >
                {{ index + 1 }}
              </span>
              <p class="text-sm leading-6">{{ step }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section
      class="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8"
    >
      <div class="max-w-2xl space-y-4">
        <p class="text-muted-foreground text-sm font-medium tracking-[0.14em] uppercase">
          Start Small Or Scope Bigger
        </p>
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Tell us what you need built, fixed, maintained, or promoted.
        </h2>
        <p class="text-muted-foreground text-lg leading-8">
          We will help you choose the right starting point and avoid paying for work you do not
          need.
        </p>
      </div>

      <div class="flex items-start">
        <Button as-child size="lg">
          <NuxtLink to="/contact">Start a Project</NuxtLink>
        </Button>
      </div>
    </section>
  </div>
</template>
