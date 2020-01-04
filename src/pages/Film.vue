<template>
  <div class="wrapper-content">
    <section>
      <div class="container">
        <h1> {{ filmFull }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
import { requestSearch, toCamelCase } from "@/assets/js/api";

export default {
  data() {
    return {
      imbdId: null,
      filmFull: {}
    };
  },
  created() {
    this.imbdId = this.$route.params.id;
    this.getFilm(this.imbdId);
  },
  methods: {
    async getFilm(imbdId) {
      const { data, meta } = await requestSearch(imbdId, "i");
      if (data.Response === "True") {
        this.filmFull = toCamelCase(data);
        this.filmFull.ratings = this.filmFull.ratings.map(rating =>
          toCamelCase(rating)
        );
      }
    }
  }
};
</script>