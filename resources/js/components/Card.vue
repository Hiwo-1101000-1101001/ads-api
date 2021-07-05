<template>
    <div class="card__items">
        <div class="card" v-for="card in cards" :key="card.id">
            <img class="card__image" :src="card.images[0].image" :alt="card.title">
            <div class="card__body">
                <span class="card__title">{{ card.title }}</span>
                <br>
                <span class="card__price">{{ card.price }} руб</span>
            </div>
        </div>
    </div>
</template>

<script>
    import "../../assets/scss/card.scss";
    export default {
        props: ["cards"], 
    }
</script>