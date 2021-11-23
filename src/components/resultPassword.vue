<script setup lang="ts">
import { ref } from 'vue';

withDefaults(defineProps<{
    items: Array<{
        id: string,
        time: {
            quantum: number,
            computer: number
        },
        advices: Array<{
            id: string,
            title: string,
            description: string
        }>
    }>
    expanded?: boolean,
}>(), {
    expanded: true
})

</script>

<template>
    <q-expansion-item v-model="expanded" :expand-icon-toggle="false">
        <template v-slot:header>
            <q-item-section class="text-bold">*******</q-item-section>

            <q-item-section side>
                <div class="row items-center">Il y a 10 min</div>
            </q-item-section>
        </template>
        <q-card>
            <q-card-section>
                <div
                    class="justify-end row text-weight-thin text-italic"
                >quantum: 10 jours computer: 100 jours</div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
            </q-card-section>
        </q-card>
    </q-expansion-item>
</template>


<style>
</style>
