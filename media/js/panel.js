Ext.onReady(function() {
  var p = new Ext.Panel({
    title: 'Rutz Panel',
    collapsible: true,
    renderTo: 'panel-basic',
    width: 400,
    height: 200,
    scroll: true,
    html: html.join('')
  });
});

var html = [ 
  '<h1>Heading One</h1>',
  '<h2>Heading Two</h2>',
  '<p>This is a paragraph with <strong>STRONG</strong>, <em>EMPHASIS</em> and a <a href="#">Link</a></p>',
  '<table>',
    '<tr>',
      '<td>Table Column One</td>',
      '<td>Table Column Two</td>',
    '</tr>',
  '</table>',
  '<ul>',
    '<li>Un-ordered List-item One</li>',
    '<li>Un-ordered List-item One</li>',
  '</ul>',
  '<ol>',
    '<li>Ordered List-item One</li>',
    '<li>Ordered List-item Two</li>',
  '</ol>',
  '<blockquote>This is a blockquote</blockquote>'
];
