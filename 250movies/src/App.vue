<template>
  <div id="app">
    <Loader />
    <Notification />
    <PosterBg :poster="posterBg"/>
    <Header></Header>
    <MoviesList :list="moviesList" @changePoster="OnChangePoster"/>
    <MoviesPagination
        :current-page="currentPage"
        :per-page="moviesPerPage"
        :total="moviesLength"
        @pageChanged="onPageChanged" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import MoviesList from "@/components/MoviesList"
import PosterBg from "@/components/PosterBg"
import MoviesPagination from "@/components/MoviesPagination";
import Loader from '@/components/Loader'
import Header from "@/components/Header"
import Notification from "@/components/Notification"

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    Loader,
    Header,
    Notification
  },
  data() {
    return {
      posterBg: ''
    }
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true
    }
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    OnChangePoster(poster) {
      this.posterBg = poster
    },
    onPageQueryChange({page = 1}) {
      this.changeCurrentPage(Number(page))
    },
    onPageChanged(page) {
      this.$router.push({ query: { page }})
    },
  },
  computed: {
    ...mapGetters('movies', ["moviesList", "currentPage", "moviesPerPage", "moviesLength"])
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
}
</style>
