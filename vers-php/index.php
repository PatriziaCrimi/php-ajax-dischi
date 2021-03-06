<!-- ............................. PHP ............................. -->
<?php

  include '../discs.php';

  // -------------- Initialization of Variables --------------

  $title = 'PHP Ajax Discs';
  $subtitle = 'PHP include & Handlebars';
  $credits = 'Patrizia Crimi';

  // -------------- Dynamically generated genres for the select --------------
  $genres_list = [];
  // Scanning the array of discs
  foreach ($discs_list as $disc) {
    // Storing the music genre of the current disc
    $genre = $disc['genre'];
    // Checking if the genre is already in the array of genres
    if(!in_array($genre, $genres_list)) {
      $genres_list[] = $genre;
    }
  }
?>

<!-- ............................. HTML ............................. -->
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP Include Dischi</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="img/png" href="https://open.scdn.co/cdn/images/favicon32.a19b4f5b.png">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <script type="text/javascript" src="../public/app.js"></script>
    <link rel="stylesheet" href="../public/app.css">
  </head>
  <body>
    <div id="page-wrapper">
      <!-- Header -->
      <header>
        <div class="container">
          <div class="row">
            <h1><?php echo($title) ?></h1>
            <h2><?php echo($subtitle) ?></h2>
          </div>
        </div>  <!-- Closing Header container -->
      </header>
      <!-- Main -->
      <main>
        <div class="container">
          <!-- SECTION - Select and sort -->
          <section id="filters">
            <div class="row row-md">
              <div class="col-12 col-lg-6">
                <p>Select the music genre:</p>
                <select id="select-genre">
                  <option value="all">All</option>
                </select>
              </div>
              <div class="col-12 col-lg-6">
                <p>Sort playlist by release year:</p>
                <select id="sort-year">
                  <option value="">Please select</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </div>
          </section>
          <!-- SECTION - Music discs cards -->
          <section id="music-discs">
            <div class="row">
              <div id="cards-container">
                <?php
                  foreach ($discs_list as $disc) { ?>
                    <div class="music-disc">
                      <img class="disc-poster" src="<?php echo($disc['poster']) ?>" alt="<?php echo($disc['title']) ?>">
                      <h3><?php echo($disc['title']) ?></h3>
                      <h4><?php echo($disc['author']) ?></h4>
                      <small><?php echo($disc['year']) ?></small>
                    </div>
                  <?php
                }
                ?>
              </div>
            </div>
          </section>
        </div>  <!-- Closing Main container -->
      </main>
      <!-- Footer -->
      <footer>
        <div class="container">
          <div class="row">
            <small>
              Powered by:
              <span><?php echo($credits) ?></span>
            </small>
          </div>
        </div>  <!-- Closing Footer container -->
      </footer>
    </div>  <!-- Closing page-wrapper -->

    <!--........................ Template Handlebars ........................-->

    <!-- Cards Template -->
    <script id="cards-template" type="text/x-handlebars-template">
      <div class="music-disc">
        <img class="disc-poster" src="{{poster}}" alt="{{title}}">
        <h3>{{title}}</h3>
        <h3>{{author}}</h4>
        <small>{{year}}</small>
      </div>
    </script>

    <!-- Select-Options Template -->
    <script id="options-template" type="text/x-handlebars-template">
      <option value="{{genre}}">{{genre}}</option>
    </script>
  </body>
</html>
