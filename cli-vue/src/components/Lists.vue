<template>
	<div id="app">
		<ul class="list-group">
			<li v-for="(ide,index) of ordena" :key="ide.id" @click="suma(index)"
			class="list-group-item d-flex justify-content-between align-items-center">
				{{index}}---{{ide.name}} 
				<span class="badge badge-primary badge-pill">{{ide.voto}}</span>
			</li>
			
		</ul>
		<button type="button" @click="cero" class="btn btn-danger">Reset</button>
	</div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
	name: 'Lists',
	computed:{
		...mapState(["ides"]),
		ordena(){
			return this.ides.slice().sort( (a,b) => b.voto - a.voto )
		}
	},
	methods:{
		...mapMutations(["suma","cero"])
	}
}
</script>

<style>
</style>
