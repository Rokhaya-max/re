<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ShopMe - Boutique en ligne</title>
  <style>
    /* Reset et styles généraux */
    * { margin:0; padding:0; box-sizing:border-box; font-family: Arial, sans-serif;}
    body {background-color: #f4f4f4; color:#333;}
    header {background-color:#232f3e; color:white; padding:20px 40px; display:flex; justify-content:space-between; align-items:center;}
    header h1 {font-size:28px;}
    nav a {color:white; margin-left:20px; text-decoration:none; font-weight:bold;}
    nav a:hover {text-decoration:underline;}

    .hero {background-color:#131921; color:white; padding:60px 20px; text-align:center;}
    .hero h2 {font-size:36px; margin-bottom:20px;}
    .hero p {font-size:18px; margin-bottom:30px;}
    .hero button {padding:15px 30px; font-size:16px; background-color:#ffa41c; border:none; cursor:pointer; font-weight:bold; border-radius:5px;}
    .hero button:hover {background-color:#ff8c00;}

    .products {display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:20px; padding:40px;}
    .product {background:white; padding:20px; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); display:flex; flex-direction:column; align-items:center; text-align:center;}
    .product img {width:150px; height:150px; object-fit:contain; margin-bottom:15px;}
    .product h3 {margin-bottom:10px; font-size:18px;}
    .product p {margin-bottom:15px; font-size:16px; color:#555;}
    .product a {text-decoration:none; background-color:#ffa41c; color:white; padding:10px 20px; border-radius:5px; font-weight:bold;}
    .product a:hover {background-color:#ff8c00;}

    footer {background-color:#232f3e; color:white; padding:20px 40px; text-align:center;}

    /* Bouton admin */
    #adminBtn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color:#333;
      color:white;
      padding:10px 15px;
      border:none;
      border-radius:5px;
      cursor:pointer;
      display:none; /* caché par défaut */
      z-index:999;
    }
  </style>
</head>
<body>
  <header>
    <h1>ShopMe</h1>
    <nav>
      <a href="#home">Accueil</a>
      <a href="#products">Produits</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero" id="home">
    <h2>Découvrez les meilleurs produits des plus grandes entreprises</h2>
    <p>Amazon, Alibaba, et bien plus – tous au même endroit !</p>
    <button onclick="window.location.href='#products'">Voir les produits</button>
  </section>

  <section class="products" id="products">
    <!-- Exemple produit -->
    <div class="product">
      <img src="https://via.placeholder.com/150" alt="Produit 1">
      <h3>Produit Amazon 1</h3>
      <p>Description courte du produit</p>
      <a href="TON-LIEN-AFFILIE-AMAZON" target="_blank">Voir sur Amazon</a>
    </div>
    <div class="product">
      <img src="https://via.placeholder.com/150" alt="Produit 2">
      <h3>Produit Alibaba 1</h3>
      <p>Description courte du produit</p>
      <a href="TON-LIEN-AFFILIE-ALIBABA" target="_blank">Voir sur Alibaba</a>
    </div>
  </section>

  <footer id="contact">
    <p>© 2025 ShopMe - Tous droits réservés | Contactez-nous : email@shopme.com</p>
  </footer>

  <!-- Bouton Admin -->
  <button id="adminBtn" onclick="alert('Admin: Ici vous pouvez gérer vos produits et liens affiliés !')">Admin</button>

  <script>
    // Vérifier si c'est toi (administrateur) pour montrer le bouton
    // Remplace "monEmail@exemple.com" par ton identifiant unique ou mot de passe simple
    const isAdmin = prompt("Entrez le mot de passe admin :") === "MonMotDePasseAdmin";
    if(isAdmin) {
      document.getElementById("adminBtn").style.display = "block";
    }
  </script>
</body>
</html>
