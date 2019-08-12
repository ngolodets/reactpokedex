from .models import Pokemon
from .serializers import PokemonSerializer

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET', 'POST'])
def pokemon_list(request):
  if request.method == 'GET':
    pokemon = Pokemon.objects.all()
    serializer = PokemonSerializer(pokemon, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  elif request.method == 'POST':
    serializer = PokemonSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'DELETE', 'PUT'])
def pokemon_detail(request, pk):
  pokemon = Pokemon.objects.get(pk=pk)
  if request.method == 'GET':
    serializer = PokemonSerializer(pokemon)
    return Response(serializer.data, status=status.HTTP_200_OK)
  elif request.method == 'PUT':
    serializer = PokemonSerializer(pokemon, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'DELETE':
    pokemon.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
