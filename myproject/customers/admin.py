from django.contrib import admin

# Register your models here.
from .models import Customer

admin.site.register(Customer)

from django.contrib import admin
from .models import Expense

admin.site.register(Expense)
