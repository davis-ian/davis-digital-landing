<script setup lang="ts">
import { Button } from "@/components/ui/button";

useSeoMeta({
  title: "Web Development, SEO, Maintenance, and Social Media",
  description:
    "Davis Digital helps small businesses launch polished websites, improve search visibility, maintain their online presence, and manage social media with clear, practical support.",
  ogTitle: "Davis Digital",
  ogDescription:
    "Websites, SEO, maintenance, and social media support for small businesses that want polished execution without managing the tech.",
});

const businessTags = ["Web Development", "SEO", "Maintenance", "Social Media"] as const;

const serviceHighlights = [
  {
    title: "Web Development",
    price: "From $1,500+",
    description: "Mobile-friendly websites, CMS add-ons, and custom web builds.",
  },
  {
    title: "Monthly Maintenance",
    price: "Care plans available",
    description: "Updates, security checks, troubleshooting, and ongoing support.",
  },
  {
    title: "Search Engine Optimization",
    price: "Scoped after review",
    description: "Technical audits, keyword strategy, content tuning, and growth retainers.",
  },
  {
    title: "Social Media Management",
    price: "From $500+/month",
    description: "Posting, captions, graphics, engagement, and simple reporting.",
  },
] as const;

const pricingHighlights = [
  "Websites from $1,500+",
  "Custom builds scoped by project",
  "Maintenance plans available",
  "SEO audits and retainers scoped after review",
  "Social media from $500+/month",
] as const;

const projectSteps = [
  {
    title: "Discover",
    description: "Clarify your goals, audience, scope, and timeline before work begins.",
  },
  {
    title: "Build",
    description: "Create the website, strategy, content, or support plan your business needs.",
  },
  {
    title: "Launch",
    description: "Test, revise, deploy, and hand off the work with clear next steps.",
  },
  {
    title: "Optimize",
    description: "Keep improving with maintenance, SEO, content updates, and support.",
  },
] as const;

const proofPoints = [
  "Plainspoken strategy",
  "Mobile-friendly builds",
  "Launch timelines you can plan around",
  "Walkthrough videos for hand-off",
  "Ongoing support after launch",
] as const;
</script>

