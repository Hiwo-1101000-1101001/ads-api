<template>

    <a :href='"ads/" + card.id'>
        <div class="card">
            <img class="card__image" :src="card.images[0].image" :alt="card.name">
            <div class="card__body">
                <h3 class="card__title">{{ card.name }}</h3>
                <span class="card__price">{{ card.price }} руб</span>
            </div>
        </div>
    </a>
</template>

<script>
    import "../../assets/scss/card.scss";
    export default {
        props: {
            card:  {
                type: Object,
            }
        }
    }
</script>