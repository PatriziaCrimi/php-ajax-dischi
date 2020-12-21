<?php

/* ASSIGNMENT
  1. Stampate i dischi in pagina utilizzando solo il php,includendo il file con l'array di dati e utilizzando il ciclo foreach.
  2. Stampate i dischi in pagina facendo una chiamata ajax al file php con i dati, utilizzando jQuery e Handlebars per appendere le card.
  BONUS: create una select con i generi e applicate un filtro alle card, facendo un'altra chiamata ajax.
  Ciò significa che il filtro per genere deve essere applicato lato back-end, ossia il php restituisce solo i dischi del genere selezionato.
*/

$discs_list = [
    [
        'poster' => 'https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg',
        'title' => 'New Jersey',
        'author' => 'Bon Jovi',
        'genre' => 'Rock',
        'year' => '1988'
    ],
    [
        'poster' => 'https://images-na.ssl-images-amazon.com/images/I/51NrqJ85VXL._AC_SX425_.jpg',
        'title' => 'Live at Wembley 86',
        'author' => 'Queen',
        'genre' => 'Pop',
        'year' => '1992'
    ],
    [
        'poster' => 'https://images-na.ssl-images-amazon.com/images/I/41JD3CW65HL.jpg',
        'title' => 'Ten\'s Summoner\'s Tales',
        'author' => 'Sting',
        'genre' => 'Pop',
        'year' => '1993'
    ],
    [
        'poster' => 'https://cdn2.jazztimes.com/2018/05/SteveGadd-800x723.jpg',
        'title' => 'Steve Gadd Band',
        'author' => 'Steve Gadd Band',
        'genre' => 'Jazz',
        'year' => '2018'
    ],
    [
        'poster' => 'https://images-na.ssl-images-amazon.com/images/I/810nSIQOLiL._SY355_.jpg',
        'title' => 'Brave new World',
        'author' => 'Iron Maiden',
        'genre' => 'Metal',
        'year' => '2000'
    ],
    [
        'poster' => 'https://upload.wikimedia.org/wikipedia/en/9/97/Eric_Clapton_OMCOMR.jpg',
        'title' => 'One more car, one more raider',
        'author' => 'Eric Clapton',
        'genre' => 'Rock',
        'year' => '2002'
    ],
    [
        'poster' => 'https://images-na.ssl-images-amazon.com/images/I/51rggtPgmRL.jpg',
        'title' => 'Made in Japan',
        'author' => 'Deep Purple',
        'genre' => 'Rock',
        'year' => '1972'
    ],
    [
        'poster' => 'https://images-na.ssl-images-amazon.com/images/I/81r3FVfNG3L._SY355_.jpg',
        'title' => 'And Justice for All',
        'author' => 'Metallica',
        'genre' => 'Metal',
        'year' => '1988'
    ],
    [
        'poster' => 'https://img.discogs.com/KOBsqQwKiNKH-q927oHMyVdDzSo=/fit-in/596x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6406665-1418464475-6120.jpeg.jpg',
        'title' => 'Hard Wired',
        'author' => 'Dave Weckl',
        'genre' => 'Jazz',
        'year' => '1994'
    ],
    [
        'poster' => 'https://m.media-amazon.com/images/I/71K9CbNZPsL._SS500_.jpg',
        'title' => 'Bad',
        'author' => 'Michael Jackson',
        'genre' => 'Pop',
        'year' => '1987'
    ]
];

// ***** The following code is run for both the vers-php (index.php) & the vers-ajax (index.html) *****


// ---------------------------- FILTER BY GENRE ----------------------------

// Verifying that the GET parameter exists & that the defined parameter is 'genre'
if(!empty($_GET) && !empty($_GET['genre'])) {
  // Storing the GET parameter 'genre' in a variable
  $genre = $_GET['genre'];
  if($genre === 'all') {
    // If the selected genre is "all", then all the discs must be shown
    $filtered_discs_list = $discs_list;
  } else {
    // Creating an empty array to be filled with filtered discs
    $filtered_discs_list = [];
    // Scanning the array of discs
    foreach ($discs_list as $disc) {
      // Checking if the current disc genre corresponds to the selected genre
      if($disc['genre'] === $genre) {
        // Storing the current disc in an array
        $filtered_discs_list[] = $disc;
      }
    }
  }
} else {
  // If there are no parameters in the query string OR 'genre' is empty
  $filtered_discs_list = $discs_list;
};


// ---------------------------- SORT PER YEAR ----------------------------

// Storing the GET parameter 'sort' in a variable
$sort = $_GET['sort'];
// If "ascending" is selected, it is sort by ascending order
if($sort === 'ascending') {
  usort($discs_list, function($disc1, $disc2) {
      return $disc1['year'] <=> $disc2['year'];
  });
// If "descending" is selected, it is sort by descending order
} else if ($sort === 'descending') {
  usort($discs_list, function($disc1, $disc2) {
      return $disc2['year'] <=> $disc1['year'];
  });
};

// ---------------------------- Verify AJAX request ----------------------------

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' ) {

  // ***** The following code must be run only for the vers-ajax (index.html) *****

  //request is ajax
  header('Content-Type: application/json');
  echo json_encode($filtered_discs_list);
};

?>
