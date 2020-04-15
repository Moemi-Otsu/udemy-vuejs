<template>
  <div>
    <LikeHeader>
      <h3>初めまして</h3>
    </LikeHeader>
    <likeNumber :total-number="number" @my-click="incrementNumber"></likeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model.lazy="eventData.title"
      >
      <p>{{ eventData.title }}</p>
      <label for="maxNumber">最大人数</label>
      <input
              id="maxNumber"
              type="number"
              v-model.number="eventData.maxNumber"
      >
      <p>{{ eventData.maxNumber }}</p>
      <label for="host">主催者</label>
      <input
              id="host"
              type="text"
              v-model.trim="eventData.host"
      >
      <p>{{ eventData.host }}</p>
      <lavel for="detail">イベント内容</lavel>
      <textarea
        id="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p>
      <input
        type="checkbox"
        id="isPrivate"
        v-model="eventData.isPrivate"
      >
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input
        type="checkbox"
        id="10"
        value="10代"
        v-model="eventData.target"
      >
      <label for="10">10代</label>
      <input
        type="checkbox"
        id="20"
        value="20代"
        v-model="eventData.target"
      >
      <label for="20">20代</label>
      <input
        type="checkbox"
        id="30"
        value="30代"
        v-model="eventData.target"
      >
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader"
import About from "./components/About";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home",
      eventData: {
        title: "",
        maxNumber: 8,
        host: "",
        detail: "",
        isPrivate: false,
        target: []
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>