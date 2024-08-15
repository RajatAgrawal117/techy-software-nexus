from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, FeedbackViewSet

router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'feedback', FeedbackViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
