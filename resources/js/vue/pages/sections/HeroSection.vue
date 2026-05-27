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
    <div class="bg-background relative isolate flex flex-col">
        <main class="mx-auto w-full py-18">
            <div
                class="relative overflow-hidden mask-t-from-95% mask-b-from-95% px-6 md:mask-r-from-95% md:mask-l-from-95% md:px-16 lg:px-8"
            >
                <div class="mt-6 pt-24 pb-12">
                    <h1
                        class="text-primary text-center text-5xl font-bold [text-shadow:0_4px_25px_color-mix(in_oklch,var(--color-primary)_15%,var(--color-background))] md:text-7xl"
                    >
                        {{ $t('With Saucebase') }}
                    </h1>
                    <h2
                        class="text-secondary mt-1 text-center text-4xl font-bold tracking-tight md:text-5xl"
                    >
                        {{ $t('Your foundation is ready!') }}
                    </h2>
                    <p
                        class="text-muted-foreground mt-4 text-center text-xl tracking-tighter md:text-2xl"
                    >
                        {{
                            $t(
                                'Build production-ready Laravel apps faster than ever.',
                            )
                        }}
                    </p>
                    <p
                        class="text-muted-foreground text-center text-xl tracking-tighter md:text-2xl"
                    >
                        {{
                            $t('Your recipe first. Modules for everything else')
                        }}
                    </p>
                </div>

                <!-- Install command -->
                <div class="mx-auto mb-4 gap-4">
                    <div class="relative mx-auto -mt-3 max-w-xl">
                        <div
                            class="flex items-center gap-3 rounded-full bg-gray-950 px-4 py-3 shadow-sm dark:bg-gray-900"
                        >
                            <Terminal
                                class="size-5 shrink-0 text-gray-500"
                                aria-hidden="true"
                            />
                            <code
                                class="flex-1 text-xs text-green-400 md:text-sm lg:text-lg"
                            >
                                laravel new --using=saucebase/saucebase
                            </code>
                            <button
                                class="cursor-pointer text-gray-300 transition-colors hover:text-white"
                                @click="copyInstall"
                            >
                                <Check
                                    v-if="copiedInstall"
                                    class="size-5 text-green-400"
                                />
                                <Copy v-else class="size-5" />
                            </button>
                        </div>
                        <div
                            class="text-muted-foreground mx-auto mt-6 w-full text-center"
                        >
                            {{ $t('Works with the official Laravel CLI') }} -
                            <a
                                href="https://laravel.com/docs/13.x/installation"
                                class="ml-1 inline-flex items-center gap-0.5 font-medium text-red-700 hover:underline dark:text-red-300"
                            >
                                {{ $t('Laravel docs') }}
                                <ArrowRight class="mt-0.5 size-3 -rotate-45" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
