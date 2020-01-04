<template>
  <div class="wrapper-content">
    <section>
      <div class="container">
        <Search />
      </div>
    </section>
  </div>
</template>

<script>
import Search from "../components/Search";

export default {
  name: "app",
  components: {
    Search
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>