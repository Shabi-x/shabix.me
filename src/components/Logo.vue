<template>
  <div class="logo-text">
    shabix
  </div>
</template>

<style scoped>
.logo-text {
  font-size: 25px;
  font-family: 'Cedarville Cursive', sans-serif;
  color: #303030;
  text-decoration: none;
  transition: opacity 0.3s ease;
  cursor: pointer;
  user-select: none;
  line-height: 1;
}

.logo-text:hover {
  opacity: 0.8;
}

.dark .logo-text {
  color: #fdfdfd;
}

@media (max-width: 768px) {
  .logo-text {
    font-size: 20px;
  }
}
</style>
