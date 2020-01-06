<template>
  <div class="wrapper-content">
    <section>
      <div class="container">
        <FilmCard :film="filmFull" />
      </div>
    </section>
  </div>
</template>

<script>
import { requestSearch, toCamelCase, dropNA } from "@/assets/js/api";
import FilmCard from "@/components/FilmCard"

export default {
  components: {
    FilmCard
  },
  data() {
    return {
      imbdId: null,
      filmFull:  { "title": "Star Wars: Episode IV - A New Hope", "year": "1977", "rated": "PG", "released": "25 May 1977", "runtime": "121 min", "genre": "Action, Adventure, Fantasy, Sci-Fi", "director": "George Lucas", "writer": "George Lucas", "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing", "plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.", "language": "English", "country": "USA", "awards": "Won 6 Oscars. Another 50 wins & 28 nominations.", "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "ratings": [ { "source": "Internet Movie Database", "value": "8.6/10" }, { "source": "Rotten Tomatoes", "value": "93%" }, { "source": "Metacritic", "value": "90/100" } ], "metascore": "90", "imdbRating": "8.6", "imdbVotes": "1,150,440", "imdbID": "tt0076759", "type": "movie", "dVD": "21 Sep 2004", "boxOffice": "", "production": "20th Century Fox", "website": "", "response": "True" } 

      };
  },
  created() {
    this.imbdId = this.$route.params.id;
    // this.getFilm(this.imbdId);
  },
  methods: {
    async getFilm(imbdId) {
      const { data, meta } = await requestSearch(imbdId, "i");
      if (data.Response === "True") {
        this.filmFull = toCamelCase(data);
        this.filmFull.ratings = this.filmFull.ratings.map(rating =>
          toCamelCase(rating)
        );
        this.filmFull = dropNA(this.filmFull)

      }
    }
  }
};
</script>