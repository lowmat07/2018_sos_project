// Namespace our app
var app = app || {};

app.singleForm = Backbone.Model.extend({

	defaults: {
		form: "undefined",
		inst: "undefined"
	}, //END defaults{}
	
	initialize: function() {
		console.log("a model form named [" + this.get("form") + "] has been created. it means [" + this.get("inst") + "]");
		
		/*
		this.on('change', function(){
			console.log("something in our model has changed");
		});
		this.on('change:form', function(){
			console.log("The form for " + this.get("form") + " model just changed to " + this.get("inst"));
		});
		*/
	} //END initialize()
	
});