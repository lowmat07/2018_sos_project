// Namespace our app
var app = app || {};

app.myRouter = Backbone.Router.extend({
	
	form: null,
	
	initialize: function(){
		
	},
	
	routes: {
		"": "routeDef",
		"form/:name": "routeForm"
	},
	
	routeDef: function(){
		var formGroupView = new app.allFormsView({ collection: formsGroup });
		var selectView = new app.selectFormsView({ collection: formsGroup });
		var newFormView = new app.newFormBttnView();
		
		
		$("#allForms").html(formGroupView.render().el);
		$("#formNav").html(selectView.render().el);
		$("#addNew").html(newFormView.render().el);
	},
	
	routeForm: function(name){
		//test if form is not already in group
		var groupList = formsGroup.where({form: name});
		//var m = (groupList.length != 0) ? groupList[0] : new app.singleForm({form: name});
		//console.log(groupList[0]); 
		var m;
		
		if(groupList.length != 0){
			m = groupList[0];
		}
		else{
			m = new app.singleForm({form: name});
			formsGroup.add(m);
		}
		
		var formView = new app.singleFormView({ model: m });
		$("#allForms").html(formView.render().el);
		$("#addNew").html('');
		$("#formNav").html('<a href="">Home</a>');
		
	}
	
});