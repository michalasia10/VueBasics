import { createApp } from 'vue';
import App from "./App";
import BaseCard from "../../vue_next_app/src/components/UI/BaseCard";
import BaseButton from "./components/UI/BaseButton";

const app = createApp(App);
app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.mount('#app');

