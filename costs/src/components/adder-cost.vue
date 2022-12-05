<template>
    <div class="window">
        <div class="box-cost">
            <input placeholder="date" v-model="data" />
            <input type="text" placeholder="category" v-model="title" />
            <input type="number" placeholder="$" v-model.number="cost" />
        </div>
        <button class="button" @click="addCost">Add +</button>
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
            reduct: false
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

</style>