<script setup lang="ts">
import { ref } from 'vue';
import ResultPassword from './components/resultPassword.vue';
import { useFetch, useStorage } from '@vueuse/core'

const tab = useStorage('tab', 'test')
const password = ref('')
const passwordTest = ref()
const passwordList = useStorage('password-list', [])
const currentRequest = ref()

const testPassword = () => {
  return useFetch(`${import.meta.env.VITE_API_URL}/password`).post({ password: password.value }).json()
}
const tryTestPassword = () => {
  if (password.value.length < 1) return;
  currentRequest.value = testPassword()
  currentRequest.value.onFetchResponse(response => {
    passwordTest.value = { ...currentRequest.value.data, isExpended: true, date: new Date() }
    passwordList.value.push({ ...currentRequest.value.data, isExpended: false, date: new Date() })
  })
}
const isExpended = ref(true)
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
            <q-input outlined v-model="password" label="Mot de passe" />
            <q-btn
              size="md"
              class="q-ml-md"
              color="primary"
              label="Tester"
              :disable="password.length < 1"
              @click="tryTestPassword"
            />
          </div>
          <div class="q-mt-md">
            <ResultPassword
              v-if="passwordTest && !currentRequest?.isFetching"
              :items="[passwordTest]"
            />
            <q-circular-progress
              v-if="currentRequest?.isFetching"
              indeterminate
              size="50px"
              class="q-ma-md"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-tab-panel>

    <q-tab-panel name="history" class="flex justify-center items-center">
      <q-card class="my-card" style="max-width: 800px">
        <q-card-section class="column">
          <div class="text-h5">Historique des TESTS</div>
          <div class="q-mt-md">
            <ResultPassword :items="passwordList" />
          </div>
        </q-card-section>
      </q-card>
    </q-tab-panel>
  </q-tab-panels>
</template>


<style>
</style>
