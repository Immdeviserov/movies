<template>
  <div class="search">
    <div class="input-wrapper">
      <input
        v-model="search"
        placeholder="Search some movies..."
        class="input"
        @input="onInput"
      />
    </div>
    <div class="search__suggestion">
      <Suggestion
        v-for="(suggestion, index) in suggestions"
        :key="index"
        :film="suggestion"
      />
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
import Suggestion from "./Suggestion";
import { toCamelCase, requestSearch } from "../assets/js/api";

export default {
  components: {
    Suggestion
  },
  data() {
    return {
      search: "",
      suggestions: [
        {
          title: "The Guard",
          year: "2011",
          imdbID: "tt4938602",
          type: "movie",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTY2ODkzMDgwM15BMl5BanBnXkFtZTcwMDA1Mjg1OA@@._V1_SX300.jpg"
        },
        {
          title: "The Lion Guard",
          year: "2016–",
          imdbID: "tt3793630",
          type: "series",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMDNkZWIyN2EtOTIxMi00NTYzLTg2MGUtOTRhNDMwMzM3M2VmXkEyXkFqcGdeQXVyMDM0MzU2NA@@._V1_SX300.jpg"
        },
        {
          title: "Guard Dog",
          year: "2004",
          imdbID: "tt0430159",
          type: "movie",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMGUyNDNiMjEtYjc5Mi00MjYzLWEzZWYtYzM0NTVjYzI5Mzk0XkEyXkFqcGdeQXVyMTg2NzgzMDE@._V1_SX300.jpg"
        },
        {
          title: "Eklavya: The Royal Guard",
          year: "2007",
          imdbID: "tt0459605",
          type: "movie",
          poster:
            "https://m.media-amazon.com/images/M/MV5BM2FiM2YzMGMtNzhhZS00N2E3LWI3MDEtNzAxODIxNWY5ZTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        }
      ]
    };
  },
  methods: {
    setLowerKeys(obj) {
      let obj2 = {};
      for (let index in obj) {
        obj2[index.toLowerCase()] = obj[index];
      }
      return obj2;
    },
    async onInput() {
      const { data, meta } = await requestSearch(this.search);
      if (data.Response === "True") {
        this.suggestions = data.Search.map(film => toCamelCase(film));
      } else {
        this.suggestions = "";
      }
    },
    test() {
      console.log("test");
    }
  }
};
</script>