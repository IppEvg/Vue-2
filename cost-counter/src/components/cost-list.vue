<template>
    <div class="box_left_col">
        <div class="box-grower">
            <div class="items">
                <div class="item" v-for="item, index of showPeriod" v-bind:key="index">
                    <div class="item_col">{{ item.id }}</div>
                    <div class="item_col">{{ item.data }}</div>
                    <div class="item_col"> {{ item.title }}</div>
                    <div class="item_col">{{ item.prise }}</div>
                    <div class="item_col menu"> &#9776;</div>
                </div>
            </div>
            <div class="pagination">
                <paginationList :numbs="costs" @pre="changeStr" @give="showPeriodOfList"></paginationList>
            </div>
        </div>

    </div>
</template>
  
<script>
import paginationList from './pagination-list.vue';
export default {
    name: 'costList',
    components: {
        paginationList
    },
    data() {
        return {
            period: [],
            str: "1"
        }
    },
    props: {
        costs: Array
    },
    methods: {
        showPeriodOfList(active) {
            console.log(active);
            console.log(active.textContent);
            this.str = active.textContent;
        },
        changeStr(change) {
            console.log(change);
            if (this.str > 1 && change == -1) {
                this.str = +this.str - 1;
            } else if (change == 1 && this.str < this.costs.length / 10) {
                this.str = +this.str + 1;
            }
        }
    },
    computed: {
        showPeriod() {
            return this.costs.slice(10 * (+this.str) - 10, 10 * (+this.str));
        }
    }

}
</script>
  
<style lang="scss" >
.box_left_col {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: start;
}

.box-grower {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
}

.items {
    margin-top: 20px;
    flex-grow: 1;
}

.item {
    margin: 1px 0px;
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

.pagination {
    height: 40px;
}

.menu {
    cursor: pointer;
}
</style>