from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

class MyUserManager(BaseUserManager):
    def create_user(self, email, nickname, age, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email), 
            nickname=nickname, 
            age=age,
            )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, nickname, age, password=None):
        user = self.create_user(
            email,
            password=password,
            nickname=nickname,
            age=age
        )
        return user

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    nickname = models.CharField(max_length=30, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nickname', 'age']

    objects = MyUserManager()

    def __str__(self):
        return self.email