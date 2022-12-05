<template>
    <div class="window">
        <div class="box-cost">
            <v-text-field v-model="data" class="m-0" placeholder="date" label="Date"></v-text-field>
            <!-- <input placeholder="date" v-model="data" /> -->
            <v-select class="select m-0" v-model="title" label="Category" :items="cats"
                background-color="white"></v-select>
            <!-- <input type="text" placeholder="category" v-model="title" /> -->
            <v-text-field v-model.number="cost" placeholder="$" label="cost"></v-text-field>
            <!-- <input type="number" placeholder="$" v-model.number="cost" /> -->
        </div>
        <button class="button mt-4" @click="addCost">Add +</button>
    </div>
</template>
  
<script>
export default {
    name: 'adderCost',
    data() {
        return {
            id: "",
            data: `${new Date().toLocaleDateString()}`,
            title: "",
            cost: "",
            reduct: false,
            cats: ['food', 'transport', 'health', 'entertainment'],
        }
    },
    methods: {
        addCost() {
            let newObj = { id: this.idComp, data: this.dataComp, title: this.title, prise: this.cost, redact: this.redact };
            this.$store.commit('addCost', newObj);
            this.$store.commit('hideShowAdder', false);
        },
    },
    computed: {
        idComp() {

            return this.$store.getters.getList.reduce((max, item) => item.id > max ? item.id : max, 0) + 1;

        },
        dataComp() {
            if (this.data == new Date().toLocaleDateString()) {
                return new Date().toLocaleDateString();
            } else {
                return this.data;
            }

        }
    }
}
</script>

<style lang="scss">
.select {
    border-radius: 6px;
}

.v-input__control {
    height: 30px;
}
</style>