<template>
  <div>
    <section class="bg-brand-surface text-brand-surface-foreground relative overflow-hidden">
      <div
        class="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,var(--brand-glow),transparent_42%)]"
      />

      <div
        class="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_26rem] lg:px-8"
      >
        <div class="max-w-3xl space-y-8">
          <div
            class="bg-brand-label text-brand-label-foreground font-display inline-flex rounded-full border px-4 py-2 text-sm tracking-[0.2em] uppercase shadow-xs"
          >
            Websites. SEO. Maintenance. Social.
          </div>

          <div class="space-y-5">
            <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Digital support that helps your business launch, grow, and stay online.
            </h1>
            <p class="text-brand-surface-muted max-w-2xl text-lg leading-8">
              Davis Digital builds polished websites, improves search visibility, manages ongoing
              site care, and helps your brand stay consistent online without making you manage the
              tech.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <Button as-child size="lg">
              <NuxtLink to="/contact">Start a Project</NuxtLink>
            </Button>
            <Button
              as-child
              variant="outline"
              size="lg"
              class="border-brand-surface-border text-brand-surface-foreground hover:bg-brand-label hover:text-brand-label-foreground bg-transparent"
            >
              <NuxtLink to="/services">View Services</NuxtLink>
            </Button>
          </div>
        </div>

        <aside
          class="border-brand-surface-border bg-brand-label text-brand-label-foreground rounded-3xl border p-5 shadow-2xl"
        >
          <div
            class="bg-brand-surface text-brand-surface-foreground border-brand-label-border rounded-2xl border p-5"
          >
            <p class="text-brand-surface-muted font-display text-sm tracking-[0.2em] uppercase">
              What we handle
            </p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight">
              The digital work behind growth
            </h2>
            <p class="text-brand-surface-muted mt-3 text-sm leading-6">
              Websites, optimization, technical care, and social consistency for businesses that
              need dependable execution.
            </p>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="item in businessTags"
              :key="item"
              class="border-brand-label-border text-brand-label-muted rounded-full border px-3 py-1 text-xs"
            >
              {{ item }}
            </span>
          </div>

          <ol class="text-brand-label-muted mt-6 space-y-3 text-sm">
            <li
              v-for="(item, index) in pricingHighlights.slice(0, 3)"
              :key="item"
              class="flex gap-3"
            >
              <span
                class="bg-brand-surface text-brand-surface-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs"
              >
                {{ index + 1 }}
              </span>
              <span>{{ item }}</span>
            </li>
          </ol>
        </aside>
      </div>
    </section>

    <section id="features" class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="max-w-2xl space-y-4">
        <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">Services</p>
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          One partner for the digital work your business depends on.
        </h2>
        <p class="text-muted-foreground text-lg leading-8">
          Choose a focused website build, ongoing technical support, search visibility improvements,
          or consistent social media management.
        </p>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="service in serviceHighlights"
          :key="service.title"
          class="border-border bg-card text-card-foreground rounded-xl border p-6 shadow-xs"
        >
          <p class="text-muted-foreground font-display text-xs tracking-[0.2em] uppercase">
            {{ service.price }}
          </p>
          <h3 class="mt-4 font-semibold">{{ service.title }}</h3>
          <p class="text-muted-foreground mt-3 text-sm leading-6">
            {{ service.description }}
          </p>
        </article>
      </div>
    </section>

    <section class="bg-brand-surface text-brand-surface-foreground">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div class="space-y-4">
            <p class="text-brand-surface-muted font-display text-sm tracking-[0.2em] uppercase">
              Starting points
            </p>
            <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Clear pricing anchors. Scoped for the work you actually need.
            </h2>
            <p class="text-brand-surface-muted text-lg leading-8">
              Pricing stays visible so you can quickly decide whether a project conversation makes
              sense. Final scope depends on timeline, complexity, and support needs.
            </p>
            <Button
              as-child
              size="lg"
              class="bg-brand-label text-brand-label-foreground hover:bg-brand-label/90"
            >
              <NuxtLink to="/contact">Request a Scope</NuxtLink>
            </Button>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="item in pricingHighlights"
              :key="item"
              class="border-brand-surface-border bg-brand-label/8 rounded-2xl border p-5 text-lg font-medium"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div class="space-y-5">
          <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">
            Why Davis Digital
          </p>
          <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Professional digital execution without the agency bloat.
          </h2>
          <p class="text-muted-foreground text-lg leading-8">
            You get a practical partner who can build the site, keep it healthy, improve visibility,
            and support the digital work that keeps your business moving.
          </p>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="point in proofPoints"
              :key="point"
              class="border-border rounded-xl border p-4 text-sm font-medium"
            >
              {{ point }}
            </div>
          </div>
        </div>

        <div class="space-y-5">
          <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">
            Process
          </p>
          <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A simple path from idea to launch.
          </h2>

          <ol class="space-y-4">
            <li
              v-for="(step, index) in projectSteps"
              :key="step.title"
              class="border-border bg-card rounded-2xl border p-5"
            >
              <div class="flex gap-4">
                <span
                  class="bg-primary text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-full text-sm"
                >
                  {{ index + 1 }}
                </span>
                <div>
                  <h3 class="font-semibold">{{ step.title }}</h3>
                  <p class="text-muted-foreground mt-2 text-sm leading-6">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_24rem] lg:px-8"
    >
      <div class="max-w-3xl space-y-5">
        <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">Contact</p>
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Ready to simplify the tech behind your business?
        </h2>
        <p class="text-muted-foreground text-lg leading-8">
          Tell us what you need built, fixed, maintained, or promoted. We'll help you choose the
          right next step and scope the work clearly.
        </p>
        <Button as-child size="lg">
          <NuxtLink to="/contact">Start a Project</NuxtLink>
        </Button>
      </div>

      <aside class="border-border bg-card text-card-foreground rounded-xl border p-6 shadow-xs">
        <h3 class="font-semibold">Best for</h3>
        <ul class="text-muted-foreground mt-4 space-y-3 text-sm leading-6">
          <li>Website launches and refreshes</li>
          <li>SEO audits and technical cleanup</li>
          <li>Monthly website support</li>
          <li>Social media management</li>
        </ul>
        <div class="border-border text-muted-foreground mt-6 border-t pt-6 text-sm">
          <p class="text-foreground font-medium">Next step</p>
          <p class="mt-2 leading-6">
            Share your goals, timeline, and current website if you have one. Davis Digital will help
            turn that into a practical scope.
          </p>
        </div>
      </aside>
    </section>
  </div>
</template>
