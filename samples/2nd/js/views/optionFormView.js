// Namespace our app
var app = app || {};

// view for single model view, which is one saying/form
app.optionFormView = Backbone.View.extend({
	
	tagName: "option",
	attributes: function() {
		return {
			value: this.model.attributes.form	
		}
	},
	
	template: _.template( $("#selectOptions").html() ),
	
	render: function() {
		var selectTemplate = this.template( this.model.toJSON() );
		this.$el.html( selectTemplate );
		//this.$el.html( this.model.attributes.form );
		return this;
	}
});