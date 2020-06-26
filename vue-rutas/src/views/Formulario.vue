<template>
  <div class="container">
    <h1>Ejemplo Formulario Con Boosptrap-Vue</h1>    
    <form>
    	<!-- 
    		b-row, "row" clase row
			b-col, "col" clase col, cols Columnas q va a tener el grid
			b-form-group clase group del los formulario y label 
			b-form-input, input a mostrar defecto text
			b-form-select, campo select
			b-form-radio-group, campo de radio
			b-form-checkbox-group, campo de checkbox
			:options las opciones q va a tener 

    	 -->
    	<b-row>
    		<b-col cols="12">
    			<b-form-group label="Escriba Un Texto">
    				<b-form-input type="text" v-model="texto" :state="validar"></b-form-input>
    				{{texto}}
    			</b-form-group>
    			
    		</b-col>
    		<b-col cols="4" class="mt-5">
    			<b-form-group label="Select">
    				<b-form-select label="Select" v-model="select" :options="arraySelect"></b-form-select>
    				{{select}}
			    </b-form-group>    			
    		</b-col>
    		<b-col cols="4" class="mt-5">
    			<b-form-group label="Radio Group">
					<b-form-radio-group v-model="selectRadio" :options="arrayRadio"></b-form-radio-group>
					{{selectRadio}}
    			</b-form-group>    			
    		</b-col>
    		<b-col cols="4" class="mt-5">
    			<b-form-group label="Radio Group">
					<b-form-checkbox-group v-model="selectCheckbox" :options="arrayCheckbox"></b-form-checkbox-group>
					{{selectCheckbox}}
    			</b-form-group>    			
    		</b-col>
    	</b-row>
    </form>
  </div>
</template>
<script>
	export default{
		name:"Formulario",//NOMBRE DEL ARCHIVO TIENE Q SE EL MISMO
		data(){//datos 
			return{
				texto:"",
				select:null,//Elemento a selecionar en el select
				arraySelect:[//Array de elementos a selecionar en el Select
					{value:null,text:"Selecione Un Elemento"},
					{value:"elemento1",text:"Elemento 1"},
					{value:"elemento2",text:"Elemento 2"},
					{value:"elemento3",text:"Elemento 3"},
					{value:"elemento4",text:"Elemento 4"}
				],
				selectRadio:null,//Elemento a selecionar en el Radio
				arrayRadio:[//Array de elementos a selecionar en el Radio
					{value:null,text:"Selecione Un Elemento"},
					{value:"elemento1",text:"Elemento 1"},
					{value:"elemento2",text:"Elemento 2"},
					{value:"elemento3",text:"Elemento 3"},
					{value:"elemento4",text:"Elemento 4"}
				],
				selectCheckbox:["elemento1","elemento2"],//Elemento a selecionar en el Checkbox
				arrayCheckbox:[//Array de elementos a selecionar en el Checkbox
					{value:null,text:"Selecione Un Elemento"},
					{value:"elemento1",text:"Elemento 1"},
					{value:"elemento2",text:"Elemento 2"},
					{value:"elemento3",text:"Elemento 3"},
					{value:"elemento4",text:"Elemento 4"}
				]
			}
		},
		computed:{//lo q se ejecuta en tiempo real
			validar(){//si es mayor q 5 true sino false
				return this.texto.length > 5 ? true : false
			}
		}
	}
</script>