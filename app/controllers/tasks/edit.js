import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		editTask: function(id){

			//alert('inside editTask')
			var self = this;
			var title = this.get('model.title');
			var date = this.get('model.date');
			var description = this.get('model.description');

			//alert(date);

			this.store.findRecord('task',id).then(function(task){


					task.set('title',title);
					task.set('description',description);
					task.set('date', new Date(date));


					task.save();

					self.transitionToRoute('tasks');
			});
		}
	}
});
