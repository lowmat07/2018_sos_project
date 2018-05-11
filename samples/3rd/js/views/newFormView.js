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
		
		//test if form is not already in group
		var groupList = formsGroup.where({form: form});
		if(groupList.length != 0){
			alert("there is another form with same name");
			return;
		}
		
		if(form == ''){
			alert("form can't be empty");
			return;
		}
		
		if(inst != ''){
			this.model.addInst(inst);
		}
		
		this.model.set({form: form});
		formsGroup.add(this.model);
		//this.model.save();
		
		//remove form & return the 'add form' button
		var newFormBttnView = new app.newFormBttnView();
		$("#addNew").empty().html(newFormBttnView.render().el);
		
		//console.log("a model form named [" + this.model.get("form") + "] has been created. meanings: [" + this.model.get("inst") + "]");
		
	},
	
	addInst: function(){
		instInput = this.$el.find('input[name=instInput]');
		var curInst = instInput.val();
		instInput.val('');
		var insts = this.$el.find('#newInsts');
		insts.removeClass('hide');
		
		this.model.addInst(curInst);
		
		//separate by commas if more than one inst
		if($(insts).is(':empty')){
			insts.append(curInst);
		}
		else{
			insts.append(', '+curInst);
		}
	},
	
	events: {
		"click .addInst": "addInst",
		"submit": "addForm"
	},
	
	initialize: function(){
		this.model = new app.singleForm();
		//this.model.save();
		//this.listenTo(this.collection, 'add', this.addForm);
		return this;
	}
});