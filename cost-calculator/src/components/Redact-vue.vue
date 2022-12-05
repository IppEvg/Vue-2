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
    name: 'Redactvue',
    data() {
        return {
            id: this.$store.getters.getList[this.idx].id,
            data: this.$store.getters.getList[this.idx].data,
            title: this.$store.getters.getList[this.idx].title,
            prise: this.$store.getters.getList[this.idx].prise,
            redact: this.$store.getters.getList[this.idx].redact
        }
    },
    props: {
        idx: Number
    },
    methods: {
        onButton() {
            let idx = this.idx;
            console.log(this.$store.getters.getList[this.idx]);
            let newObj = { id: this.id, data: this.data, title: this.title, prise: this.prise, redact: true };
            this.$store.commit('redactStr', { newObj, idx });
            console.log(idx);
        }
    },
}
</script>
<style lang="scss" scoped>
.window {
    background-color: rgba(27, 22, 9, 0.9098039216);
    width: 130%;
    height: 125px;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    left: -260%;
    top: -25vh;
    right: 0;
    bottom: 0;
    margin: auto;

    input {
        width: 80%;
        margin: 1px 0;
        border-radius: 7px;
    }


}
</style>