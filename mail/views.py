from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.core import serializers

import json

from extjs.mail.models import Mail

def sendmail(request):
    # Predefined
    _subject = request.POST.get('subject') or ''
    _sender = request.POST.get('email') or ''
    _message = request.POST.get('message') or ''
    _success = True

    # Insert object.
    if (_subject == '' or _sender == '' or _message == ''):
        _success = False
        _msg = 'Your data is not enough.'
    else:
        m = Mail(subject=_subject, sender=_sender, message=_message)
        m.save()
        _msg = 'We got your message.'
    
    # Return object.
    ret = {'success': _success, 'msg': _msg}
    return HttpResponse(json.dumps(ret))

def getmail(request):
    ret = {'success': True, 'rows': []}
    mail = Mail.objects.filter(subject__icontains=request.POST.get('query'))
    for m in mail:
        ret['rows'].append({'email': m.sender, 'subject': m.subject})
    return HttpResponse(json.dumps(ret))
