<template>
  <div
    class="media-card"
    :class="'card-type-' + item.type"
    @click="item.type === 'pdf' ? openMedia() : null"
  >
    <!-- Image/Video/Audio preview area -->
    <div v-if="item.type === 'image'" class="media-preview">
      <img :src="item.src" :alt="item.title" class="preview-image" />
    </div>
    <div v-if="item.type === 'video'" class="media-preview">
      <video controls preload="metadata" class="preview-video">
        <source :src="item.src" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div v-if="item.type === 'audio'" class="media-preview audio-preview">
      <div class="audio-icon">&#9835;</div>
      <audio controls preload="metadata" class="audio-player">
        <source :src="item.src" :type="audioMimeType" />
        Your browser does not support the audio tag.
      </audio>
    </div>

    <!-- Card content -->
    <div class="card-body">
      <div class="card-header">
        <span class="type-badge" :class="'badge-' + item.type">
          {{ typeLabel }}
        </span>
        <h3 class="card-title">{{ item.title }}</h3>
      </div>
      <p class="card-description">{{ item.description }}</p>
      <div class="card-actions">
        <button class="card-btn" @click.stop="openMedia">
          {{ item.type === "pdf" ? "View or Download" : "Download" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MediaItem } from "@/shared/media";
import { computed, defineProps } from "vue";

const props = defineProps<{
  item: MediaItem;
}>();

const typeLabel = computed(() => {
  const labels: Record<string, string> = {
    pdf: "PDF",
    video: "Video",
    audio: "Audio",
    image: "Image",
  };
  return labels[props.item.type] || props.item.type;
});

const audioMimeType = computed(() => {
  if (props.item.src.endsWith(".ogg")) return "audio/ogg";
  if (props.item.src.endsWith(".m4a")) return "audio/mp4";
  if (props.item.src.endsWith(".mp3")) return "audio/mpeg";
  return "audio/mpeg";
});

const openMedia = () => {
  window.open(props.item.src, "_blank")?.focus();
};
</script>

<style scoped>
/* Base card */
.media-card {
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #006837, #3ab54a, #006837);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* Sizing per type */
.card-type-pdf,
.card-type-image,
.card-type-video {
  width: calc(33.333% - 0.85rem);
}

.card-type-audio {
  width: 100%;
}

.media-card:hover {
  box-shadow: 0 6px 20px rgba(0, 104, 55, 0.15);
  transform: translateY(-2px);
}

/* Preview areas */
.media-preview {
  width: 100%;
  overflow: hidden;
  background: #f5f5f5;
}

.preview-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.preview-video {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.audio-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  background: linear-gradient(135deg, #006837 0%, #00a551 100%);
}

.audio-icon {
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.75rem;
}

.audio-player {
  width: 100%;
  max-width: 500px;
}

/* Card body */
.card-body {
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.type-badge {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  flex-shrink: 0;
}

.badge-pdf {
  background: rgba(0, 104, 55, 0.1);
  color: #006837;
}

.badge-video {
  background: rgba(58, 181, 74, 0.15);
  color: #2a8a3a;
}

.badge-audio {
  background: rgba(0, 165, 81, 0.12);
  color: #00854a;
}

.badge-image {
  background: rgba(86, 116, 102, 0.12);
  color: #567466;
}

.card-title {
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.card-description {
  font-size: 0.8rem;
  color: #555;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
}

.card-btn {
  background: #006837;
  color: #ffffff;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: "Roboto", sans-serif;
}

.card-btn:hover {
  background: #3ab54a;
}

@media (max-width: 960px) {
  .card-type-pdf,
  .card-type-image,
  .card-type-video {
    width: calc(50% - 0.625rem);
  }
}

@media (max-width: 550px) {
  .card-type-pdf,
  .card-type-image,
  .card-type-video {
    width: 100%;
  }

  .card-body {
    padding: 0.75rem;
  }

  .card-title {
    font-size: 0.85rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }
}
</style>
