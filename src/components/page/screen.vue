<template>
  <div>
    <div v-for="(item, index) in characters" :key="item.id" class="">
      <div v-if="index == 0 || index % 5 == 0" class="container">
        <div class="col"><Character :characterData="characters[index]" /></div>

        <div class="col">
          <Character :characterData="characters[index + 1]" />
        </div>

        <div class="col">
          <Character :characterData="characters[index + 2]" />
        </div>

        <div class="col">
          <Character :characterData="characters[index + 3]" />
        </div>

        <div class="col">
          <Character :characterData="characters[index + 4]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import Character from "./../organism/character.vue";
export default {
  name: "Screen",
  components: {
    Character,
  },
  computed: {
    ...mapState({
      characters: (state) => state.character.results,
    }),
  },
  methods: {
    ...mapActions("character", ["getCharacters"]),
    ...mapGetters("character", ["getInfo", "getResults"]),
  },
  async mounted() {
    // dispatch to get first 20 characters
    await this.getCharacters();
  },
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
};
</script>
<style>
.container {
  display: flex;
  position: relative;
}
.col {
  width: auto;
  height: auto;
  display: flex;
  overflow: hidden;
  background: #535455;
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1p;
  flex-grow: 1;
  flex-direction: column;
}
</style>