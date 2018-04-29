// Namespace our app
var app = app || {};

// view for single model view, which is one saying/form
app.newFormBttnView = Backbone.View.extend({
	
	tagName: "button",
	className: "newForm",
	
	//template: _.template( $("#newFormBttn").html() ),
	
	render: function() {
		//var newFormB = "<button id="newForm">add form</button>";
		this.$el.html("add form");
		return this;
	},	
	
	addNew: function(){
		var newFormView = new app.newFormView();
		$("#addNew").html(newFormView.render().el)
		//var newBttnView = new app.optionFormView({ model: form });
		//this.$el.append(optionView.render().el);
		//alert("bttn clicked");
	},
	
	events: {
		"click": "addNew"
	}
});