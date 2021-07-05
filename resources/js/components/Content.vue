<template>
    <div class="wrapper">
        <Card :cards="cards"></Card>
    </div>
</template>

<script>
    import Card from './Card.vue';
    export default {
        components: {
            Card
        },
        data() {
            return {
                cards: [
                    {
                        id: 0,
                        title: "Продам гараж",
                        images: [
                            {
                                image: "https://static.turbosquid.com/Preview/2014/05/27__07_05_07/KidneyHQ.3.jpg09b29b56-229c-4ffb-a20d-69b923499e19Large.jpg"
                            },
                            {
                                image: "asdasd"
                            },
                            {
                                image: "asdasdasd"
                            },
                        ],
                        price: 12342,
                        description: "asdaadsda d asasdasd asdasd"
                    },
                    {
                        id: 1,
                        title: "Продам дом",
                        images: [
                            {
                                image: "https://mrfilin.com/wp-content/uploads/2018/01/pochka-cheloveka.jpg"
                            },
                            {
                                image: "asdasd"
                            },
                            {
                                image: "asdasdasd"
                            },
                        ],
                        price: 12312313,
                        description: "asdaadsda d asasdasd asdasd"
                    },
                    {
                        id: 2,
                        title: "Продам дом",
                        images: [
                            {
                                image: "https://mrfilin.com/wp-content/uploads/2018/01/pochka-cheloveka.jpg"
                            },
                            {
                                image: "asdasd"
                            },
                            {
                                image: "asdasdasd"
                            },
                        ],
                        price: 12312313,
                        description: "asdaadsda d asasdasd asdasd"
                    },
                    {
                        id: 3,
                        title: "Продам дом",
                        images: [
                            {
                                image: "https://mrfilin.com/wp-content/uploads/2018/01/pochka-cheloveka.jpg"
                            },
                            {
                                image: "asdasd"
                            },
                            {
                                image: "asdasdasd"
                            },
                        ],
                        price: 12312313,
                        description: "asdaadsda d asasdasd asdasd"
                    },
                ]
            }
            
        }
    }
</script>