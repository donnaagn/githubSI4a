<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "<h5>selamat datang</h5>";
    ?>
    <hr/>
    <?php
        for($a=1; $a<=5; $a++){
            echo"<li>item ke = ".$a."</li>";
        }
    ?>
    <b>halaman ini dapat diakses melalui http://localhouse/DONNA/profil.php </b>
    <?php
        echo $_SERVER['HTTP_HOST'];
        //echo"<br/>";
        var_dump($_SERVER);//khusus dubugging
        print_r($_SERVER);//khusus array
    ?>
</body>
</html>
sayang stephen