<template>
  <ion-list>
    <ion-item v-for="item in items" :key="item.title">
      <ion-card>
        <img :src="item.picture" :alt="item.title" style="width:100%"/>
        <ion-card-header>
          <ion-card-title>{{ item.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ lorem }}
        </ion-card-content>
      </ion-card>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonList} from '@ionic/vue'

export default defineComponent({
  name: 'GamesList',
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n',
      items: [{
        picture: 'assets/pictures/cyberpunk.jpg',
        title: 'Cyberpunk 2077'
      }, {
        picture: 'assets/pictures/doom.jpg',
        title: 'Doom Eternal'
      }]
    }
  },
  components: {
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem
  }
})
</script>

<style scoped>

</style>