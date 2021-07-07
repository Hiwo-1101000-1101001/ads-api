<template>
    <div class="card__items">
        <Card
            v-for="card in cards"
            :key="card.id"
            :card="card"
        />
    </div>
</template>

<script>

import Card from "../components/Card"

export default {
    props: {
        cards: {
        type: Array,
        default: () => []
        }
    },

    components: {Card},

    data() {
        return {
            cards: []
        }
    },

    mounted() {
        axios
        .get('/api/ads')
        .then(res => (this.cards = res.data.data));
    }
}
</script>
