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
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    

class LeagueViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = League.objects.all()
    serializer_class = LeagueSerializer

    def list(self, request):
        queryset = League.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
        

class CharacteristicViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Characteristic.objects.all()
    serializer_class = CharacteristicSerializer

    def list(self, request):
        queryset = Characteristic.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class FootballClubsViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = FootballClubs.objects.all()
    serializer_class = FootballClubSerializer

    def list(self, request):
        queryset = FootballClubs.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)