
Ext.application({
	requires : ['Ext.container.Viewport'],
    name : 'namemanager',
    views : ['namemanager.view.PersonView'],
    controllers: ['PersonController'],
    
    launch : function(){
        
        Ext.create('Ext.container.Viewport', 
        {
            layout : 'fit',
            
            items : [{
               xtype: 'PersonView'
            }]
        });
        
    }
});
