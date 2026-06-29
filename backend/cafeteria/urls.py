from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'cafeterias', CafeteriaViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'productos', ProductoViewSet)
router.register(r'usuarios', UsuariosViewSet)
router.register(r'roles', RolesViewSet)
router.register(r'pedidos', PedidoViewSet)
router.register(r'detalles', DetallePedidoViewSet)
router.register(r'pagos', PagoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
