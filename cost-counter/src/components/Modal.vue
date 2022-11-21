<template>
    <div class="modal">
        <transition name="modalTransition">
            <div class="wrap" v-if="isShow">
                <div calss="buttons">
                    <div class="square"></div>
                    <router-link tag="button" to="/redact" class="buttons_button" :item="item" :idx="idx">
                        &#9998; &emsp;
                        Redact </router-link>
                    <button class="buttons_button" @click="onDelete"> &#10008; &emsp; Delete </button>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script>
export default {
    name: 'ModalWindow',
    data() {
        return {
            isShow: false
        }
    },
    props: {
        item: Object,
        idx: Number
    },
    methods: {
        show(item) {
            if (this.item == item) {
                this.isShow = !this.isShow;
            }
        },
        onDelete() {
            this.$store.commit('delStr', this.idx);
            this.$store.getters.getPaymentsList;
        },
    },
    mounted() {
        this.$modal.EventBus.$on('show', this.show);
        console.log(this.item);
    }
}
</script>

<style lang="scss" scoped>
button {
    font-size: 10px;
    width: 90px;
    color: #24476B;
}

.wrap {
    position: relative;
    padding: 2px;
    border-radius: 3px;
    background-color: #24476B
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

.buttons {
    display: flex;
    flex-direction: column;
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