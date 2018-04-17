// Namespace our app
var app = app || {};

// view for single model view, which is one saying/form
app.newFormView = Backbone.View.extend({
	
	tagName: "article",
	className: "newForm",
	
	template: _.template( $("#newForm").html() ),
	
	render: function() {
		var newForm = this.template();
		this.$el.html(newForm);
		return this;
	},
	
	addForm: function(e){
		e.preventDefault();
		var form = this.$el.find('input[name=formInput]').val();
		var inst = this.$el.find('input[name=instInput]').val();
		
		var newF = new app.singleForm({form: form, inst: [inst]});
		formsGroup.add(newF);
		//alert(form);
		
	},
	
	addInst: function(){
	},
	
	events: {
		"click .addInst": "addInst",
		"submit": "addForm"
	}
});