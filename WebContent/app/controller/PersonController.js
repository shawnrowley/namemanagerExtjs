/**
 * 
 */
 
 Ext.define('namemanager.controller.', {
    extend: 'Ext.app.Controller',
    models: ['namemanager.model.Person'],
    views: ['namemanager.view.Person'],

    refs: [{
        ref: 'personViewForm',
        selector: 'viewport > container > PersonView'
    }],

    init: function () {
        this.control({

            'viewport > container > PersonView button[itemId=btnCreate]': {
                click: this.onCreateClick
            },
            'viewport > container > PersonView button[itemId=btnLoad]': {
                click: this.onLoadClick
            },
            'viewport > container > PersonView button[itemId=btnUpdate]': {
                click: this.onUpdateClick
            },
            'viewport > container > PersonView button[itemId=btnDelete]': {
                click: this.onDeleteClick
            },
            'viewport > container > PersonView button[itemId=btnReset]': {
                click: this.onResetClick
            },
            'viewport > container > PersonView button[itemId=btnClear]': {
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
    
    addPerson: function(person) {
      var me =this;
      Ext.Ajax.request({
           url : 'rest/add',
           method : 'POST',
           jsonData : person,
           reader : {
                 type: 'json'
           }, 
           success: function(resp) {
           
           },
           failure: function(resp) {
           
           } 
       });
    }  
           }
           }
      })
    }
});
