<template>
    <div class="box">
        <div class="pagination_section">
            <a href="#" tupe='link'>&laquo;</a>
            <a href="#" v-for="page, index of addPages" v-bind:key="index" class="page" @click="changeStyle">{{ page
            }}</a>
            <a href="#">&raquo;</a>
        </div>
    </div>

</template>
  
<script>
export default {
    name: 'paginationList',
    props: {
        numbs: Array
    },
    data() {
        return {
            pages: [],
        }
    },
    methods: {

        changeStyle(event) {
            let list = document.querySelectorAll('.page');
            list.forEach((item) => item.classList.remove('active'));
            event.target.classList.toggle('active');
            let active = document.getElementsByClassName('active');

            this.$emit('give', active);
        }

    },
    computed: {
        counterLength() {
            if (this.pages.length <= 1) {
                document.querySelector('.page').classList.add('active');
            }
            return this.pages;
        },
        addPages() {
            let pages = this.pages;
            for (let i = 0; i * 10 < this.numbs.length; i++) {
                if (!pages[i]) {
                    pages = pages.push(i + 1);
                }
            }
            return this.pages;
        },
    }

}
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    align-items: center;
    justify-content: center;
}

a {
    width: 20px;
    height: 20px;
    margin: 5px;
    color: #24476B;
    text-decoration: none;
}

.active {
    color: #1B1609;
}
</style>
  


































































































































































































































































































































































































































































































































































































<style lang="scss" >