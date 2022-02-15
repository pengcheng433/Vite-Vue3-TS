import { createWebHashHistory, createRouter } from "vue-router"

import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import Switch from "./lib/Switch.vue"
import Button from "./components/Button.vue"
import Dialog from "./components/Dialog.vue"
import Tabs from "./components/Tabs.vue"
const history = createWebHashHistory()
export const Router = createRouter(
    {
        history: history,
        routes: [
            { path: "/", component: Home },
            {
                path: "/doc",
                component: Doc,
                children: [
                    { path: 'switch', component: Switch },
                    { path: 'button', component: Button },
                    { path: 'dialog', component: Dialog },
                    { path: 'tabs', component: Tabs },

                ]

            }
        ]
    }
)
