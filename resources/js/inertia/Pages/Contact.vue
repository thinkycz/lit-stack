<template>
    <app-layout>
        <div class="max-w-5xl mx-auto">
            <div class="py-24">
                <h2 class="w-full text-4xl font-bold leading-tight text-center text-gray-700">Contact Us</h2>
                <p class="text-center mt-4 text-gray-600">Feel free to reach out to us! We're here to help.</p>
            </div>

            <div class="max-w-3xl bg-white rounded-lg mx-auto px-16 py-12">
                <h1 class="text-2xl font-medium mb-2 text-gray-800">What's on your mind?</h1>
                <form @submit.prevent="submit" class="flex flex-col">
                    <div class="mt-4">
                        <input type="text"
                               class="px-3 w-full py-2 bg-gray-200 border border-gray-200 rounded focus:border-gray-400 focus:outline-none focus:bg-white"
                               :class="{'border-red-500': errors.subject}"
                               placeholder="Subject"
                               v-model="form.subject">
                        <p v-if="errors.subject" class="text-red-500 text-xs italic mt-2">
                            {{ errors.subject[0] }}
                        </p>
                    </div>

                    <div class="mt-4">
                        <textarea
                            class="px-3 w-full py-2 bg-gray-200 border border-gray-200 rounded focus:border-gray-400 focus:outline-none focus:bg-white"
                            :class="{'border-red-500': errors.message}"
                            v-model="form.message"
                            cols="30"
                            rows="10"
                            placeholder="Your question">
                    </textarea>
                        <p v-if="errors.message" class="text-red-500 text-xs italic mt-2">
                            {{ errors.message[0] }}
                        </p>
                    </div>

                    <button
                        class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full focus:outline-none cursor-pointer mt-4">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </app-layout>
</template>

<script>
    export default {
        props: ['errors'],

        data() {
            return {
                form: {
                    subject: '',
                    message: ''
                }
            }
        },

        methods: {
            submit() {
                this.$inertia.post(this.$route('contact.store'), this.form);
            }
        }
    }
</script>
