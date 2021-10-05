@component('mail::message')

Hemos creado un usuario para usted
sus datos son los siguientes:
ingrese al siiguiente enlace: <a href="{{ config('app.url') }}">recordator</a>
Gracias,<br>
{{ config('app.name') }}
@endcomponent
