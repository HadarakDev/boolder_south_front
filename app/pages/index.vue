
<template>
    <div>
        <h1>{{ pageTitle }}</h1>
        <header>
            <h2>{{ headerText }}</h2>
        </header>

        <ul>
            <li v-for="area in areas" :key="area.id">
                <router-link :to="'/area/' + area.id">{{ area.name }}</router-link>
            </li>
        </ul>

        <!-- Add more content or components here as needed -->
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import '~/assets/css/main.css'

export default defineComponent({
    data() {
        return {
            pageTitle: 'Bouldering in South of France',
            headerText: 'Discover thousands of problems & circuits for all levels.',
            areas: [
                { id: 'naviteau', name: 'Naviteau' },
                { id: 'leprieure', name: 'Le Prieuré' },
                // Add more areas as needed
            ],
        };
    },
});
</script>
  
<style scoped>
/* Add your styles here */
</style>
  