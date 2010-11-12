Ext.onReady(function() {

  var store = new Ext.data.JsonStore({
    url: '/get',
    root: 'rows',
    fields: ['email', 'subject']
  });

  var cb = new Ext.form.ComboBox({
    id: 'countryCmb',
    fieldLabel: 'Country',
    emptyText: 'Select a country...',
    store: store,
    displayField: 'subject',
    valueField: 'email',
    mode: 'remote',
    editable: true,
    triggerAction: 'all',
  });

  var form = new Ext.FormPanel({
    renderTo: document.body,
    width: 400,
    height: 300,
    title: 'Combobox',
    items: [cb]
  });
});
