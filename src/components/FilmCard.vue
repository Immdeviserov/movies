<template>
  <div class="film-card">
    <div class="film-card__title-block title-block">
      <div class="title-block__img img-wrapper">
        <img
          :src="film.poster"
          alt="poster"
          class="img-r rounded"
        >
      </div>
      <div class="title-block__right-column">
        <div class="title-block__rating">
          {{ film.imdbRating }}
        </div>
      </div>
    </div>
    {{ film.title }}
  </div>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      default: {}
    }
  }
}
</script>

