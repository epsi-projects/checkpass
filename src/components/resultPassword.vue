<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(duration)

const props = withDefaults(defineProps<{
    items: Array<{
        quantum: number,
        computer: number
        advices: Array<string>
    }>
    expanded?: boolean,
}>(), {
    expanded: true
})

</script>

<template>
    <q-expansion-item v-for="item in items" v-model="expanded" :expand-icon-toggle="false">
        <template v-slot:header>
            <q-item-section class="text-bold">*******</q-item-section>

            <q-item-section side>
                <div class="row items-center">Il y a 10 min</div>
            </q-item-section>
        </template>
        <q-card>
            <q-card-section>
                <div class="justify-end row text-weight-thin text-italic">
                    <div style="margin-right:10px">
                        <strong>quantum</strong>
                        : {{ dayjs.duration({ minutes: item.quantum }).locale("fr").humanize() }}
                        <q-tooltip>{{ item.quantum }} Minutes</q-tooltip>
                    </div>
                    <div>
                        <strong>computer</strong>
                        : {{ dayjs.duration({ minutes: item.computer }).locale("fr").humanize() }}
                        <q-tooltip>{{ item.computer }} Minutes</q-tooltip>
                    </div>
                </div>
                <ul>
                    <li v-for="advice in item.advices">{{ advice }}</li>
                </ul>
            </q-card-section>
        </q-card>
    </q-expansion-item>
</template>
