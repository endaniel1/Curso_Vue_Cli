import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ides:[
			{name:"Sublime Text",voto:0},
			{name:"Netbeanst",voto:0},
			{name:"VSC",voto:0},
		]
	},
	mutations:{
		suma(state,index){
			state.ides[index].voto++;
		},
		cero(state){
			state.ides.forEach(elemento=>{
				elemento.voto=0
			})
		}
	},
	actions: {

	},

})