<template>
    <app-layout>
        <div class="flex">
            <sidebar></sidebar>

            <div class="w-full bg-white rounded-lg mx-auto px-10 py-8">
                <h1 class="text-2xl font-medium mb-2">Integrations</h1>
                <h2 class="font-medium text-sm text-gray-500 mb-4 uppercase tracking-wide">This is your dashboard</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore eligendi et ex harum
                    sapiente! Animi culpa cum cupiditate eligendi eveniet harum necessitatibus nesciunt, officiis,
                    sapiente sequi unde vero voluptatum!</p>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import Sidebar from './Sidebar';

    export default {
        components: {
            Sidebar
        }
    }
</script>
