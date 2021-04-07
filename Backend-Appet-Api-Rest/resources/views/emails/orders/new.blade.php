<html>
    <body>
        <h1>Hola! Gracias por preferir APPET.!</h1>

        <p>{{$order->description}}</p>
        <p>{{$order->news}}</p>

        <img src="{{ $message->embed( 'storage/' . $order->service->image) }}">
    </body>
</html>
