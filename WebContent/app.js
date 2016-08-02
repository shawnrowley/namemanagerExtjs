Ext.application({
    name : 'extjs-tutorial.com',
    
    launch : function(){
        
        Ext.create('Ext.container.Viewport', 
        {
            layout : 'fit',
            
            items : [{
                title : 'First ExtJS Application - Viewport title',
                html : 'Application Viewport area.'
            }]
        });
        
    }
});