<template>
	<Panel title="Projects">
		<v-layout row wrap>
			<v-flex xs8>
				<div 
					v-for="project in projects"
					:key="project.id"
				>
					{{project.title}}
				</div>
				<v-text-field 
				placeholder="My project name...."
				:value="newProjectName"
				@input="setNewProjectName"
				></v-text-field>
			</v-flex>
			<v-flex xs4>
				<v-btn class="mt=2" dark color="green" @click="createProject">
					<v-icon class="mr-2">add_circle</v-icon>
					Create
				</v-btn>
			</v-flex>
		</v-layout>
	</Panel>
</template>


<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
	computed: {
		...mapState('projects', [
			'newProjectName',
			'projects'
		]),
	},
	methods: {
		...mapMutations('projects', [
			'setNewProjectName',
		]),
		...mapActions('projects', [
			'createProject',
		])
	}
}
</script>


<style>
	
</style>