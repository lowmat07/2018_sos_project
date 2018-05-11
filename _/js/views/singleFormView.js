// Namespace our app
var app = app || {};

// view for single model view, which is one saying/form
app.singleFormView = Backbone.View.extend({
	
	tagName: "article",
	className: "formItem",
	
	template: _.template( $("#formDisplay").html() ),
	
	render: function() {
		var formTemplate = this.template( this.model.toJSON() );
		this.$el.html(formTemplate);
		return this;
	},
	
	addInst: function(i){
		//console.log("singleFormView addInst");
		instInput = this.$el.find('input[name=instInput]');
		var curInst = instInput.val();
		instInput.val('');
		
		this.model.addInst(curInst);
		this.render();
	},
	
	viewForm: function(e){
		console.log(e);
		router.navigate("form/"+e.target.innerHTML, {trigger: true});
		//e.innerHTML
	},
	
	events: {
		"click .addInst" : "addInst",
		"click button" : "viewForm"
	}
});