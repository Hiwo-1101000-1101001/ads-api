
<template>
    <header class="header">
        <div class="wrapper">
            <div class="logo">
                <router-link :to="{name: 'main' }">{{ brand_name }}</router-link>
            </div>
            <nav class="header-nav">
                <ul>
                    <li v-for="link in links" :key="link.id"><a :href="link.href">{{ link.title }}</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    
    import "../../assets/scss/header.scss";
    export default {
        data() {
            return {
                links: [
                    {
                        title: "Главная",
                        href: "/"
                    },
                    {
                        title: "Категории",
                        href: "/categories"
                    },
                ],
                brand_name: "Типо Авито"
            }
        }
    }
</script>