<template>
    <layout>
        <div class="flex py-40">
            <div class="sm:max-w-xl md:max-w-2xl w-full m-auto">
                <form @submit.prevent="submit"
                      class="flex items-stretch bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-indigo-500 sm:border-0">
                    <div
                        class="flex hidden overflow-hidden relative sm:block w-5/12 md:w-6/12 bg-gray-600 text-gray-300 py-4 bg-cover bg-center"
                        style="background-image: url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
                        <div class="flex-1 absolute bottom-0 text-white p-10">
                            <h3 class="text-4xl font-bold inline-block">Registration</h3>
                            <p class="text-gray-500 whitespace-no-wrap">
                                Create a new account
                            </p>
                        </div>
                        <svg class="absolute animate h-full w-4/12 sm:w-2/12 right-0 inset-y-0 fill-current text-white"
                             viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <polygon points="0,0 100,100 100,0"></polygon>
                        </svg>
                    </div>
                    <div class="flex-1 p-6 sm:p-10 sm:py-12">
                        <h3 class="text-xl text-gray-700 font-bold mb-6">
                            Register <span class="text-gray-400 font-light">for an account</span></h3>

                        <div class="mb-4">
                            <input type="text"
                                   class="px-3 w-full py-2 bg-gray-200 border border-gray-200 rounded focus:border-gray-400 focus:outline-none focus:bg-white"
                                   :class="{'border-red-500': errors.name}"
                                   v-model="form.name"
                                   placeholder="Name"
                                   required
                                   autofocus>
                            <p v-if="errors.name" class="text-red-500 text-xs italic mt-2">
                                {{ errors.name[0] }}
                            </p>
                        </div>

                        <div class="mb-4">
                            <input type="email"
                                   class="px-3 w-full py-2 bg-gray-200 border border-gray-200 rounded focus:border-gray-400 focus:outline-none focus:bg-white"
                                   :class="{'border-red-500': errors.email}"
                                   v-model="form.email"
                                   placeholder="Email Address"
                                   required>
                            <p v-if="errors.email" class="text-red-500 text-xs italic mt-2">
                                {{ errors.email[0] }}
                            </p>
                        </div>

                        <div class="mb-4">
                            <input type="password"
                                   class="px-3 w-full py-2 bg-gray-200 border border-gray-200 rounded focus:border-gray-400 focus:outline-none focus:bg-white"
                                   :class="{'border-red-500': errors.password}"
                                   v-model="form.password"
                                   placeholder="Password"
                                   required>
                            <p v-if="errors.password" class="text-red-500 text-xs italic mt-2">
                                {{ errors.password[0] }}
                            </p>
                        </div>

                        <div class="mb-4">
                            <input type="password"
                                   class="px-3 w-full py-2 bg-gray-200 border border-gray-200 rounded focus:border-gray-400 focus:outline-none focus:bg-white"
                                   v-model="form.password_confirmation"
                                   required
                                   placeholder="Confirm Password">
                        </div>

                        <div class="flex flex-wrap items-center">
                            <div class="w-full sm:flex-1">
                                <input type="submit" value="Register"
                                       class="w-full sm:w-auto bg-indigo-500 text-indigo-100 px-6 py-2 rounded hover:bg-indigo-600 focus:outline-none cursor-pointer">
                            </div>
                        </div>

                        <p class="w-full text-xs text-left text-gray-700 mt-8">
                            Already have an account?
                            <inertia-link :href="$route('login')"
                                          class="text-blue-500 hover:text-blue-700 no-underline">
                                Log in
                            </inertia-link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </layout>
</template>

<script>
    export default {
        props: ['errors'],

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
            }
        },

        methods: {
            submit() {
                this.$inertia.post(this.$route('register'), this.form);
            }
        }
    }
</script>
