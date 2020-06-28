<template>
  <v-container>
  	<v-layout>
  		<v-flex>
  			<v-btn color="success" >button</v-btn>
  			<v-btn dark color="blue">button</v-btn>
  			<v-btn text color="primary">button</v-btn>  			
  			<v-btn color="warning">button</v-btn>
  			<v-btn large color="warning">button</v-btn>
  			<v-btn small color="warning">button</v-btn>

  			<v-btn dark depressed color="red">button</v-btn>

  			<v-btn flat icon color="warning">
  				<v-icon>mdi-heart</v-icon>
  			</v-btn>
  			<v-btn :large="largo" color="warning">
  				<v-icon>mdi-heart</v-icon>
  			</v-btn>
  			<v-btn @click="largo^=true;">
  				click
  			</v-btn>
  		</v-flex>
  	</v-layout>
  </v-container>
</template>
<script>
	export default{
		data(){
			return{
				largo:true
			}
		}
	}
</script>