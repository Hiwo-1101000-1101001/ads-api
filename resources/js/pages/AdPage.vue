<template>
    <div class="wrapper">
        <div>
            <h1>{{ ad.name }} </h1>
            <span>{{ ad.price }} руб</span>
        </div>
        <div class="images">
            <img :src="image.image" alt="" v-for="image in ad.images" :key="image.id">
        </div>
        <p class="description">{{ ad.description }}</p>
    </div>
</template>

<script>


export default {
    data() {
        return {
            ad: []
        }
    },

    mounted() {
        this.loadAd(this.$route.params.id);
    },
    methods: {
        loadAd(id) {
            axios.get('/api/ads/' + id)
            .then(res => {
                this.ad = res.data;
            })
        }
    }
}
</script>
