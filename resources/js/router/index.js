import VueRouter from "vue-router"

import MainPage from "../pages/MainPage";
import AdPage from "../pages/AdPage";
import AdCreate from "../pages/AdCreate";

export default new VueRouter ({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "main",
            component: MainPage
        },
        {
            path: "/ads/:id",
            name: "ad",
            component: AdPage
        },
        {
            path: "/ads/create",
            name: "create",
            component: AdCreate
        }
    ]
})