// Namespace our app
var app = app || {};

// view for all sayings/forms
app.allFormsView = Backbone.View.extend({
	
	tagName: "section",
	
	render: function(){
		this.collection.each(this.addForm, this);
		//this.collection.each(this.addSelect, this);
		return this;
	},
	
	addForm: function(form){
		var formView = new app.singleFormView({ model: form });
		this.$el.append(formView.render().el);
	},
	
	initialize: function(){
		this.listenTo(this.collection, 'add', this.addForm);
		return this;
	}
	
});