<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Games</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" color="primary">
        <ion-toolbar>
          <ion-title size="large">Games</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col>
            <GamesList></GamesList>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar} from '@ionic/vue';
import GamesList from "@/components/Games/GamesList.vue";

export default {
  name: 'GamesTab',
  components: {GamesList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonCol}
}
</script>