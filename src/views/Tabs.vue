<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="store" href="/tabs/store">
          <ion-icon :icon="storefront"/>
          <ion-label>Store</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="games" href="/tabs/games">
          <ion-icon :icon="gameController"/>
          <ion-label>Games</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="news" href="/tabs/news">
          <ion-icon :icon="newspaper"/>
          <ion-label>News</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs} from '@ionic/vue';
import {gameController, newspaper, storefront} from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage},
  setup() {
    return {
      storefront,
      gameController,
      newspaper
    }
  }
}
</script>