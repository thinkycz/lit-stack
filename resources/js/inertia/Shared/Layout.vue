<template>
    <div class="bg-gray-200 min-h-screen">
        <div class="h-2 bg-indigo-600 w-full absolute z-20"></div>

        <header class="absolute pin-t pin-l w-full py-8">
            <div class="container mx-auto">
                <div class="flex items-center justify-between px-8">
                    <inertia-link :href="$route('landing')"
                       class="text-2xl tracking-tight font-semibold text-gray-900">
                        <svg class="h-8 fill-current" viewBox="0 0 410 90" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path serif:id="36cb5501-1722-45f6-b526-55059fe3f473" d="M142.473 74.031v-5.926H118.77V18.362h-6.724v55.669h30.427zm12.08-50.826c2.735 0 3.932-1.424 3.932-3.59V18.59c0-2.165-1.197-3.59-3.932-3.59-2.678 0-3.875 1.425-3.875 3.59v1.025c0 2.166 1.197 3.59 3.875 3.59zm-3.191 50.826h6.382V32.892h-6.382v41.139zm37.037 0v-5.584h-8.376V38.476h9.003v-5.584h-9.003V21.439h-5.755v7.692c0 2.792-.854 3.761-3.59 3.761h-3.817v5.584h6.78v28.775c0 3.988 2.394 6.78 6.781 6.78h7.977zm46.04.969c11.966 0 19.145-6.553 19.145-16.752 0-8.319-4.729-13.106-15.555-15.556l-4.558-1.025c-7.009-1.596-10.428-3.989-10.428-9.288 0-5.983 4.388-9.06 11.453-9.06 6.496 0 10.712 2.621 13.732 6.838l5.015-3.647c-4.16-5.926-10.029-9.117-18.405-9.117-10.94 0-18.462 5.356-18.462 15.214 0 8.547 5.585 13.048 15.727 15.327l4.558 1.026c7.351 1.71 10.314 4.331 10.314 9.573 0 6.382-4.331 10.541-12.308 10.541-6.439 0-11.111-2.792-14.986-7.977l-4.957 4.159c4.445 6.04 10.769 9.744 19.715 9.744zm47.123-.969v-5.584h-8.376V38.476h9.002v-5.584h-9.002V21.439h-5.755v7.692c0 2.792-.855 3.761-3.59 3.761h-3.818v5.584h6.781v28.775c0 3.988 2.393 6.78 6.78 6.78h7.978zm44.444 0v-5.584h-4.729V45.769c0-8.661-5.869-13.846-15.784-13.846-7.407 0-12.364 3.647-14.587 8.034l3.818 3.59c2.222-3.761 5.527-6.154 10.484-6.154 6.496 0 9.687 3.191 9.687 9.06v4.046h-8.091c-11.966 0-17.55 4.33-17.55 12.022 0 7.693 5.071 12.479 13.789 12.479 5.755 0 10.143-2.621 11.852-7.692h.399c.513 3.874 2.393 6.723 7.122 6.723h3.59zm-21.937-4.444c-4.957 0-8.148-2.336-8.148-6.382v-1.709c0-3.989 3.304-6.211 10.541-6.211h8.433v6.781c0 4.216-4.501 7.521-10.826 7.521zM350.394 75c7.863 0 13.162-3.818 15.84-9.744l-4.672-3.133c-2.223 4.729-5.983 7.179-11.168 7.179-7.579 0-11.453-5.185-11.453-12.365v-7.008c0-7.18 3.874-12.365 11.453-12.365 5.071 0 8.547 2.507 10.085 6.724l5.356-2.735c-2.393-5.641-7.293-9.63-15.441-9.63-11.567 0-18.348 8.376-18.348 21.539 0 13.162 6.781 21.538 18.348 21.538zm24.843-.969h6.382V59.33l6.153-6.267 13.619 20.968h7.749l-16.752-24.9 15.214-16.239h-7.75L388.228 45.37l-6.324 7.066h-.285V15h-6.382v59.031z" fill-rule="nonzero"/><path d="M91.404 29.188C88.104 14.618 78.509 4.976 68.071.364 81.05 11.799 93.006 33.928 78.131 54.09c-6.17 8.367-18.51 11.674-23.68 9.341 0 0 7.992-1.697 12.963-6.044 9.667-9.151 12.897-23.892 5.16-37.294a29.528 29.528 0 0 0-3.832-5.222c-.021-.023-.038-.047-.058-.07C63.246 8.314 55.778 4.442 47.753 3.254c-10.417-1.957-23.851.588-33.911 9.892C2.874 23.291-.678 36.42.548 47.768 3.959 30.809 17.146 9.392 42.044 12.189c10.333 1.163 19.364 10.195 19.93 15.84 0 0-6.023-9.452-20.962-9.452-.274.004-.853.027-.868.027l-.191.011c-9.714.38-19.157 5.461-24.917 15.439a29.418 29.418 0 0 0-2.607 5.93l-.032.084c-2.898 7.954-2.517 16.357.464 23.899C16.376 73.97 25.298 84.332 38.385 88.39c14.27 4.427 27.417.936 36.63-5.797-16.394 5.521-41.535 4.812-51.561-18.147-4.161-9.531-.855-21.869 3.751-25.181 0 0-5.175 9.942 2.297 22.878 5.116 8.543 14.401 14.449 26.195 14.449.568 0 5.122-.355 6.764-.723l.091-.012c8.336-1.468 15.423-6 20.463-12.353 6.906-8.042 11.418-20.952 8.389-34.316z" fill-rule="nonzero"/></svg>
                    </inertia-link>

                    <ul class="text-sm text-grey-dark list-reset flex items-center">
                        <template v-if="$page.user">
                            <li class="mr-8">
                                <inertia-link :href="$route('logout')"
                                              class="font-semibold text-gray-900 hover:text-orange-500">
                                    Log out
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link :href="$route('app.dashboard')"
                                              class="py-2 px-6 rounded-full font-bold hidden sm:inline-block inline-block float-right text-white bg-indigo-600">
                                    Go to Dashboard
                                </inertia-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="mr-8">
                                <inertia-link :href="$route('login')"
                                              class="font-semibold text-gray-900 hover:text-orange-500">
                                    Log in
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link :href="$route('register')"
                                              class="py-2 px-6 rounded-full font-bold hidden sm:inline-block inline-block float-right text-white bg-indigo-600">
                                    Sign up
                                </inertia-link>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </header>

        <div class="pt-24">
            <slot></slot>
        </div>

        <footer class="bg-gray-900 text-white pt-12 pb-8 px-4">
            <div class="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
                <div class="w-1/2">
                    <inertia-link :href="$route('landing')" class="block mr-4">
                        <svg class="h-8" viewBox="0 0 410 90" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path serif:id="082498eb-b0f8-40c9-b1a1-753417f1f39a" d="M142.473 74.031v-5.926H118.77V18.362h-6.724v55.669h30.427zm12.08-50.826c2.735 0 3.932-1.424 3.932-3.59V18.59c0-2.165-1.197-3.59-3.932-3.59-2.678 0-3.875 1.425-3.875 3.59v1.025c0 2.166 1.197 3.59 3.875 3.59zm-3.191 50.826h6.382V32.892h-6.382v41.139zm37.037 0v-5.584h-8.376V38.476h9.003v-5.584h-9.003V21.439h-5.755v7.692c0 2.792-.854 3.761-3.59 3.761h-3.817v5.584h6.78v28.775c0 3.988 2.394 6.78 6.781 6.78h7.977zm46.04.969c11.966 0 19.145-6.553 19.145-16.752 0-8.319-4.729-13.106-15.555-15.556l-4.558-1.025c-7.009-1.596-10.428-3.989-10.428-9.288 0-5.983 4.388-9.06 11.453-9.06 6.496 0 10.712 2.621 13.732 6.838l5.015-3.647c-4.16-5.926-10.029-9.117-18.405-9.117-10.94 0-18.462 5.356-18.462 15.214 0 8.547 5.585 13.048 15.727 15.327l4.558 1.026c7.351 1.71 10.314 4.331 10.314 9.573 0 6.382-4.331 10.541-12.308 10.541-6.439 0-11.111-2.792-14.986-7.977l-4.957 4.159c4.445 6.04 10.769 9.744 19.715 9.744zm47.123-.969v-5.584h-8.376V38.476h9.002v-5.584h-9.002V21.439h-5.755v7.692c0 2.792-.855 3.761-3.59 3.761h-3.818v5.584h6.781v28.775c0 3.988 2.393 6.78 6.78 6.78h7.978zm44.444 0v-5.584h-4.729V45.769c0-8.661-5.869-13.846-15.784-13.846-7.407 0-12.364 3.647-14.587 8.034l3.818 3.59c2.222-3.761 5.527-6.154 10.484-6.154 6.496 0 9.687 3.191 9.687 9.06v4.046h-8.091c-11.966 0-17.55 4.33-17.55 12.022 0 7.693 5.071 12.479 13.789 12.479 5.755 0 10.143-2.621 11.852-7.692h.399c.513 3.874 2.393 6.723 7.122 6.723h3.59zm-21.937-4.444c-4.957 0-8.148-2.336-8.148-6.382v-1.709c0-3.989 3.304-6.211 10.541-6.211h8.433v6.781c0 4.216-4.501 7.521-10.826 7.521zM350.394 75c7.863 0 13.162-3.818 15.84-9.744l-4.672-3.133c-2.223 4.729-5.983 7.179-11.168 7.179-7.579 0-11.453-5.185-11.453-12.365v-7.008c0-7.18 3.874-12.365 11.453-12.365 5.071 0 8.547 2.507 10.085 6.724l5.356-2.735c-2.393-5.641-7.293-9.63-15.441-9.63-11.567 0-18.348 8.376-18.348 21.539 0 13.162 6.781 21.538 18.348 21.538zm24.843-.969h6.382V59.33l6.153-6.267 13.619 20.968h7.749l-16.752-24.9 15.214-16.239h-7.75L388.228 45.37l-6.324 7.066h-.285V15h-6.382v59.031z" fill="#fff" fill-rule="nonzero"/><path d="M91.404 29.188C88.104 14.618 78.509 4.976 68.071.364 81.05 11.799 93.006 33.928 78.131 54.09c-6.17 8.367-18.51 11.674-23.68 9.341 0 0 7.992-1.697 12.963-6.044 9.667-9.151 12.897-23.892 5.16-37.294a29.528 29.528 0 0 0-3.832-5.222c-.021-.023-.038-.047-.058-.07C63.246 8.314 55.778 4.442 47.753 3.254c-10.417-1.957-23.851.588-33.911 9.892C2.874 23.291-.678 36.42.548 47.768 3.959 30.809 17.146 9.392 42.044 12.189c10.333 1.163 19.364 10.195 19.93 15.84 0 0-6.023-9.452-20.962-9.452-.274.004-.853.027-.868.027l-.191.011c-9.714.38-19.157 5.461-24.917 15.439a29.418 29.418 0 0 0-2.607 5.93l-.032.084c-2.898 7.954-2.517 16.357.464 23.899C16.376 73.97 25.298 84.332 38.385 88.39c14.27 4.427 27.417.936 36.63-5.797-16.394 5.521-41.535 4.812-51.561-18.147-4.161-9.531-.855-21.869 3.751-25.181 0 0-5.175 9.942 2.297 22.878 5.116 8.543 14.401 14.449 26.195 14.449.568 0 5.122-.355 6.764-.723l.091-.012c8.336-1.468 15.423-6 20.463-12.353 6.906-8.042 11.418-20.952 8.389-34.316z" fill="#fff" fill-rule="nonzero"/></svg>
                    </inertia-link>
                    <div class="text-sm mt-4">
                        <p class="py-2 px-3 text-gray-500">{{ $page.company.name }}<br>{{ $page.company.street }}<br>{{ $page.company.zip }} {{ $page.company.city }}</p>
                        <p class="py-2 px-3 text-gray-500">{{ $page.company.phone }}<br>{{ $page.company.email }}</p>
                    </div>
                </div>
                <div class="w-1/2 block sm:flex text-sm mt-6 lg:mt-0">
                    <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                        <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Useful links</li>
                        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Pricing</a></li>
                        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Terms of Use</a></li>
                        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Privacy Policy</a></li>
                    </ul>
                    <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                        <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Get help</li>
                        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Documentation</a></li>
                        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Help and FAQ</a></li>
                        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Contact us</a></li>

                    </ul>
                </div>
            </div>
            <div class="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 text-center text-xs"> © {{ (new Date()).getFullYear() + ' ' + $page.company.name }} | All rights reserved.</div>
        </footer>
    </div>
</template>
