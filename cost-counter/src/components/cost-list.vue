<template>
    <div class="items">
        <div class="item" v-for="item, index of costs" v-bind:key="index">
            <div class="item_col">{{ item.id }}</div>
            <div class="item_col">{{ item.data }}</div>
            <div class="item_col"> {{ item.title }}</div>
            <div class="item_col">{{ item.prise }}</div>
            <div class="item_col"> &#9776;</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'costList',
    props: {
        costs: Array
    }

}
</script>
  
<style lang="scss" >
.items {
    display: grid;
    grid-gap: 1px;
    margin-top: 20px;

}

.item {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 0.7fr 20px;
    grid-template-rows: 20px;

}

.item_col {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>