"""
Django settings for mm_proj project.

Generated by 'django-admin startproject' using Django 4.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

from pathlib import Path
import datetime
# import timedelta

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-@7gmd854+jl&+rg_upfdr1c0c9%go^qwv7806*!h_7+6qm_5wt'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_jwt',
    # 'rest_framework_simplejwt',
    'corsheaders',
    'user.apps.UserConfig',
    'mixmind.apps.MixmindConfig',
    'community.apps.CommunityConfig',
    'playList.apps.PlaylistConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = 'mm_proj.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mm_proj.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE'    : 'django.db.backends.mysql',
        'NAME'      : 'mixmind_webservice',
        'USER'      : 'TeamMixMind',
        'PASSWORD'  : '730402',
        'HOST'      : '34.64.62.157',
        'PORT'      : '3306',
    }
}

# settings.py

# 모든 도메인에서 CORS 요청을 허용하는 경우:
CORS_ALLOW_CREDENTIALS = True

# 혹은 특정 도메인에서 CORS 요청을 허용하는 경우:
CORS_ALLOWED_ORIGINS  = [  'http://10.140.0.3:3000', #For React Project 
                            'http://localhost:3000',
                            'http://10.140.0.3:3001',
                            'http://localhost:3001',
                            'http://10.140.0.3:3002',
                            'http://localhost:3002',
                            'http://10.140.0.3:3003',
                            'http://localhost:3003',
                            'http://10.140.0.3:3004',
                            'http://localhost:3004',
                            'http://localhost:3005',
                            'http://localhost:3006',
                            'http://10.140.0.3:3007',
                            'http://localhost:3007',
                            'http://10.140.0.3:3008',
                            'http://localhost:3008',
                            'http://10.140.0.3:3009',
                            'http://localhost:3009',
                            'http://127.0.0.1:8000',
                            'http://127.0.0.1:8080',  #For Django Project 
                            'http://127.0.0.1:8081',  #For Django Project 
                            'http://127.0.0.1:8082',  #For Django Project 
                            'http://127.0.0.1:8888',  #For Django Project 

                        ]

# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = "ko-kr"

TIME_ZONE = "Asia/Seoul"

USE_I18N = True

USE_TZ = True

STATICFILES_DIRS = [
    BASE_DIR / "static",
]

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

JWT_AUTH = {
    'JWT_PAYLOAD_GET_USERNAME_HANDLER':
    'myapp.utils.jwt_get_username_from_payload_handler',
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=1), # 토큰 만료 기간 설정
    'JWT_ALLOW_REFRESH': True, # 토큰 갱신 허용
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=7), # 갱신 토큰 만료 기간 설정
}

AUTH_USER_MODEL = 'user.User'

# from django.core.management.utils import get_random_secret_key
# SECRET_KEY = get_random_secret_key()
SECRET_KEY = 'MixMind_secret_key'

# REST_FRAMEWORK = {
#     'DEFAULT_AUTHENTICATION_CLASSES': (
#         'rest_framework_simplejwt.authentication.JWTAuthentication',
#     )
# }

# SIMPLE_JWT = {
#     'ACCESS_TOKEN_LIFETIME': timedelta(minutes=30),
#     'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
#     'ROTATE_REFRESH_TOKENS': False,
#     'BLACKLIST_AFTER_ROTATION': False,
#     'UPDATE_LAST_LOGIN': False,

#     'ALGORITHM': 'HS256',
#     'SIGNING_KEY': SECRET_KEY,
#     'VERIFYING_KEY': None,
#     'AUDIENCE': None,
#     'ISSUER': None,
#     'JWK_URL': None,
#     'LEEWAY': 0,

#     'AUTH_HEADER_TYPES': ('Bearer',),
#     'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
#     'USER_ID_FIELD': 'id',
#     'USER_ID_CLAIM': 'user_id',
#     'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

#     'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
#     'TOKEN_TYPE_CLAIM': 'token_type',
#     'TOKEN_USER_CLASS': 'rest_framework_simplejwt.models.TokenUser',

#     'JTI_CLAIM': 'jti',

#     'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
#     'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
#     'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
# }
