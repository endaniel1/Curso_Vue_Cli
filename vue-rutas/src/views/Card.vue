<template>
	<div class="container" >
		<!-- 
    		b-button, "button" variant las clase a utilizar
			b-card, card title titulo,img-src src imagne a utilizar
    	 -->
		<div class="mt-5">
    		<h1>Ejemplo Con Boosptrap-Vue(Button, Card)</h1>
		</div>
		<div class="mt-5">
			<b-button variant="danger">Button danger</b-button>	
			<b-button variant="warning">Button warning</b-button>	
			<b-button variant="success">Button success</b-button>	
			<b-button variant="primary">Button primary</b-button>	
			<b-button variant="dark">Button dark</b-button>	
		</div>
		<div class="mt-5">
			<b-card 
			 	title="Ejemplo de Carta"
			    img-src="https://picsum.photos/600/300/?image=25"
			    img-alt="Image"
			    img-top
			    tag="article"
			    style="max-width: 20rem;"
			    class="mb-2" 
    		>
				<b-card-text>
			      Some quick example text to build on the card title and make up the bulk of the card's content.
			    </b-card-text>

			    <b-button href="#" variant="primary">Botton</b-button>
			</b-card>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Card"
	}
</script>