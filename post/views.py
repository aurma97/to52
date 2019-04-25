from django.db.models import Q
from rest_framework import generics, mixins
from .models import Post, PostType
from .permissions import IsOwnerOrReadOnly 
from .serializer import PostSerializer, PostTypeSerializer


#See all objects and create someone
class PostAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class= PostSerializer

    def get_queryset(self): #for searching
        qs= Post.objects.all()
        query = self.request.GET.get("q")
        if query is not None:
            qs= qs.filter(Q(title__icontains=query)|Q(content__icontains=query)).distinct()
        return qs

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
         return self.update(request, *args, **kwargs)

    # def patch(self, request, *args, **kwargs):
    #     return self.update(request, *args, **kwargs)

class PostTypeAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class= PostTypeSerializer

    def get_queryset(self): #for searching
        qs= PostType.objects.all()
        query = self.request.GET.get("q")
        if query is not None:
            qs= qs.filter(Q(title__icontains=query)|Q(content__icontains=query)).distinct()
        return qs

# See specific thing
class PostRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'pk'
    serializer_class= PostSerializer
    permissions_classes = [IsOwnerOrReadOnly]
    
    #queryset = Post.objects.all()

    def get_queryset(self):
        return Post.objects.all()
    
    # def get_object(self):
    #     pk = self.kwargs.get("pk")
    #     return Post.objects.get(pk=pk)
