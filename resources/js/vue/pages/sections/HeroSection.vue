<script setup lang="ts">
import { trans } from 'laravel-vue-i18n';
import { ArrowRight, Check, Copy, Terminal } from 'lucide-vue-next';
import { onUnmounted, ref } from 'vue';
import { toast } from 'vue-sonner';

const copiedInstall = ref(false);
let copyInstallTimer: ReturnType<typeof setTimeout> | null = null;

function copyInstall() {
    navigator.clipboard
        .writeText('laravel new --using=saucebase/saucebase')
        .then(() => {
            toast.success(trans('Copied to clipboard'));
            if (copyInstallTimer) clearTimeout(copyInstallTimer);
            copiedInstall.value = true;
            copyInstallTimer = setTimeout(
                () => (copiedInstall.value = false),
                2000,
            );
        })
        .catch(() => toast.error(trans('Failed to copy')));
}

onUnmounted(() => {
    if (copyInstallTimer) clearTimeout(copyInstallTimer);
});
</script>

<template>
    <div class="bg-background relative isolate flex h-[85vh] flex-col">
        <main class="mx-auto w-full flex h-full items-center justify-center py-18">
            <div class="relative overflow-hidden md:px-16 lg:px-8">
                <div class="space-y-12">
                    <div>
                        <div class="mb-8 flex justify-center">
                            <span class="inline-flex items-center gap-3 rounded-full border border-border pl-2 pr-5 py-2 text-sm font-medium text-foreground/70 bg-card shadow-xl">
                                <span class="rounded-full ring-4 ring-secondary/20 bg-secondary px-2.5 py-0.5 text-xs font-semibold text-white/90 text-shadow-2xs dark:text-accent-dark">
                                    {{ $t('NEW') }}
                                </span>
                                {{ $t('Introducing Saucebase 2.0') }}
                            </span>
                        </div>
                        <h1
                            class="text-primary text-center text-5xl font-bold [text-shadow:0_4px_25px_color-mix(in_oklch,var(--color-primary)_15%,var(--color-background))] md:text-7xl">
                            {{ $t('With Saucebase') }}
                        </h1>
                        <h2 class="text-secondary mt-1 text-center text-4xl font-bold tracking-tight md:text-5xl">
                            {{ $t('Your foundation is ready!') }}
                        </h2>
                    </div>
                    <div>
                        <p class="text-muted-foreground mt-4 text-center text-xl md:text-2xl">
                            {{
                                $t(
                                    'Build production-ready Laravel apps faster than ever.',
                                )
                            }}
                        </p>
                        <p class="text-muted-foreground text-center text-xl md:text-2xl">
                            {{
                                $t('Your recipe first. Modules for everything else')
                            }}
                        </p>
                    </div>
                    <!-- Install command -->
                    <div class="mx-auto mb-4 gap-4">
                        <div class="relative mx-auto max-w-xl">
                            <div
                                class="flex items-center gap-3 rounded-full bg-gray-950 px-4 py-3 shadow-xl dark:bg-gray-900">
                                <Terminal class="size-5 shrink-0 text-gray-500" aria-hidden="true" />
                                <code class="flex-1 text-xs text-green-400 md:text-sm lg:text-lg">
                                laravel new --using=saucebase/saucebase
                            </code>
                                <button class="cursor-pointer text-gray-300 transition-colors hover:text-white"
                                    @click="copyInstall">
                                    <Check v-if="copiedInstall" class="size-5 text-green-400" />
                                    <Copy v-else class="size-5" />
                                </button>
                            </div>
                            <div class="text-muted-foreground mx-auto mt-6 w-full text-center">
                                {{ $t('Works with the official Laravel CLI') }} -
                                <a href="https://laravel.com/docs/13.x/installation"
                                    class="ml-1 inline-flex items-center gap-0.5 font-medium text-red-700 hover:underline dark:text-red-300">
                                    {{ $t('Laravel docs') }}
                                    <ArrowRight class="mt-0.5 size-3 -rotate-45" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg class="size-full absolute -z-10 inset-0 text-gray-900 dark:text-gray-100 opacity-10 dark:opacity-5" width="1440" height="720" viewBox="0 0 1440 720" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" stroke-opacity=".7" d="M-15.227 702.342H1439.7" />
                <circle cx="711.819" cy="372.562" r="308.334" stroke="currentColor" stroke-opacity=".7" />
                <circle cx="16.942" cy="20.834" r="308.334" stroke="currentColor" stroke-opacity=".7" />
                <path stroke="currentColor" stroke-opacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
                <circle cx="782.595" cy="411.166" r="308.334" stroke="currentColor" stroke-opacity=".7" />
            </svg>
        </main>
    </div>
</template>
