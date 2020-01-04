<template>

  <div
    class="suggestion"
    @click="toFilm(film.imdbID)"
  >
    <div class="suggestion__img img-wrapper">
      <img
        :src="film.poster"
        alt="poster"
        class="img-r rounded"
      >
    </div>
    <div class="suggestion__name-block">
      <div class="suggestion__name">
        {{ film.title }}
      </div>
      <div class="suggestion__type">
        {{ film.type }}
      </div>
    </div>
    <div class="suggestion__year">
      {{ film.year }}
    </div>
  </div>
</template>

<script>
import router from "@/routes";

export default {
  props: {
    film: {
      type: Object,
      value: ""
    }
  },
  methods: {
    toFilm(imdbID) {
      router.push(`/film/${imdbID}`);
    }
  }
};
</script>