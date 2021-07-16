<template>
  <div class="item-container">
    <div class="image">
      <img :src="characterData.image" :alt="characterData.name" />
    </div>
    <!-- <div class="details">{{ characterData.name }}</div> -->
  </div>
</template>

<script>
export default {
  name: "Character",
  props: {
    characterData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
.image {
  flex: 0 0 35%;
}
img {
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}
.details {
  flex: 1;
  padding: 0.75rem;
  color: white;
  text-align: left;
}
.item-container {
  display: flex;
  flex-direction: row;
}
</style>