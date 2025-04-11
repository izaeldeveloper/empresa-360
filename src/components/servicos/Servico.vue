<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="card">
        <div class="card-header text-white bg-primary">
            {{ dados.servico }}
        </div>
        <div class="card-body">
            <p class="card-text">{{ dados.descricao }}</p>
        </div>
    </div>
</template>

<script>
    import ApiMixin from '@/mixins/ApiMixin';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Servico',
        mixins: [
            ApiMixin
        ],
        created() {
            this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`);
        },
        beforeRouteUpdate(to, from, next){
            if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
            next();
        },
        /*
        watch: {
            $route(to) {
                if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/${to.params.id}`);
            }
        }
        */
    }
</script>