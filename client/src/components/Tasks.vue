<template>
	<Panel title="Tasks">
		<div 
			v-for="task in tasks"
			:key="task.id"
		>
			<v-layout row wrap>
				<v-flex xs10 class="project_text text-xs-left mt-2">
					<span
						v-if="!task.isEditMode"
					>
						{{task.description}}
					</span>
					<v-text-field
						v-if="task.isEditMode"
						autofocus
						:value="task.description"
						@keyup.enter="updateProject(task)"
						@input="setProjectTitle({
							task,
							title: $event
						})"
					>						
					</v-text-field>
				</v-flex>
				<v-flex xs2>
					<v-icon v-if="!task.isEditMode" class="mr-2" @click="setEditMode(task)">edit</v-icon>
					<v-icon v-if="task.isEditMode" class="mr-2" @click="updateProject(task)">check</v-icon>
					<v-icon @click="deleteProject(task)">delete</v-icon>
				</v-flex>
			</v-layout>
		</div>
		<v-layout row wrap class="mt-3">
			<v-flex xs8>
				<v-text-field 
				placeholder="Task description...."
				:value="newTaskName"
				@keyup.enter="createProject"
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
	mounted() {
		this.fetchProjects();
	},
	computed: {
		...mapState('projects', [
			'newTaskName',
			'projects'
		]),
	},
	methods: {
		...mapMutations('projects', [
			'setNewProjectName',
			'setProjectTitle',
			'setEditMode',
			'unsetEditMode'
		]),
		...mapActions('projects', [
			'createProject',
			'fetchProjects',
			'updateProject',
			'deleteProject',
		])
	}
}	
</script>


<style>
	
</style>