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
          <p class="small">
            {{ film.imdbVotes }}
          </p>
        </div>
        <div class="title-block__director">
          Director: {{ film.director }}
        </div>
        <div class="title-block__genres">
          <span
            class="title-block__genre"
            v-for="(genre, index) in genres"
            :key="index"
          >
            {{ genre }}
          </span>
        </div>
        <div class="title-block__year">
          {{ film.released }}
        </div>

      </div>
    </div>
    <div class="film-card__main-block main-block">
      <div class="main-block__name">
        {{ film.title }}
      </div>
      <div class="main-block__plot">
        {{ film.plot }}
      </div>
      <div class="main-block__actors">
        <b>Actors:</b>
        <a
          class="main-block__actor"
          v-for="(actor, index) in actors"
          :key="index">
          {{actor}}<span v-if="index !== actors.length - 1" >,</span>
        </a>
      </div>
      <div class="main-block__awards">
        <b>Awards:</b>
        {{ film.awards }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      default: {}
    }
  },
  computed: {
    genres () {
      return this.film.genre.split(', ')
    },
    actors () {
      return this.film.actors.split(', ')
    }
  }
}
</script>

