<template>
  <div class="greeter-container">
    <button @click="handleClick">{{ buttonText }}</button>
  </div>
</template>
  
  <script>
export default {
  props: {
    message: {
      type: String,
      default: "Hello from Greeter!",
    },
    buttonText: {
      type: String,
      default: "Click Me",
    },
    outputSelector: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick() {
      if (this.outputSelector) {
        const outputElement = document.querySelector(this.outputSelector);
        if (outputElement) {
          // Updates host element
          outputElement.innerText = this.message;
          alert(this.message)
        }
      } else {
        // Fallback: console log & Alert
        console.log(this.message);
        alert(this.message);
      }
    },
  },
};
</script>
  
  <style scoped>
.greeter-container {
  all: initial; /* Prevent CSS conflicts */
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

button {
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background: #0056b3;
}
</style>
  