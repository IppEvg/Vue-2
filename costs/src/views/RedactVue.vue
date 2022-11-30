<template>
    <div class="window">
        <div class="box-cost">
            <input placeholder="id" v-model="id" />
            <input placeholder="date" v-model="data" />
            <input type="text" placeholder="category" v-model="title" />
            <input type="number" placeholder="$" v-model="prise" />
        </div>
        <button class="button" @click="onButton">Save</button>
    </div>
</template>
  
<script>
export default {
    name: 'RedactView',
    data() {
        return {
            id: undefined,
            data: '',
            title: '',
            prise: undefined,
        }
    },
    props: {
        idx: Number,
    },
    methods: {
        onButton(idx) {
            let newObj = { id: this.id, data: this.data, title: this.title, prise: this.prise };
            this.$store.commit('redactStr', idx, newObj);
            this.$store.getters.getList;
            this.$router.push({ name: 'Home' })
        },
    },
    computed: {

    }
}
</script>
<style lang="scss">
.window {
    background-color: rgba(27, 22, 9, 0.9098039216);
    width: 30%;
    height: 105px;
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