from .serializers import SignUpSerializer
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response


class SignUpView(APIView):
    throttle_classes = ()
    permission_classes = ()
    parser_classes = (JSONParser,)
    renderer_classes = (JSONRenderer,)
    serializer_class = SignUpSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

sign_up_view = SignUpView.as_view()
