<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Store</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col>
            <section>
              <header>Small Size</header>
              <ion-button size="small">Default</ion-button>
              <ion-button size="small" color="secondary">Secondary</ion-button>
              <ion-button size="small" color="tertiary">Tertiary</ion-button>
            </section>
          </ion-col>
          <ion-col>
            <section>
              <header>Default Size</header>
              <ion-button color="success">Success</ion-button>
              <ion-button color="warning">Warning</ion-button>
              <ion-button color="danger">Danger</ion-button>
            </section>
          </ion-col>
          <ion-col>
            <section>
              <header>Large Size</header>
              <ion-button size="large" color="light">Light</ion-button>
              <ion-button size="large" color="medium">Medium</ion-button>
              <ion-button size="large" color="dark">Dark</ion-button>
            </section>
          </ion-col>
          <ion-col size="12">
            <section>
              <header>Block Width</header>
              <ion-button expand="block">A block button</ion-button>
            </section>
          </ion-col>
          <ion-col size="12">
            <section class="full-width">
              <header>Full Width</header>
              <ion-button expand="full" color="secondary">A full-width button</ion-button>
            </section>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar} from '@ionic/vue';

export default {
  name: 'StoreTab',
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol
  }
}
</script>