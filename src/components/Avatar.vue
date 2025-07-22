<script setup lang="ts">
const index = ref(0)
const nameRef = ref<HTMLElement>()
const avatarRef = ref<HTMLElement>()

const words = ['Liang Shaojun', 'Shabix']
const images = ['/avatar.jpg', '/avatar2.jpg']

let timeoutId: NodeJS.Timeout

function startAnimation() {
  timeoutId = setTimeout(() => {
    if (nameRef.value) {
      nameRef.value.classList.add('out')
    }
    if (avatarRef.value) {
      avatarRef.value.classList.add('out')
    }
  }, 2900)
}

function handleTransitionEnd() {
  if (nameRef.value) {
    nameRef.value.classList.remove('out')
  }
  if (avatarRef.value) {
    avatarRef.value.classList.remove('out')
  }
  index.value = (index.value + 1) % words.length
  startAnimation()
}

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<template>
  <div class="avatar-container">
    <div ref="avatarRef" class="avatar-wrapper">
      <img
        :src="images[index]"
        :alt="words[index]"
        class="avatar-image"
        @transitionend="handleTransitionEnd"
      >
    </div>
    <div class="description">
      <h1
        ref="nameRef"
        class="name"
        @transitionend="handleTransitionEnd"
      >
        {{ words[index] }}
      </h1>
      <p class="tag">
        Front-End Intern & Developer / Qingyou / Kuaishou / Tencent
      </p>
    </div>
  </div>
</template>

<style scoped>
.avatar-wrapper {
  border-radius: 999px;
  transition: opacity 3s;
  flex-shrink: 0;
}

.avatar-image {
  border-radius: 999px;
  transition: opacity 3s;
  width: 85px;
  height: 85px;
  object-fit: cover;
  flex-shrink: 0;
}

.avatar-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  font-size: 38px;
  font-weight: 600;
  color: var(--element3);
  margin-bottom: 0;
  transition: opacity 3s;
}

.tag {
  color: var(--element1);
  font-size: 16px;
  margin-top: 6px;
  margin-left: 1px;
  margin-bottom: 0;
}

.out {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .name {
    font-size: 31px;
  }

  .tag {
    font-size: 13px;
    margin-top: 5px;
  }

  .avatar-container {
    gap: 10px;
    margin-left: 5px;
  }

  .avatar-image {
    width: 70px;
    height: 70px;
    min-width: 70px;
    min-height: 70px;
  }

  .avatar-wrapper {
    min-width: 70px;
    min-height: 70px;
  }
}
</style>
