<template>
    <div class="bg-gray-200 min-h-screen">
        <header class="px-6 bg-white py-2">
            <div class="container mx-auto flex flex-wrap items-center relative">
                <div class="flex-1 flex justify-between items-center font-black text-gray-700">
                    <inertia-link :href="$route('app.dashboard')"
                                  class="text-2xl tracking-tight font-semibold text-gray-700">
                        <svg class="h-8 fill-current" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg"
                             xmlns:serif="http://www.serif.com/" fill-rule="evenodd" clip-rule="evenodd"
                             stroke-linejoin="round" stroke-miterlimit="2">
                            <path
                                d="M91.404 29.188C88.104 14.618 78.509 4.976 68.071.364 81.05 11.799 93.006 33.928 78.131 54.09c-6.17 8.367-18.51 11.674-23.68 9.341 0 0 7.992-1.697 12.963-6.044 9.667-9.151 12.897-23.892 5.16-37.294a29.528 29.528 0 0 0-3.832-5.222c-.021-.023-.038-.047-.058-.07C63.246 8.314 55.778 4.442 47.753 3.254c-10.417-1.957-23.851.588-33.911 9.892C2.874 23.291-.678 36.42.548 47.768 3.959 30.809 17.146 9.392 42.044 12.189c10.333 1.163 19.364 10.195 19.93 15.84 0 0-6.023-9.452-20.962-9.452-.274.004-.853.027-.868.027l-.191.011c-9.714.38-19.157 5.461-24.917 15.439a29.418 29.418 0 0 0-2.607 5.93l-.032.084c-2.898 7.954-2.517 16.357.464 23.899C16.376 73.97 25.298 84.332 38.385 88.39c14.27 4.427 27.417.936 36.63-5.797-16.394 5.521-41.535 4.812-51.561-18.147-4.161-9.531-.855-21.869 3.751-25.181 0 0-5.175 9.942 2.297 22.878 5.116 8.543 14.401 14.449 26.195 14.449.568 0 5.122-.355 6.764-.723l.091-.012c8.336-1.468 15.423-6 20.463-12.353 6.906-8.042 11.418-20.952 8.389-34.316z"
                                fill-rule="nonzero"/>
                        </svg>
                    </inertia-link>
                </div>

                <label for="menu-toggle" class="cursor-pointer lg:hidden block">
                    <svg class="fill-current text-gray-600 hover:text-gray-800" xmlns="http://www.w3.org/2000/svg"
                         width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle">

                <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul class="lg:flex items-center justify-between text-sm font-medium text-gray-700 pt-4 lg:pt-0">
                            <li>
                                <inertia-link class="lg:p-4 py-3 px-0 block text-gray-600 hover:text-gray-900 lg:mb-0 mb-2"
                                              :class="{'text-indigo-500 hover:text-indigo-500 font-bold': $isRoute('app.*')}"
                                              :href="$route('app.dashboard')">
                                    My Application
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link class="lg:p-4 py-3 px-0 block text-gray-600 hover:text-gray-900 lg:mb-0 mb-2"
                                              :class="{'text-indigo-500 hover:text-indigo-500 font-bold': $isRoute('contact.index')}"
                                              :href="$route('contact.index')">
                                    Contact Us
                                </inertia-link>
                            </li>
                        </ul>
                    </nav>

                    <button @click="menuOpen = !menuOpen"
                            class="group lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor border-l border-gray-300 pl-6 focus:outline-none">
                        <p class="font-bold text-xs pr-2 text-gray-700 text-right ignore-body-click">
                            {{ $page.user.name }}
                        </p>
                        <img
                            class="rounded-full w-10 h-10 border-2 border-transparent group-hover:border-indigo-400 ignore-body-click"
                            :src="$page.user.gravatar"
                            alt="avatar">
                    </button>

                    <div v-show="menuOpen"
                         class="absolute lg:mt-12 pt-1 z-40 left-0 lg:left-auto lg:right-0 lg:top-0 lg:w-auto w-full">
                        <div class="bg-white shadow-xl lg:mt-2 lg:px-8 px-6 lg:py-4 pb-4 pt-0 rounded rounded-t-none">
                            <inertia-link :href="$route('settings.profile.index')"
                                          class="py-2 block text-gray-600 hover:text-gray-900 font-medium text-sm">
                                My profile
                            </inertia-link>
                            <inertia-link :href="$route('logout')"
                                          class="py-2 block text-gray-600 hover:text-gray-900 font-medium text-sm">
                                Log out
                            </inertia-link>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        <div class="container mx-auto py-8">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuOpen: false
            }
        },

        updated() {
            if (this.$page.session.message) {
                this.$toast(this.$page.session.message, {type: this.$page.session.message_type || 'default'});
                this.$page.session.message = null;
            }
        },
    }
</script>
