from django.shortcuts import render, redirect
from .models import * 
from . forms import ContactForm,ResumeForm

# Create your views here.

def home(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        fname = request.POST['firstname']
        lname = request.POST['lastname']
        email = request.POST['email']
        country = request.POST['country']
        message = request.POST['message']
        parent = ContactMe.objects.create(
            name = fname+" "+lname,
            email = email,
            location = country,
            message = message
        )
        parent.save()
    else:
        form = ContactForm()
    return render(request, 'app/home.html', {'form': form})