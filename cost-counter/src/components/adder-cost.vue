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
    props: {
        items: Array
    },
    data() {
        return {
            id: "",
            data: `${new Date().toLocaleDateString()}`,
            title: "",
            cost: ""
        }
    },

    methods: {
        addCost() {
            let newObj = { id: this.idComp, data: this.dataComp, title: this.title, prise: this.cost }
            this.$emit('addItem', newObj);
        }
    },
    computed: {
        idComp() {
            return this.items.length + 1;
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
.window {
    width: 300px;
    height: 300px;
}
</style>