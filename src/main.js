import { createApp } from 'vue'
import './style.css'
import Greeter from "./components/ButtonGreeter.vue";
// import App from './App.vue'
// createApp(App).mount('#app')

window.Greeter = {
    init(selector, props) {
      const el = document.querySelector(selector);
      if (el) {
        const app = createApp(Greeter, props);
        app.mount(el);
      } else {
        console.error("Element not found:", selector);
      }
    }
  };
