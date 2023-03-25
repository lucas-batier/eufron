from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import password_validation
from django.core import exceptions


from rest_framework import serializers

from .models import User


class SignUpSerializer(serializers.Serializer):
    username = serializers.EmailField(
        label=_("username"),
        write_only=True,
    )
    password = serializers.CharField(
        label=_("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True,
    )
    token = serializers.CharField(
        label=_("Token"),
        read_only=True,
    )

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        errors = {}

        try:
            password_validation.validate_password(password)
        except exceptions.ValidationError as e:
            messages = [_(error_message) for error_message in e.messages]
            errors['password'] = messages

        if username and password:
            try:
                user = User.objects.get(email=username)

                if user.is_active:
                    if user.check_password(password):
                        message = _(
                            'An account with those credentials already exists.')
                        errors['non_field_errors'] = message
                    else:
                        message = _(
                            'An account with this username already exists but the password is incorrect.')
                        errors['non_field_errors'] = message
                else:
                    message = _(
                        'Your account exists but has been deactivated.')
                    errors['non_field_errors'] = message

            except User.DoesNotExist as e:
                user = User(email=username)
                user.set_password(password)
        else:
            message = _(
                'Must include "first_name", "last_name", "username" and "password".')
            errors['non_field_errors'] = message

        if errors:
            raise serializers.ValidationError(errors)

        attrs['user'] = user
        return attrs
