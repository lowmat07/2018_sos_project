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
	/*
	addSelect: function(form){
		var selectView = new app.selectFormView({ model: form });
		this.$el.append(selectView.render().el);
	},
	*/
	/*
	events: {
		"#showTags:checked:true": this.showTags,
		"#showTags:checked:false": this.hideTags
	},
	*/
	
	
});