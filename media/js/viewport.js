Ext.onReady(function(){
  // Required if showing validation messages
  Ext.QuickTips.init();

  // Callback send mail.
  var sendMail = function() {
    if (form.getForm().isValid()) {
      form.getForm().submit({
        url: '/sendmail',
        waitMsg: 'Sending...',
        success: function(form, o) {
          console.log(o);
          Ext.Msg.alert('Success', o.result.msg);
        }
      });
    }
  }

  var form = new Ext.form.FormPanel({
    title: 'Contact Us',
    bodyStyle: 'padding:15px',
    width: 350,
    defaultType: 'textfield',
    defaults: {
      // applied to each contained item
      width: 230,
      msgTarget: 'side'
    },
    items: [{
      fieldLabel: 'Subject',
      name: 'subject',
      allowBlank: false,
      labelSeparator: ':' // override labelSeparator layout config
    },{
      fieldLabel: 'Email',
      name: 'email',
      allowBlank: false,
      vtype:'email'
    },{
      xtype: 'textarea',
      hideLabel: true,     // override hideLabels layout config
      name: 'message',
      allowBlank: false,
      anchor: '100% -53'
    }],
    buttons: [
      {text: 'Save', handler: sendMail},
      {text: 'Cancel'}
    ],
    layoutConfig: {
      //labelSeparator: '~' // superseded by assignment below
    },
    // config options applicable to container when layout='form':
    hideLabels: false,
    labelAlign: 'left',   // or 'right' or 'top'
    //labelSeparator: '>>', // takes precedence over layoutConfig value
    labelWidth: 65,       // defaults to 100
    labelPad: 8           // defaults to 5, must specify labelWidth to be honored
  });

  var fPanel = new Ext.Panel({
    region: 'center',
    items: [form]
  });
  viewport = new Ext.Viewport({
    layout: 'border',
    items: [fPanel]
  });
});
