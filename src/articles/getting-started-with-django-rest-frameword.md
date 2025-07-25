---
title: "Getting Started with Django REST Framework"
category: "software engineering"
date: "07-25-2023"
tags: ["Python", "Django", "REST API"]
featured: false
image: "https://images.unsplash.com/photo-1682687980976-fec0915c6177?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

# Getting Started with Django REST Framework
**Django REST Framework (DRF)** is a powerful and flexible toolkit for building Web APIs with Django. Whether you're developing a RESTful backend for a web or mobile app, DRF provides tools to serialize data, handle authentication, and manage permissions with ease.
This guide will walk you through setting up a basic DRF project.

## Prerequisites
* Python 3.7+
* Django installed (pip install django)
* Virtual environment (recommended)

## Step 1: Create a Django Project
```
django-admin startproject myproject
cd myproject
```

## Step 2: Install Django REST Framework
Inside your virtual environment, install DRF:
```
pip install djangorestframework
```

Then, add it to your `INSTALLED_APPS` in `settings.py`:

```py
# myproject/settings.py

INSTALLED_APPS = [
    ...
    'rest_framework',
]
```
Optional but useful:

```
pip install markdown       # for browsable API support
pip install django-filter  # for filtering support
```

## Step 3: Create a Django App

```
python manage.py startapp api
```

Add the app to your project settings:

```py
# myproject/settings.py

INSTALLED_APPS = [
    ...
    'api',
]
```

## Step 4: Create a Model
Let’s define a simple Book model.

```py
# api/models.py

from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    published = models.DateField()

    def __str__(self):
        return self.title
```

Run migrations:

```
python manage.py makemigrations
python manage.py migrate
```

## Step 5: Create a Serializer
Serializers convert complex data (like Django models) into JSON and vice versa.

```py
# api/serializers.py

from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
```

## Step 6: Create a View
You can use function-based views or class-based views. Here’s a simple one using DRF’s `APIView`.

```py
# api/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer

class BookList(APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
```

## Step 7: Add URLs
Connect the view to a URL pattern.

```py
# api/urls.py

from django.urls import path
from .views import BookList

urlpatterns = [
    path('books/', BookList.as_view(), name='book-list'),
]
```

Then include this in the project’s main `urls.py`:

```py
# myproject/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
```

## Step 8: Run the Server
```
python manage.py runserver
```

Now navigate to `http://127.0.0.1:8000/api/books/` to see your JSON response (or browsable API if enabled).
