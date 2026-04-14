<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cours Programmation Web - ESP Dakar</title>
  <style>
    body {
      background: #111;
      color: #ddd;
      font-family: monospace;
      font-size: 14px;
      margin: 0;
      padding: 0;
    }

    .wrap {
      max-width: 700px;
      margin: 0 auto;
      padding: 20px;
    }

    /* HEADER */
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid #333;
      margin-bottom: 20px;
    }
    .header h1 { color: #fff; font-size: 18px; }
    .header p  { color: #666; font-size: 12px; }
    .header .auteur { color: #4ade80; }

    /* NAVIGATION */
    nav {
      display: flex;
      border-bottom: 1px solid #333;
      margin-bottom: 20px;
    }
    nav button {
      flex: 1;
      padding: 10px;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      color: #666;
      font-family: monospace;
      font-size: 13px;
      cursor: pointer;
    }
    nav button:hover { color: #fff; background: #1a1a1a; }
    nav button.actif { color: #4ade80; border-bottom: 2px solid #4ade80; }

    /* PAGES */
    .page { display: none; }
    .page.actif { display: block; }

    /* TITRES */
    h2 { color: #4ade80; font-size: 16px; border-bottom: 1px solid #333; padding-bottom: 6px; margin-bottom: 16px; }
    h3 { color: #fff; font-size: 14px; margin-top: 20px; margin-bottom: 8px; }

    /* TEXTE */
    p { color: #aaa; font-size: 13px; margin-bottom: 10px; }

    /* CARTE INFO */
    .carte {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 14px;
      margin-bottom: 16px;
    }
    .carte .titre { color: #fff; margin-bottom: 6px; }
    .carte p { margin: 0; }

    /* ASTUCE */
    .astuce {
      background: #0d1a0d;
      border-left: 3px solid #4ade80;
      padding: 10px 14px;
      margin: 12px 0;
      color: #888;
      font-size: 13px;
    }
    .astuce b { color: #4ade80; display: block; margin-bottom: 4px; }

    /* BLOC CODE */
    .code {
      background: #0a0a0a;
      border: 1px solid #2a2a2a;
      border-left: 3px solid #4ade80;
      padding: 12px 14px;
      margin: 12px 0;
      font-size: 13px;
      line-height: 1.9;
      color: #ccc;
      overflow-x: auto;
      white-space: pre;
    }
    .code .tag  { color: #f97316; }
    .code .attr { color: #60a5fa; }
    .code .com  { color: #555; font-style: italic; }
    .code .kw   { color: #c084fc; }
    .code .str  { color: #4ade80; }
    .code .fn   { color: #facc15; }

    /* TABLEAU */
    table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px; }
    th { background: #1a1a1a; color: #4ade80; padding: 8px 10px; text-align: left; border-bottom: 1px solid #333; }
    td { padding: 7px 10px; border-bottom: 1px solid #1a1a1a; color: #aaa; }
    td:first-child { color: #f97316; }

    /* DEMO */
    .demo {
      background: #161616;
      border: 1px solid #2a2a2a;
      border-radius: 6px;
      padding: 16px;
      margin: 12px 0;
    }
    .demo label { color: #888; font-size: 12px; display: block; margin-bottom: 6px; }
    .demo select,
    .demo input {
      width: 100%;
      background: #0a0a0a;
      border: 1px solid #333;
      border-radius: 4px;
      color: #ddd;
      font-family: monospace;
      font-size: 13px;
      padding: 7px 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
    .demo button {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 4px;
      color: #4ade80;
      font-family: monospace;
      font-size: 13px;
      padding: 8px 16px;
      cursor: pointer;
    }
    .demo button:hover { background: #222; }
    .resultat {
      margin-top: 12px;
      padding: 10px;
      background: #0a0a0a;
      border: 1px solid #222;
      border-radius: 4px;
      color: #4ade80;
      font-size: 13px;
      min-height: 32px;
    }

    /* QUIZ */
    .question {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .question p { color: #fff; margin-bottom: 10px; }
    .options { display: flex; flex-direction: column; gap: 6px; }
    .options button {
      background: #111;
      border: 1px solid #2a2a2a;
      border-radius: 4px;
      color: #bbb;
      font-family: monospace;
      font-size: 13px;
      padding: 9px 12px;
      text-align: left;
      cursor: pointer;
    }
    .options button:hover:not(:disabled) { background: #1e1e1e; color: #fff; }
    .options button.bon  { border-color: #4ade80; background: #0d1a0d; color: #4ade80; }
    .options button.faux { border-color: #ef4444; background: #1a0d0d; color: #ef4444; }
    .options button:disabled { cursor: default; opacity: 0.7; }
    .feedback { margin-top: 8px; font-size: 12px; font-style: italic; min-height: 16px; }

    /* SCORE */
    .score {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 10px 14px;
      margin-bottom: 16px;
      color: #aaa;
      font-size: 13px;
    }
    .score span { color: #4ade80; font-size: 16px; }

    /* FOOTER */
    footer {
      text-align: center;
      padding: 20px;
      color: #333;
      font-size: 12px;
      border-top: 1px solid #1a1a1a;
      margin-top: 40px;
    }
  </style>
</head>
<body>

<div class="wrap">

  <!-- HEADER -->
  <div class="header">
    <h1>Programmation Web — ESP Dakar</h1>
    <p>Université Cheikh Anta Diop · Département Génie Informatique · Licence</p>
    <p class="auteur">Dr. Mouhamed DIOP — mouhamed.diop@esp.sn</p>
  </div>

  <!-- NAVIGATION -->
  <nav>
    <button id="btn-html" class="actif">📄 HTML</button>
    <button id="btn-css">🎨 CSS</button>
    <button id="btn-js">⚙️ JavaScript</button>
    <button id="btn-quiz">🧠 Quiz</button>
  </nav>

  <!-- PAGE HTML -->
  <div class="page actif" id="page-html">
    <h2>Survol du langage HTML</h2>

    <div class="carte">
      <div class="titre">C'est quoi le HTML ?</div>
      <p>HyperText Markup Language — un langage de <strong>description</strong>, pas de programmation. Il crée des pages web lisibles dans un navigateur.</p>
    </div>

    <div class="astuce"><b>HTML vs CSS</b>HTML décrit la structure. CSS gère la présentation. Le W3C recommande de toujours séparer les deux.</div>

    <h3>Les balises</h3>
    <p>Une balise est délimitée par &lt; et &gt;. Elle a une ouvrante et une fermante.</p>
    <div class="code"><span class="tag">&lt;p&gt;</span> Mon chat est fâché <span class="tag">&lt;/p&gt;</span>   <span class="com">-- balise normale</span>
<span class="tag">&lt;br</span> <span class="attr">/</span><span class="tag">&gt;</span>                      <span class="com">-- balise orpheline (pas de fermeture)</span></div>

    <h3>Structure de base</h3>
    <div class="code"><span class="tag">&lt;!DOCTYPE</span> html<span class="tag">&gt;</span>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;title&gt;</span>Titre de la page<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    Ce qui s'affiche dans le navigateur
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></div>

    <h3>Les titres h1 à h6</h3>
    <table>
      <tr><th>Balise</th><th>Usage</th></tr>
      <tr><td>&lt;h1&gt;</td><td>Titre principal de la page</td></tr>
      <tr><td>&lt;h2&gt;</td><td>Titre d'un paragraphe</td></tr>
      <tr><td>&lt;h3&gt;</td><td>Sous-titre d'un paragraphe</td></tr>
      <tr><td>&lt;h4&gt; à &lt;h6&gt;</td><td>Peu utilisés</td></tr>
    </table>

    <h3>Mise en forme du texte</h3>
    <table>
      <tr><th>Balise</th><th>Effet</th></tr>
      <tr><td>&lt;b&gt;</td><td>Gras</td></tr>
      <tr><td>&lt;i&gt;</td><td>Italique</td></tr>
      <tr><td>&lt;u&gt;</td><td>Souligné</td></tr>
      <tr><td>&lt;sup&gt;</td><td>Exposant</td></tr>
      <tr><td>&lt;sub&gt;</td><td>Indice</td></tr>
    </table>

    <h3>Les liens</h3>
    <div class="code"><span class="com">-- lien vers une autre page --</span>
<span class="tag">&lt;a</span> <span class="attr">href=</span><span class="str">"destination.html"</span><span class="tag">&gt;</span>Texte du lien<span class="tag">&lt;/a&gt;</span>

<span class="com">-- lien externe --</span>
<span class="tag">&lt;a</span> <span class="attr">href=</span><span class="str">"http://www.google.sn"</span> <span class="attr">target=</span><span class="str">"_blank"</span><span class="tag">&gt;</span>Google<span class="tag">&lt;/a&gt;</span>

<span class="com">-- lien email --</span>
<span class="tag">&lt;a</span> <span class="attr">href=</span><span class="str">"mailto:contact@esp.sn"</span><span class="tag">&gt;</span>Ecrivez-moi<span class="tag">&lt;/a&gt;</span></div>

    <h3>Les listes</h3>
    <div class="code"><span class="com">-- liste non ordonnée --</span>
<span class="tag">&lt;ul&gt;</span>
  <span class="tag">&lt;li&gt;</span>Premier élément<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>Deuxième élément<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span>

<span class="com">-- liste ordonnée --</span>
<span class="tag">&lt;ol&gt;</span>
  <span class="tag">&lt;li&gt;</span>Premier item<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>Deuxième item<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ol&gt;</span></div>

    <h3>Les images</h3>
    <div class="code"><span class="tag">&lt;img</span> <span class="attr">src=</span><span class="str">"image.jpg"</span> <span class="attr">alt=</span><span class="str">"description"</span> <span class="attr">width=</span><span class="str">"200"</span> <span class="attr">height=</span><span class="str">"150"</span> <span class="tag">/&gt;</span></div>

    <h3>Les tableaux</h3>
    <div class="code"><span class="tag">&lt;table</span> <span class="attr">border=</span><span class="str">"1"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;tr&gt;</span>
    <span class="tag">&lt;th&gt;</span>Nom<span class="tag">&lt;/th&gt;</span>    <span class="tag">&lt;th&gt;</span>Prénom<span class="tag">&lt;/th&gt;</span>
  <span class="tag">&lt;/tr&gt;</span>
  <span class="tag">&lt;tr&gt;</span>
    <span class="tag">&lt;td&gt;</span>Diop<span class="tag">&lt;/td&gt;</span>   <span class="tag">&lt;td&gt;</span>Assane<span class="tag">&lt;/td&gt;</span>
  <span class="tag">&lt;/tr&gt;</span>
<span class="tag">&lt;/table&gt;</span></div>
  </div>

  <!-- PAGE CSS -->
  <div class="page" id="page-css">
    <h2>Survol du langage CSS</h2>

    <div class="carte">
      <div class="titre">Rôle du CSS</div>
      <p>CSS (Cascading Style Sheets) gère la <strong>présentation</strong>. Un même HTML peut avoir plusieurs apparences avec différentes feuilles de style.</p>
    </div>

    <h3>Où écrire le CSS ?</h3>
    <table>
      <tr><th>Méthode</th><th>Exemple</th></tr>
      <tr><td>Balise &lt;style&gt;</td><td>&lt;style&gt; ... &lt;/style&gt;</td></tr>
      <tr><td>Fichier externe</td><td>&lt;link rel="stylesheet" href="style.css"&gt;</td></tr>
      <tr><td>Attribut inline</td><td>&lt;p style="color:red;"&gt;</td></tr>
    </table>

    <h3>Syntaxe d'une règle CSS</h3>
    <div class="code"><span class="fn">h1</span> { <span class="attr">color</span>: <span class="str">blue</span>; <span class="attr">text-align</span>: <span class="str">center</span>; }</div>

    <h3>Les sélecteurs</h3>
    <div class="code"><span class="com">-- sélecteur de balise --</span>
<span class="fn">p</span> { <span class="attr">color</span>: <span class="str">gray</span>; }

<span class="com">-- sélecteur de classe (point) --</span>
<span class="fn">.rouge</span> { <span class="attr">color</span>: <span class="str">red</span>; }
<span class="tag">&lt;p</span> <span class="attr">class=</span><span class="str">"rouge"</span><span class="tag">&gt;</span>texte rouge<span class="tag">&lt;/p&gt;</span>

<span class="com">-- sélecteur d'identifiant (dièse) --</span>
<span class="fn">#menu</span> { <span class="attr">background</span>: <span class="str">yellow</span>; }
<span class="tag">&lt;div</span> <span class="attr">id=</span><span class="str">"menu"</span><span class="tag">&gt;</span>contenu<span class="tag">&lt;/div&gt;</span></div>

    <h3>Pseudo-classes</h3>
    <div class="code"><span class="fn">a:hover</span> { <span class="attr">color</span>: <span class="str">red</span>; <span class="attr">text-decoration</span>: <span class="str">none</span>; }</div>

    <h3>Regroupement et héritage</h3>
    <div class="code"><span class="com">-- même style pour plusieurs sélecteurs --</span>
<span class="fn">h1, h2, p</span> { <span class="attr">margin-left</span>: <span class="str">0</span>; }

<span class="com">-- p à l'intérieur d'un div --</span>
<span class="fn">div p</span> { <span class="attr">color</span>: <span class="str">gray</span>; }

<span class="com">-- propriété raccourcie font --</span>
<span class="fn">p</span> { <span class="attr">font</span>: <span class="str">bold 14px Arial</span>; }</div>

    <div class="astuce"><b>Propriétés raccourcies</b>font · border · background — elles regroupent plusieurs valeurs en une seule ligne.</div>

    <h3>Démo — Style en direct</h3>
    <div class="demo">
      <label>Couleur du texte :</label>
      <select id="css-couleur">
        <option value="#4ade80">Vert</option>
        <option value="#f97316">Orange</option>
        <option value="#60a5fa">Bleu</option>
        <option value="#c084fc">Violet</option>
      </select>
      <label>Taille du texte :</label>
      <select id="css-taille">
        <option value="13px">Petit (13px)</option>
        <option value="17px">Moyen (17px)</option>
        <option value="22px">Grand (22px)</option>
      </select>
      <button id="btn-appliquer">Appliquer</button>
      <div class="resultat" id="css-resultat">Le CSS change l'apparence sans toucher au contenu HTML.</div>
    </div>
  </div>

  <!-- PAGE JS -->
  <div class="page" id="page-js">
    <h2>Le langage JavaScript</h2>

    <div class="carte">
      <div class="titre">C'est quoi JavaScript ?</div>
      <p>JS est un langage de script incorporé dans le HTML. Il rend le contenu <strong>interactif</strong> : validation de formulaires, animations, calculs, etc.</p>
    </div>

    <h3>Où placer le script ?</h3>
    <div class="code"><span class="tag">&lt;script</span> <span class="attr">type=</span><span class="str">"text/javascript"</span><span class="tag">&gt;</span>
  <span class="com">// code ici</span>
<span class="tag">&lt;/script&gt;</span>

<span class="com">-- ou fichier externe --</span>
<span class="tag">&lt;script</span> <span class="attr">src=</span><span class="str">"script.js"</span><span class="tag">&gt;&lt;/script&gt;</span></div>

    <h3>Variables</h3>
    <div class="code"><span class="kw">var</span> nom = <span class="str">'Diop'</span>;          <span class="com">// chaîne de caractères</span>
<span class="kw">var</span> age = <span class="str">20</span>;             <span class="com">// nombre</span>
<span class="kw">var</span> actif = <span class="kw">true</span>;         <span class="com">// booléen</span>
<span class="kw">var</span> x = <span class="str">5</span>, y = <span class="str">10</span>;       <span class="com">// plusieurs variables</span></div>

    <h3>Les boites de dialogue</h3>
    <table>
      <tr><th>Fonction</th><th>Rôle</th></tr>
      <tr><td>alert()</td><td>Affiche un message</td></tr>
      <tr><td>prompt()</td><td>Demande une saisie — retourne la valeur</td></tr>
      <tr><td>confirm()</td><td>Demande OK ou Annuler — retourne true/false</td></tr>
    </table>

    <h3>Opérateurs</h3>
    <table>
      <tr><th>Opérateur</th><th>Description</th><th>Exemple</th></tr>
      <tr><td>+</td><td>Addition / Concaténation</td><td>2+3 ou 'bon'+'jour'</td></tr>
      <tr><td>-</td><td>Soustraction</td><td>5 - 3</td></tr>
      <tr><td>*</td><td>Multiplication</td><td>2 * 3</td></tr>
      <tr><td>/</td><td>Division</td><td>10 / 2</td></tr>
      <tr><td>%</td><td>Modulo (reste)</td><td>13 % 5 = 3</td></tr>
      <tr><td>++</td><td>Incrémentation</td><td>i++ = i + 1</td></tr>
    </table>

    <h3>Conditions</h3>
    <div class="code"><span class="kw">if</span> (age &gt;= 18) {
  alert(<span class="str">"Majeur"</span>);
} <span class="kw">else</span> {
  alert(<span class="str">"Mineur"</span>);
}</div>

    <h3>Boucles</h3>
    <div class="code"><span class="com">-- for --</span>
<span class="kw">for</span> (<span class="kw">var</span> i = 0; i &lt; 5; i++) {
  document.<span class="fn">write</span>(i);
}

<span class="com">-- while --</span>
<span class="kw">while</span> (i &lt; 5) {
  document.<span class="fn">write</span>(i);
  i++;
}</div>

    <h3>Fonctions</h3>
    <div class="code"><span class="kw">function</span> <span class="fn">volumeCylindre</span>(r, h) {
  <span class="kw">var</span> pi = 3.14159;
  <span class="kw">return</span> pi * r * r * h;
}

alert(<span class="fn">volumeCylindre</span>(1, 2));</div>

    <h3>Évènements</h3>
    <table>
      <tr><th>Évènement</th><th>Gestionnaire</th><th>Déclencheur</th></tr>
      <tr><td>Clic</td><td>onClick</td><td>Clic souris</td></tr>
      <tr><td>Chargement</td><td>onLoad</td><td>Chargement page</td></tr>
      <tr><td>Survol</td><td>onMouseOver</td><td>Souris sur l'élément</td></tr>
      <tr><td>Sortie</td><td>onMouseOut</td><td>Souris qui sort</td></tr>
      <tr><td>Changement</td><td>onChange</td><td>Valeur modifiée</td></tr>
      <tr><td>Soumission</td><td>onSubmit</td><td>Envoi formulaire</td></tr>
    </table>

    <h3>Accès au DOM</h3>
    <div class="code"><span class="com">-- accéder à un élément par son id --</span>
document.<span class="fn">getElementById</span>(<span class="str">"monId"</span>)

<span class="com">-- modifier son contenu --</span>
document.<span class="fn">getElementById</span>(<span class="str">"monId"</span>).innerHTML = <span class="str">"Nouveau texte"</span>;

<span class="com">-- écrire dans la page --</span>
document.<span class="fn">write</span>(<span class="str">"Bonjour !"</span>);</div>

    <h3>Démo — Calcul du double</h3>
    <div class="demo">
      <label>Entrez un nombre :</label>
      <input type="number" id="js-nombre" placeholder="ex: 23">
      <button id="btn-double">Calculer le double</button>
      <div class="resultat" id="js-resultat">Le résultat apparaîtra ici.</div>
    </div>
  </div>

  <!-- PAGE QUIZ -->
  <div class="page" id="page-quiz">
    <h2>Quiz — Teste tes connaissances</h2>
    <div class="score">Score : <span id="score-val">0</span> / 8</div>

    <div class="question" id="q1">
      <p>1. Le HTML est un langage de programmation ?</p>
      <div class="options">
        <button data-q="q1" data-ok="non" data-msg="Faux — Le HTML est un langage de DESCRIPTION, pas de programmation.">Vrai</button>
        <button data-q="q1" data-ok="oui" data-msg="Correct ✓ — Le HTML décrit la structure, il ne programme pas.">Faux</button>
      </div>
      <div class="feedback" id="fb-q1"></div>
    </div>

    <div class="question" id="q2">
      <p>2. Quelle balise crée un saut de ligne ?</p>
      <div class="options">
        <button data-q="q2" data-ok="non" data-msg="Non — &lt;p&gt; crée un paragraphe.">&lt;p&gt;</button>
        <button data-q="q2" data-ok="oui" data-msg="Correct ✓ — &lt;br /&gt; insère un saut de ligne.">&lt;br /&gt;</button>
        <button data-q="q2" data-ok="non" data-msg="Non — &lt;h1&gt; est un titre de niveau 1.">&lt;h1&gt;</button>
      </div>
      <div class="feedback" id="fb-q2"></div>
    </div>

    <div class="question" id="q3">
      <p>3. En CSS, un sélecteur qui commence par un point ( . ) est...</p>
      <div class="options">
        <button data-q="q3" data-ok="non" data-msg="Non — Un identifiant commence par #.">Un identifiant</button>
        <button data-q="q3" data-ok="oui" data-msg="Correct ✓ — .maClasse est un sélecteur de classe.">Une classe</button>
        <button data-q="q3" data-ok="non" data-msg="Non — Une pseudo-classe utilise : comme a:hover.">Une pseudo-classe</button>
      </div>
      <div class="feedback" id="fb-q3"></div>
    </div>

    <div class="question" id="q4">
      <p>4. Que retourne confirm() quand on clique sur OK ?</p>
      <div class="options">
        <button data-q="q4" data-ok="non" data-msg="Non — null vient de prompt() annulé.">null</button>
        <button data-q="q4" data-ok="non" data-msg="Non — confirm() ne retourne pas de texte.">Le texte saisi</button>
        <button data-q="q4" data-ok="oui" data-msg="Correct ✓ — confirm() retourne true si OK, false si Annuler.">true</button>
      </div>
      <div class="feedback" id="fb-q4"></div>
    </div>

    <div class="question" id="q5">
      <p>5. Quel attribut ouvre un lien dans un nouvel onglet ?</p>
      <div class="options">
        <button data-q="q5" data-ok="non" data-msg="Non — href contient l'adresse de destination.">href</button>
        <button data-q="q5" data-ok="non" data-msg="Non — title affiche une bulle d'aide.">title</button>
        <button data-q="q5" data-ok="oui" data-msg='Correct ✓ — target="_blank" ouvre dans un nouvel onglet.'>target="_blank"</button>
      </div>
      <div class="feedback" id="fb-q5"></div>
    </div>

    <div class="question" id="q6">
      <p>6. Que fait i++ en JavaScript ?</p>
      <div class="options">
        <button data-q="q6" data-ok="oui" data-msg="Correct ✓ — i++ ajoute 1 à i. C'est une incrémentation.">Ajoute 1 à i</button>
        <button data-q="q6" data-ok="non" data-msg="Non — Pour soustraire 1, on utilise i--.">Soustrait 1 à i</button>
        <button data-q="q6" data-ok="non" data-msg="Non — Pour multiplier, on écrit i = i * 2.">Multiplie i par 2</button>
      </div>
      <div class="feedback" id="fb-q6"></div>
    </div>

    <div class="question" id="q7">
      <p>7. Quel sélecteur CSS cible &lt;div id="menu"&gt; ?</p>
      <div class="options">
        <button data-q="q7" data-ok="non" data-msg="Non — .menu désigne une classe.">.menu</button>
        <button data-q="q7" data-ok="oui" data-msg='Correct ✓ — #menu cible l&apos;attribut id="menu".'>#menu</button>
        <button data-q="q7" data-ok="non" data-msg="Non — div menu désigne un menu dans un div.">div menu</button>
      </div>
      <div class="feedback" id="fb-q7"></div>
    </div>

    <div class="question" id="q8">
      <p>8. Quelle méthode JS accède à un élément par son id ?</p>
      <div class="options">
        <button data-q="q8" data-ok="non" data-msg="Non — getElementsByTagName() cherche par balise.">getElementsByTagName()</button>
        <button data-q="q8" data-ok="oui" data-msg="Correct ✓ — getElementById() est la méthode standard pour accéder par id.">getElementById()</button>
        <button data-q="q8" data-ok="non" data-msg="Non — getElementsByName() cherche par attribut name.">getElementsByName()</button>
      </div>
      <div class="feedback" id="fb-q8"></div>
    </div>

  </div>

  <footer>Université Cheikh Anta Diop · Ecole Supérieure Polytechnique · Dr. Mouhamed DIOP</footer>

</div><!-- fin .wrap -->

<script>
  // ✅ CORRECTION PRINCIPALE : tout le JS est dans DOMContentLoaded
  // Cela garantit que tous les éléments HTML sont chargés avant que
  // le script essaie de les trouver — indispensable sur GitHub Pages.
  document.addEventListener("DOMContentLoaded", function() {

    var score = 0;

    // --- Navigation ---
    document.getElementById("btn-html").addEventListener("click", function() { allerA("html"); });
    document.getElementById("btn-css").addEventListener("click",  function() { allerA("css");  });
    document.getElementById("btn-js").addEventListener("click",   function() { allerA("js");   });
    document.getElementById("btn-quiz").addEventListener("click", function() { allerA("quiz"); });

    function allerA(nom) {
      var pages = document.querySelectorAll(".page");
      for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove("actif");
      }
      var boutons = document.querySelectorAll("nav button");
      for (var i = 0; i < boutons.length; i++) {
        boutons[i].classList.remove("actif");
      }
      document.getElementById("page-" + nom).classList.add("actif");
      document.getElementById("btn-" + nom).classList.add("actif");
      window.scrollTo(0, 0);
    }

    // --- Démo CSS ---
    document.getElementById("btn-appliquer").addEventListener("click", function() {
      var couleur  = document.getElementById("css-couleur").value;
      var taille   = document.getElementById("css-taille").value;
      var resultat = document.getElementById("css-resultat");
      resultat.style.color    = couleur;
      resultat.style.fontSize = taille;
    });

    // --- Démo JS double ---
    document.getElementById("btn-double").addEventListener("click", function() {
      var nombre   = document.getElementById("js-nombre").value;
      var resultat = document.getElementById("js-resultat");
      if (nombre === "") {
        resultat.textContent = "Entrez un nombre d'abord.";
        resultat.style.color = "#ef4444";
      } else {
        resultat.textContent = "Le double de " + nombre + " est : " + (nombre * 2);
        resultat.style.color = "#4ade80";
      }
    });

    // --- Quiz ---
    var boutons_quiz = document.querySelectorAll(".options button");
    for (var i = 0; i < boutons_quiz.length; i++) {
      boutons_quiz[i].addEventListener("click", function() {
        var btn        = this;
        var idQuestion = btn.getAttribute("data-q");
        var correct    = btn.getAttribute("data-ok");
        var message    = btn.getAttribute("data-msg");

        var questionDiv = document.getElementById(idQuestion);
        if (questionDiv.querySelector(".bon") || questionDiv.querySelector(".faux")) {
          return;
        }

        var btnsQuestion = questionDiv.querySelectorAll("button");
        for (var j = 0; j < btnsQuestion.length; j++) {
          btnsQuestion[j].disabled = true;
        }

        if (correct === "oui") {
          btn.classList.add("bon");
          score++;
          document.getElementById("score-val").textContent = score;
        } else {
          btn.classList.add("faux");
        }

        var fb = document.getElementById("fb-" + idQuestion);
        fb.innerHTML   = message;
        fb.style.color = (correct === "oui") ? "#4ade80" : "#ef4444";
      });
    }

  }); // fin DOMContentLoaded
</script>

</body>
</html>
