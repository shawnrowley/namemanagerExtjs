/**
 * 
 */
 
 Ext.define('namemanager.controller.PersonController', {
    extend: 'Ext.app.Controller',
    models: ['namemanager.model.Person'],
    views: ['namemanager.view.PersonView'],

    refs: [{
        ref: 'personViewForm',
        selector: 'viewport > PersonView'
    }],

    init: function () {
        this.control({

            'viewport > PersonView button[itemId=btnCreate]': {
                click: this.onCreateClick
            },
            'viewport > PersonView button[itemId=btnLoad]': {
                click: this.onLoadClick
            },
            'viewport > PersonView button[itemId=btnUpdate]': {
                click: this.onUpdateClick
            },
            'viewport > PersonView button[itemId=btnDelete]': {
                click: this.onDeleteClick
            },
            'viewport > PersonView button[itemId=btnReset]': {
                click: this.onResetClick
            },
            'viewport > PersonView button[itemId=btnClear]': {
                click: this.onClearClick
            }
        });
    },
   
    onResetClick: function () {
        this.getPersonViewForm().getForm().reset();
    },
   
    onClearClick: function () {
        this.getPersonViewForm().clearForm();
    },
    
    onCreateClick: function () {
    	alert('Create'); 
    },
    
    getPersons: function() {
    	var me = this;
    	Ext.Ajax.request({
           url : '/rest/Persons',
           method : 'GET',
           success: function(resp) {
           	   var data = Ext.decode(resp.responseText);
           	   
               //reload
           },
           failure: function(resp) {
               //failed display
           } 
       });
    },
    
    addPerson: function(person) {
      var me =this;
      Ext.Ajax.request({
           url : '/rest/Persons',
           method : 'POST',
           jsonData : person,
           reader : {
                 type: 'json'
           }, 
           success: function(resp) {
               //reload
           },
           failure: function(resp) {
               //failed display
           } 
       });
    },
    
    deletePerson: function(id) {
        var me = this;
        Ext.Ajax.request({
          url : Ext.String.format('/rest/Persons/{0}', id),
          method : 'DELETE',
          jsonData : person,
          headers:
          {
              'Accept' :'application/json',
              'Content-Type' : 'application/json'
          },
          success : function(resp) {
           
          },
          failure : function (resp) {
           
          }
        });
    },
    
    updatePerson: function(person) {
      var me =this;
        Ext.Ajax.request({
           url : '/rest/Persons/',
           method : 'PUT', 
           jsonData : person,
           headers:
          {
              'Accept' :'application/json',
              'Content-Type' : 'application/json'
          },
          success : function(resp) {
           
          },
          failure : function (resp) {
           
          }
         
        });
    }
     

});
