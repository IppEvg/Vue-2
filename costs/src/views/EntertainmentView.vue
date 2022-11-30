<template>
    <div class="window">
        <div class="box-cost">
            <input placeholder="date" v-model="data" />
            <input type="text" placeholder="category" v-model="title" />
            <input type="number" placeholder="$" v-model="cost" />
        </div>
        <button class="button" @click="addCost">Add +</button>
    </div>
</template>
  
<script>
export default {
    name: 'FoodView',
    data() {
        return {
            data: `${new Date().toLocaleDateString()}`,
            title: "entertainment",
            cost: this.$route.params.cost
        }
    },
    methods: {
        addCost() {
            let newObj = { id: this.idComp, data: this.dataComp, title: this.title, prise: this.cost, redact: false };
            this.$store.commit('addCost', newObj);
            this.$router.replace('/');
        },
    },
    computed: {
        idComp() {
            for (let i = 1; i <= this.$store.getters.getList.length; i++) {
                if (!this.$store.getters.getList.find(item => item.id == i)) {
                    return i;
                }
            }
            return this.$store.getters.getList.length + 1;
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

<style lang="scss" scoped>
.window {
    background-color: rgba(27, 22, 9, 0.9098039216);
    width: 25%;
    height: 115px;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: -25vh;
    right: 0;
    bottom: 0;
    margin: auto;

    input {
        width: 80%;
        margin: 1px 0;
        border-radius: 7px;
    }

    button {
        width: 60%;
        margin-top: 5px;
    }
}
</style>