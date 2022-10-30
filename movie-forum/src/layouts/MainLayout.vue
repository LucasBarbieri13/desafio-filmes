<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          {{$route.name}}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer 
    show-if-above 
    v-model="leftDrawerOpen" 
    side="left"
    :width="283" 
    bordered>
      <q-icon
      class="q-pa-md lt-md"
       name="movie" 
       size="lg"
       color="primary"
       />

      <q-list >
        <q-item 
        to="/"
        clickable 
        v-ripple
        exact
        >
          <q-item-section avatar>
            <q-icon name="home" size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        
        <q-item 
        to="/PageSuggestions"
        clickable 
        v-ripple
        exact
        >
          <q-item-section avatar>
            <q-icon name="thumbs_up_down" size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Minhas Sugestões</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>