from rest_framework import viewsets
from .models import *
from .serializers import *

class CafeteriaViewSet(viewsets.ModelViewSet):
    queryset=Cafeteria.objects.all()
    serializer_class= CafeteriaSerializer

class ProductoViewSet(viewsets.ModelViewSet):
        queryset=Producto.objects.select_related('id_categoria').all()
        serializer_class=ProductoSerializer

class RolesViewSet(viewsets.ModelViewSet):
    queryset=Roles.objects.all()
    serializer_class=RolesSerializer

class UsuariosViewSet(viewsets.ModelViewSet):
    queryset=Usuarios.objects.select_related('id_rol').all()
    serializer_class=UsuariosSerializer

class DetallePedidoViewSet(viewsets.ModelViewSet):
    queryset=DetallePedido.objects.select_related('id_pedido', 'id_producto').all()
    serializer_class=DetallePedidoSerializer

class PedidoViewSet(viewsets.ModelViewSet):
    queryset=Pedido.objects.select_related('id_usuario').all()
    serializer_class=PedidoSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset=Categoria.objects.all()
    serializer_class=CategoriaSerializer

class PagoViewSet(viewsets.ModelViewSet):
    queryset=Pago.objects.select_related('id_pedido').all()
    serializer_class=PagoSerializer