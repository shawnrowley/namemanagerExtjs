/**
 * 
 */
 Ext.define('namemanager.model.Person', {
    extend: 'Ext.data.Model',
    idProperty:'id',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'country', type: 'string' },
        { name: 'ipAddress', type: 'string' }
    ],
    validations: [{
        type: 'presence',
        field: 'firstName'
    }],
    proxy: {
        type: 'ajax',
        idParam:'id',
        reader: {
            type: 'json',
            root: 'data' 
        },
        api: {
            read: '/ExampleService.svc/readstudent/',
            create: '/ExampleService.svc/createstudent/',
            update: '/ExampleService.svc/updatestudent/',
            destroy: '/ExampleService.svc/deletestudent/'
        }
    }
});