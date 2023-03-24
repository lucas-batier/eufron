from django.contrib.auth.models import User, Permission
from django.core.mail import EmailMultiAlternatives
from django.db.models.signals import post_save
from django.db.models import Q
from django.dispatch import receiver
from django.template.loader import render_to_string

from django_rest_passwordreset.signals import reset_password_token_created


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    :param sender: View Class that sent the signal
    :param instance: View Instance that sent the signal
    :param reset_password_token: Token Model Object
    :param args:
    :param kwargs:
    :return:
    """

    context = {
        'reset_password_url': f"{BASE_URL}/reset_password{reset_password_token.key}"
    }

    email_html_message = render_to_string('email/reset_password.html', context)
    email_plaintext_message = render_to_string(
        'email/reset_password.txt', context)

    message = EmailMultiAlternatives(
        subject="Réinitialiser votre mot de passe Eufron 🙌",
        body=email_plaintext_message,
        from_email=EMAIL_HOST_USER,
        to=[reset_password_token.user.email]
    )
    message.attach_alternative(email_html_message, "text/html")
    message.send()
