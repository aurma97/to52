from django.http import HttpResponse

def current_user(request):
    current_user = request.user
    return HttpResponse(current_user.username)

