<template>
	<Panel title="Projects">
		<div 
			v-for="project in projects"
			:key="project.id"
		>
			<v-layout row wrap>
				<v-flex xs10 class="project_text text-xs-left mt-2">
					<span
						v-if="!project.isEditMode"
					>
						{{project.title}}
					</span>
					<v-text-field
						v-if="project.isEditMode"
						autofocus
						:value="project.title"
						@keyup.enter="updateProject(project)"
						@input="setProjectTitle({
							project,
							title: $event
						})"
					>						
					</v-text-field>
				</v-flex>
				<v-flex xs2>
					<v-icon v-if="!project.isEditMode" class="mr-2" @click="setEditMode(project)">edit</v-icon>
					<v-icon v-if="project.isEditMode" class="mr-2" @click="updateProject(project)">check</v-icon>
					<v-icon @click="deleteProject(project)">delete</v-icon>
				</v-flex>
			</v-layout>
		</div>
		<v-layout row wrap class="mt-3">
			<v-flex xs8>
				<v-text-field 
				placeholder="My project name...."
				:value="newProjectName"
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
			'newProjectName',
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
	.project_text{
		font-size: 18px;
		cursor: pointer;
	}
</style>