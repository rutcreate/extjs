 from django.conf.urls.defaults import patterns, url 

 urlpatterns = patterns('',
     (r'^sendmail$', 'extjs.mail.views.sendmail')
 )
