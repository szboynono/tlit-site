<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <NavBar />
  <div class="flex max-w-[1600px] m-auto mt-[300px]">
    <div class="flex flex-col w-[50%] justify-center">
      <h2
        class="text-6xl bold text-center mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Software consulting and development for your digital success
      </h2>
      <p class="text-center text-3xl">
        Your full-service technology provider! We love hacking, get in touch
        with one of our consultants.
      </p>
    </div>
    <font-awesome-icon
      icon="bolt-lightning"
      class="h-[300px] w-[50%]"
    />
  </div>
  <div id="services"></div>
  <div class="max-w-[1600px] m-auto my-[500px] flex gap-x-20">
    <font-awesome-icon class="h-[300px] w-[50%]" icon="laptop-code" />
    <div>
      <h2 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Services</h2>
      <div class="flex flex-col gap-4 mt-10">
        <li class="text-2xl bold">Web Development</li>
        <li class="text-2xl bold">Smart Contract Development</li>
        <li class="text-2xl bold">NFT Launching</li>
        <li class="text-2xl bold">WEB 3.0 Community Mangement</li>
        <li class="text-2xl bold">Agile Coaching</li>
        <li class="text-2xl bold">Mobile Development</li>
      </div>
    </div>
  </div>
  <div id="about" style="position: relative; top: -500px;"></div>
  <div class="max-w-[800px] m-auto my-[500px] flex gap-x-20">
    <div class="text-center">
      <h2 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About US</h2>
      <p class="text-3xl mt-10">
        The diversity and strength of our workforce are fundamental to our success defining and enabling the digital future. People are our greatest asset, and we strive to attract and retain the very best talent the industry has to offer.
      </p>
    </div>
  </div>
  <div id="contact"></div>
  <div class="max-w-[500px] m-auto mt-[200px] my-[500px]">
    <div class="m-auto">
      <h2 class="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Contact</h2>
      <div class="mt-10 ml-10">
        <p class="text-3xl">
          Phone number: (905) 920-5367
        </p>
        <p class="text-3xl mt-5">
          Email: szboylbd@hotmail.com
        </p>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  margin: 32px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
