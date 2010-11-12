from django.contrib import admin
from extjs.mail.models import Mail

class MailAdmin(admin.ModelAdmin):
    list_display = ('subject', 'sender', 'message', 'created')

admin.site.register(Mail, MailAdmin)
