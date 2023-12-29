# nzxt-pruebas1


binggpt: hazme una pagina en la que se pueda cambiar mas de una vez de pagina sola, links externos



<!DOCTYPE html>
<html>
<head>
    <title>Página 1</title>
    <script type="text/javascript">
        var paginas = ['https://www.bing.com', 'https://www.microsoft.com', 'https://www.github.com'];
        var i = 0;
        function cambiarPagina() {
            window.location.href = paginas[i];
            i = (i + 1) % paginas.length;
        }
        setInterval(cambiarPagina, 5000);
    </script>
</head>
<body>
    <h1>Estás en la página 1</h1>
    <p>Esta página cambiará a otra página web externa después de 5 segundos.</p>
</body>
</html>
