<template>
    <div>
        <h1>{{ areaName }} Boulders</h1>

        <!-- Display the name of the area -->
        <h2>{{ areaName }}</h2>

        <!-- Display two boulders for the area -->
        <div v-for="boulder in boulders" :key="boulder.id">
            <p>{{ boulder.name }}</p>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            areaName: '',
            boulders: [
                { id: 'boulder1', name: 'Boulder 1' },
                { id: 'boulder2', name: 'Boulder 2' },
                // Add more boulders as needed
            ],
        };
    },
    async asyncData({ params }) {
        // Fetch data based on the area ID (params.id)
        // For simplicity, you can set areaName directly, or fetch data from an API
        return { areaName: `Area ${params.id}` };
    },
});
</script>