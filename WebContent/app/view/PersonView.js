/**
 * 
 *
 */
 
Ext.define('namemanager.view.Person', {

    extend: 'Ext.form.Panel',
    alias: 'widget.PersonView',
    config: {},
    constructor: function (config) {
        this.initConfig(config);
        return this.callParent(arguments);
    },
    
    clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    },
    initComponent: function () {
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

        Ext.apply(this, {
            id: 'PersonId',
            title: 'Name Registration',
            resizable: false,
            collapsible: true,
            bodyPadding: '5',
            buttonAlign: 'center',
            border: false,
            trackResetOnLoad: true,
            layout: {
                type: 'vbox'
            },
            defaults: {
                xtype: 'textfield',
                msgTarget: 'side',
                labelAlign: 'top',
                labelStyle: 'font-weight:bold'
            },
            items: [{
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaultType: 'textfield',
                width: '100%',
                fieldDefaults: {
                    labelAlign: 'top',
                    labelStyle: 'font-weight:bold'
                },
                items: [{
                    fieldLabel: 'id',
                    name: 'id',
                    readOnly: true,
                    width: 35
                }, 
                {
                    fieldLabel: 'First Name',
                    flex: 1,
                    name: 'firstName',
                    afterLabelTextTpl: required,
                    margin: '0 0 0 5',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Last Name',
                    flex: 1,
                    margin: '0 0 0 5',
                    name: 'lastName'
                }]
            	},
                {
                    xtype: 'textfield',
                    fieldLabel: 'Country',
                    name: 'country'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'IP Address',
                    width: '100%',
                    name: 'ipAddress'
                }
                ],
            buttons: [
                { text: 'Create',
                    itemId: 'btnCreate'
                },
                { text: 'Read Data',
                    itemId: 'btnLoad'
                },

                { text: 'Update',
                    itemId: 'btnUpdate'
                },
                { text: 'Delete',
                    itemId: 'btnDelete'
                },
                { text: 'Reset',
                    itemId: 'btnReset'
                },
                { text: 'Clear',
                    itemId: 'btnClear'
                }]
        });
        this.callParent(arguments);
    }
});