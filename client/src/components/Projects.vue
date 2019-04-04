<template>
	<Panel title="Projects">
		<div 
			v-for="project in projects"
			:key="project.id"
		>
		<EditableRecord
			:isEditMode="project.isEditMode"
			:title="project.title"
			@onInput="setProjectTitle({
	          project,
	          title: $event,
	        })"
			@onClick="projectClicked(project)"
        	@onEdit="setEditMode(project)"
        	@onUpdate="updateProject(project)"
        	@onDelete="deleteProject(project)"
		/>
		</div>
		<CreateRecord 
			placeholder="Project name...."
		    @onInput="setNewProjectName"
		    :value="newProjectName"
		    @create="createProject"
		/>
	</Panel>
</template>


<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
	mounted() {
		this.fetchProjects();
	},
	components: {
		CreateRecord,
		EditableRecord,
	},
	computed: {
		...mapState('projects', [
			'newProjectName',
			'projects'
		]),
	},
	methods: {
		projectClicked(project) {
	      	this.setCurrentProject(project);
	      	this.fetchTasksForProject(project);
	    },
		...mapMutations('projects', [
			'setNewProjectName',
			'setProjectTitle',
			'setEditMode',
			'setCurrentProject'
		]),
		...mapActions('projects', [
			'createProject',
			'fetchProjects',
			'updateProject',
			'deleteProject',
		]),
		...mapActions('tasks', [
	      	'fetchTasksForProject',
	    ]),
	}
}
</script>


<style>
	.project_text{
		font-size: 18px;
		cursor: pointer;
	}
</style>