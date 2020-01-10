<template>
    <app-layout>
        <div class="container mx-auto max-w-3xl">
            <h1 class="text-2xl font-bold text-gray-700 px-6 md:px-0">Profile Settings</h1>

            <ul class="flex border-b border-gray-300 text-sm font-medium text-gray-600 mt-3 px-6 md:px-0">
                <li class="mr-8 text-gray-700 hover:text-gray-900"
                    :class="{'border-b-2 border-gray-800': $isRoute('settings.profile.index')}">
                    <inertia-link :href="$route('settings.profile.index')" class="py-4 inline-block">
                        My Profile
                    </inertia-link>
                </li>
                <li class="mr-8 text-gray-700 hover:text-gray-900"
                    :class="{'border-b-2 border-gray-800': $isRoute('settings.password.index')}">
                    <inertia-link :href="$route('settings.password.index')" class="py-4 inline-block">
                        Password
                    </inertia-link>
                </li>
            </ul>

            <form @submit.prevent="submit">
                <div class="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
                    <div class="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
                        <h2 class="font-medium text-md text-gray-700 mb-4 tracking-wide">Security settings</h2>
                        <p class="text-xs text-gray-500">
                            In this section, you can change your password
                        </p>
                    </div>
                    <div class="md:w-2/3 w-full">
                        <div class="py-8 px-16">
                            <label for="password" class="text-sm text-gray-600">Password</label>
                            <input type="password"
                                   id="password"
                                   class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                                   :class="{'border-red-500': errors.password}"
                                   v-model="form.password">
                            <p v-if="errors.password" class="text-red-500 text-xs italic mt-2">
                                {{ errors.password[0] }}
                            </p>
                        </div>
                        <hr class="border-gray-200">
                        <div class="py-8 px-16">
                            <label for="password_confirmation" class="text-sm text-gray-600">
                                Password Confirmation</label>
                            <input type="password"
                                   id="password_confirmation"
                                   class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                                   v-model="form.password_confirmation">
                        </div>
                    </div>

                </div>
                <div class="p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200">
                    <p class="float-left text-xs text-gray-500 tracking-tight mt-3">
                        Please click Save to change your password
                    </p>
                    <input type="submit"
                           class="bg-indigo-500 hover:bg-indigo-600 focus:outline-none text-white text-sm font-medium px-6 py-3 rounded-full float-right uppercase cursor-pointer"
                           value="Save">
                </div>
            </form>
        </div>
    </app-layout>
</template>

<script>
    export default {
        props: ['errors'],

        data() {
            return {
                form: {
                    password: '',
                    password_confirmation: '',
                }
            }
        },

        methods: {
            submit() {
                this.$inertia.put(this.$route('settings.password.update'), this.form);
            }
        }
    }
</script>
