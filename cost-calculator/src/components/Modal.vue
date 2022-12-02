<template>
    <div class="modal">
        <transition name="modalTransition">
            <div class="wrap" v-show="isShow">
                <div calss="buttons" style="display: flex;
    flex-direction: column;
    align-items: end;">
                    <button @click="$modal.hide(item)" class="closer">&#10006</button>
                    <div class="square"></div>
                    <button @click="changeRedact" class="buttons_button">
                        &#9998; &emsp;
                        Redact </button>
                    <Redactvue v-show="this.$store.getters.getRedact" :idx="idx" />
                    <button class="buttons_button" @click="onDelete"> &#10008; &emsp; Delete </button>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script>
import Redactvue from "./Redact-vue.vue";
export default {
    name: 'ModalWindow',
    data() {
        return {
            isShow: false,
        }
    },
    components: {
        Redactvue
    },
    props: {
        item: Object,
        idx: Number
    },
    methods: {
        show(item) {
            if (this.item === item) {
                this.isShow = true;
                this.item = this.$store.getters.getList[this.idx];
            }
        },
        hide(item) {
            if (this.item == item) {
                this.isShow = false;
            }
        },
        onDelete() {
            this.$store.commit('delStr', this.idx);
            this.$store.getters.getList;
        },
        changeRedact() {
            this.$store.commit('redact', this.idx);
        }

    },
    computed: {

    },
    mounted() {
        this.$modal.EventBus.$on('show', this.show);
        this.$modal.EventBus.$on('hide', this.hide);
    }
}
</script>

<style lang="scss" scoped>
button {
    font-size: 10px;
    width: 90px;
    color: #24476B;
    font-size: 12px;
    background-color: rgb(248, 248, 248);
    border-radius: 4px;
    margin: 1px;
}

.wrap {
    position: relative;
    padding: 2px;
    border-radius: 3px;
    background-color: #24476B;

    .buttons {
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 60%;

    }
}

.square {
    width: 10px;
    height: 10px;
    position: absolute;
    top: -5px;
    right: 5px;
    rotate: 45deg;
    z-index: -1;
    background-color: #24476B;
}



.closer {
    width: 15px;
    height: 10px;
    padding: 1px;
    font-size: 5px;
    background-color: #ccc;
    border: 1px solid rgb(163, 157, 157);
    margin-bottom: 2px;
}

.modalTransition-enter-active {
    transition: all 0.2s ease-out;
    opacity: 0;
}

.modalTransition-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.modalTransition-enter-from,
.modalTransition-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>