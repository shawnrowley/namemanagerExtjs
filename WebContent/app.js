Ext.application({
    requires ['Ext.container.Viewport'],
    name : 'NameManagerExtjs',
    views : ['PersonView'],
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

