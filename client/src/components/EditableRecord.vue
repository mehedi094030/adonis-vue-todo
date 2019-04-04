<template>
	<v-layout row wrap>
		<v-flex xs10 class="project_text text-xs-left mt-2">
			<span
				v-if="!isEditMode"
			>
				{{title}}
			</span>
			<v-text-field
				v-if="isEditMode"
				autofocus
				:value="title"
				@keyup.enter="$emit('onUpdate')"
        		@input="$emit('onInput', $event)"
			>						
			</v-text-field>
		</v-flex>
		<v-flex xs2>
			<v-icon v-if="!isEditMode" class="mr-2" @click="$emit('onEdit')">edit</v-icon>
			<v-icon v-if="isEditMode" class="mr-2" @click="$emit('onUpdate')">check</v-icon>
			<v-icon @click="$emit('onDelete')">delete</v-icon>
		</v-flex>
	</v-layout>
</template>


<script>

export default {
	props: [
		'isEditMode',
		'title',
	],
}
</script>


<style>

</style>