// Namespace our app
var app = app || {};

// view for all sayings/forms
app.selectFormsView = Backbone.View.extend({
	
	tagName: "select",
	className: "selectForm",
	
	render: function(){
		this.collection.each(this.addOption, this);
		return this;
	},
	
	addOption: function(form){
		var optionView = new app.optionFormView({ model: form });
		this.$el.append(optionView.render().el);
	},
	
	initialize: function(){
		this.listenTo(this.collection, 'change', this.addOption);
	}
});