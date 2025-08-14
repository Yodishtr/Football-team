from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializer import *
from .models import *
from rest_framework.response import Response

# Create your views here.
class CountryViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

    def list(self, request):
        queryset = Country.objects.all()
        