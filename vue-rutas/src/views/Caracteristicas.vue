<template>
  <div class="caracteristicas">
    <h1>Paginas de Caracteristicas Sin Boosptrap-Vue</h1>
    <router-link v-for="lista of listas" :to="{name:'Caracteristicas',params:{id:lista}}" v-bind:key="lista" class="btn btn-success m-1"> {{lista}} </router-link> 
    <ConCaracteristicas/>    
    <button type="" @click="home" class="btn btn-primary m-1">Home</button>
    <button type="" @click="atras" class="btn btn-danger m-1"> <span class="arrow90deg-left"></span>Atras</button>
    <button type="" @click="adelante" class="btn btn bg-success m-1">Adelante</button>
  </div>
</template>
<script>
	import ConCaracteristicas from "../components/ConCaracteristicas.vue"
	export default{
		components:{//COMPONENTES  QUE UTILIZAN
			ConCaracteristicas
		},
		data(){//DATOS A UTILIZAR
			return{
				listas:[1,2,3]
			}
		},
		methods:{//METODOS Q SE UTILIZAN
			home(){
				this.$router.push("/")//VA A LA RUTA Q LE ESPECIFIQUE
			},
			atras(){
				this.$router.go(-1)//RETROCEDE A LA RUTA ANTERIOR
			},
			adelante(){
				this.$router.go(1)//VA A LA RUTA DE ADELANTE
			}
		}
	}
</script>	