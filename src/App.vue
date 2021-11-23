<script setup lang="ts">
import { ref } from 'vue';
import ResultPassword from './components/resultPassword.vue';

const tab = ref('test')
const password = ref('')
</script>

<template>
  <q-tabs v-model="tab" class="bg-primary text-white" align="justify" narrow-indicator>
    <q-tab name="test" label="test password" />
    <q-tab name="history" label="Historique des tests" />
  </q-tabs>

  <q-separator />

  <q-tab-panels v-model="tab" animated class>
    <q-tab-panel name="test" class="flex justify-center items-center">
      <q-card class="my-card" style="max-width: 800px">
        <q-card-section class="column">
          <h1 class="text-h5">Tester la robustesse de votre mot de passe</h1>
          <div class="row justify-between items-center">
            <q-input outlined v-model="password" label="Your password" />
            <q-btn size="md" class="q-ml-md" color="primary" label="Tester" />
          </div>
          <div class="q-mt-md">
            <ResultPassword :items="[]" />
          </div>
        </q-card-section>
      </q-card>
    </q-tab-panel>

    <q-tab-panel name="history" class>
      <div class="text-h5">Historique des TESTS</div>
    </q-tab-panel>
  </q-tab-panels>
</template>


<style>
</style>
