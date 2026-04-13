<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

import CtaSection from './sections/CtaSection.vue';
import FaqSection from './sections/FaqSection.vue';
import FeaturesSection from './sections/FeaturesSection.vue';
import FilamentSection from './sections/FilamentSection.vue';
import HeroSection from './sections/HeroSection.vue';
import ModulesSection from './sections/ModulesSection.vue';
import TechStackSection from './sections/TechStackSection.vue';
import Testimonial from './sections/Testimonial.vue';

import { Head } from '@inertiajs/vue3';

import ProductSection from '@modules/Billing/resources/js/components/ProductSection.vue';
import type { Product } from '@modules/Billing/resources/js/types';

defineProps<{
    products?: Product[];
}>();
</script>

<template>
    <Head>
        <title>
            {{
                $t(
                    'Saucebase | The best modular Laravel SaaS Starter Kit',
                )
            }}
        </title>
        <meta
            name="description"
            :content="
                $t(
                    'Free, open-source Laravel SaaS starter kit. Ships with auth, billing, admin panel, and a modular copy-and-own architecture. Built on Laravel 13, Vue 3, Inertia.js, and Tailwind CSS 4.',
                )
            "
        />
    </Head>
    <div class="relative isolate flex min-h-screen flex-col overflow-x-hidden">
        <!-- Header with theme toggle -->
        <Header />

        <!-- Hero Section -->
        <HeroSection />

        <!-- Features Section -->
        <FeaturesSection />

        <!-- Modules Section -->
        <ModulesSection />

        <!-- Filament Admin Section -->
        <FilamentSection />

        <!-- Tech Stack Section -->
        <TechStackSection />

        <!-- CTA Section -->
        <CtaSection />

        <!-- FAQ Section -->
        <FaqSection />

        <!-- Testimonial -->
        <Testimonial />

        <!-- Pricing Section -->
        <ProductSection v-if="products?.length" :products="products" />

        <!-- Footer -->
        <Footer />
    </div>
</template>
