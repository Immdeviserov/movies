<template>
  <div class="search">
    <div class="input-wrapper">
      <input
        v-model="search"
        placeholder="Search some movies..."
        class="input"
        @input="onInput"
      />
      <div class="suggestions-block">
        <div
          class="suggestion"
          v-for="(suggestion, index) in suggestions"
          :key="index"
        >
          {{suggestion}}
        </div>
      </div>
    </div>
    <button
      @click="test"
      class="button"
    >
      search
    </button>
  </div>
</template>



<script>
import axios from "axios";
import { testPath, requestSearch } from "../assets/js/api";

export default {
  data() {
    return {
      search: "",
      suggestions: []
    };
  },
  methods: {
    async onInput() {
      const { data, meta } = await requestSearch(this.search);
      if (data.Response === "True") {
        this.suggestions = data.Search.map(film => film.Title);
      }
    },
    test() {
      axios
        .get(testPath)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>