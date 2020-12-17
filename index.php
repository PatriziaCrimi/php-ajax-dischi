<!-- ............................. PHP ............................. -->
<?php
  /* ASSIGNMENT
  Per prima cosa stampate i dischi in pagina utilizzando solo il php, includendo il file con l'array di dati e utilizzando il ciclo foreach.
  Poi stampate i dischi in pagina facendo una chiamata ajax al file php con i dati, utilizzando jQuery e Handlebars per appendere le card.
  BONUS: create una select con i generi e applicate un filtro alle card, facendo un'altra chiamata ajax.
  Ciò significa che il filtro per genere deve essere applicato lato back-end, ossia il php restituisce solo i dischi del genere selezionato.
  */

  // -------------- Initialization of Variables --------------

  $title = 'PHP Ajax Discs';
  $genres_list = 'genre';
  $disc_titles = 'title';
  $disc_authors = 'author';
  $disc_years = 'author';
?>

<!-- ............................. HTML ............................. -->
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP Ajax Dischi</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="img/png" href="https://open.scdn.co/cdn/images/favicon32.a19b4f5b.png">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link rel="stylesheet" href="public/app.css">
  </head>
  <body>
    <div id="page-wrapper">
      <div class="container">
        <div class="row">
          <h1><?php echo($title) ?></h1>
        </div>
        <!-- Select and sort section -->
        <div class="row row-md">
          <div class="col-12 col-lg-6">
            <p>Select the music genre:</p>
            <select id="select-genre">
              <option value="all">All</option>
              <option><?php echo($genres) ?></option>
            </select>
          </div>
          <div class="col-12 col-lg-6">
            <p>Sort playlist by release year:</p>
            <select id="sort-year">
              <option disabled value="">Please select</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>
        <!-- Music discs cards section -->
        <div class="row">
          <div id="cards-container">
            <div class="music-disc">
              <img class="disc-poster" src="" alt="Disc img">
              <h3><?php echo($disc_titles) ?></h3>
              <h4><?php echo($disc_authors) ?></h4>
              <small><?php echo($disc_years) ?></small>
            </div>
          </div>
        </div>
      </div>  <!-- Closing container -->
    </div>  <!-- Closing page-wrapper -->
    <script type="text/javascript" src="public/app.js"></script>
  </body>
</html>
