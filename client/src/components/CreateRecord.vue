<template>
	<v-layout row wrap class="mt-3">
		<v-flex xs8>
			<v-text-field 
				:placeholder="placeholder"
		        :value="value"
		        @input="$emit('onInput', $event)"
		        @keyup.enter="$emit('create')"
			></v-text-field>
		</v-flex>
		<v-flex xs4>
			<v-btn 
				class="mt=2" 
				dark color="green" 
				@click="$emit('create')"
				v-if="value"
			>
				<v-icon class="mr-2">add_circle</v-icon>
				Create
			</v-btn>
			<v-btn
				class="mt=2" 
				v-if="!value"
				disabled
			>
				Create
			</v-btn>
		</v-flex>
	</v-layout>
</template>


<script>

export default {
	props: [
		'placeholder',
		'value',
		'isDisabled',
	],
}
</script>


<style>

</style>