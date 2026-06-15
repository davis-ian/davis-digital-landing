<script setup lang="ts">
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="bg-background text-foreground min-h-screen">
    <header class="border-border/70 bg-background/90 sticky top-0 z-50 border-b backdrop-blur">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-2 font-semibold tracking-tight">
          <span
            class="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md text-sm"
          >
            DD
          </span>
          <span>Davis Digital</span>
        </NuxtLink>

        <nav
          aria-label="Primary navigation"
          class="text-muted-foreground hidden items-center gap-6 text-sm md:flex"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="hover:text-foreground transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <Button as-child size="sm" class="hidden md:inline-flex">
          <NuxtLink to="/contact">Start a Project</NuxtLink>
        </Button>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-border bg-muted/30 border-t">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div class="max-w-md space-y-3">
          <NuxtLink to="/" class="font-semibold tracking-tight"> Davis Digital </NuxtLink>
          <p class="text-muted-foreground text-sm leading-6">
            Websites, SEO, maintenance, and social media support for businesses that want clear
            digital execution without managing the tech.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          class="text-muted-foreground flex flex-wrap gap-x-5 gap-y-3 text-sm md:justify-end"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="hover:text-foreground transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <p class="text-muted-foreground text-sm md:col-span-2">
          © {{ currentYear }} Davis Digital. Simplify the tech. Stunning results. Seamless growth.
        </p>
      </div>
    </footer>
  </div>
</template>
