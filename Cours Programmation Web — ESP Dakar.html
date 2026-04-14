<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cours Web — ESP Dakar</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: #0f0f0f;
      color: #ccc;
      font-family: monospace;
      font-size: 14px;
    }

    .wrap { max-width: 720px; margin: 0 auto; padding: 24px 16px; }

    .header {
      text-align: center;
      padding: 24px 0 20px;
      border-bottom: 1px solid #222;
      margin-bottom: 24px;
    }
    .header h1 { color: #fff; font-size: 20px; margin-bottom: 6px; }
    .header p  { color: #555; font-size: 12px; line-height: 1.8; }
    .vert { color: #4ade80; }

    nav {
      display: flex;
      gap: 4px;
      margin-bottom: 24px;
      background: #1a1a1a;
      border: 1px solid #222;
      border-radius: 8px;
      padding: 6px;
    }
    nav button {
      flex: 1;
      padding: 9px 4px;
      background: transparent;
      border: none;
      border-radius: 6px;
      color: #666;
      font-family: monospace;
      font-size: 13px;
      cursor: pointer;
    }
    nav button:hover { background: #252525; color: #ccc; }
    nav button.actif { background: #252525; color: #4ade80; }

    .page { display: none; }
    .page.actif { display: block; }

    h2 { color: #4ade80; font-size: 15px; border-bottom: 1px solid #222; padding-bottom: 8px; margin-bottom: 18px; }
    h3 { color: #fff; font-size: 14px; margin: 22px 0 10px; }
    p  { color: #999; font-size: 13px; line-height: 1.7; margin-bottom: 10px; }

    .carte {
      background: #1a1a1a;
      border: 1px solid #2a2a2a;
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 18px;
    }
    .carte strong { color: #fff; }
    .carte p { margin: 0; }

    .astuce {
      background: #0a1a0a;
      border-left: 3px solid #4ade80;
      padding: 10px 14px;
      margin: 14px 0;
      color: #777;
      font-size: 13px;
    }
    .astuce strong { color: #4ade80; display: block; margin-bottom: 4px; }

    .code {
      background: #080808;
      border: 1px solid #1e1e1e;
      border-left: 3px solid #4ade80;
      padding: 12px 14px;
      margin: 12px 0;
      font-size: 13px;
      line-height: 2;
      color: #bbb;
      overflow-x: auto;
      white-space: pre;
    }
    .tag  { color: #f97316; }
    .attr { color: #60a5fa; }
    .com  { color: #444; font-style: italic; }
    .kw   { color: #c084fc; }
    .str  { color: #4ade80; }
    .fn   { color: #facc15; }

    table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px; }
    th { background: #1a1a1a; color: #4ade80; padding: 8px 10px; text-align: left; border-bottom: 1px solid #2a2a2a; }
    td { padding: 7px 10px; border-bottom: 1px solid #1a1a1a; color: #999; }
    td:first-child { color: #f97316; font-weight: bold; }
    tr:last-child td { border-bottom: none; }

    .demo {
      background: #141414;
      border: 1px solid #2a2a2a;
      border-radius: 8px;
      padding: 16px;
      margin: 14px 0;
    }
    .demo label { color: #777; font-size: 12px; display: block; margin-bottom: 6px; }
    .demo select,
    .demo input[type="number"] {
      width: 100%;
      background: #0a0a0a;
      border: 1px solid #2a2a2a;
      border-radius: 5px;
      color: #ccc;
      font-family: monospace;
      font-size: 13px;
      padding: 8px 10px;
      margin-bottom: 10px;
    }
    .demo-btn {
      background: #1e1e1e;
      border: 1px solid #333;
      border-radius: 5px;
      color: #4ade80;
      font-family: monospace;
      font-size: 13px;
      padding: 9px 18px;
      cursor: pointer;
    }
    .demo-btn:hover { background: #252525; }
    .resultat {
      margin-top: 12px;
      padding: 10px 12px;
      background: #0a0a0a;
      border: 1px solid #1e1e1e;
      border-radius: 5px;
      color: #4ade80;
      font-size: 13px;
      min-height: 34px;
    }

    .question {
      background: #1a1a1a;
      border: 1px solid #2a2a2a;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .question > p { color: #fff; margin-bottom: 12px; }
    .options { display: flex; flex-direction: column; gap: 7px; }
    .options button {
      background: #111;
      border: 1px solid #2a2a2a;
      border-radius: 5px;
      color: #aaa;
      font-family: monospace;
      font-size: 13px;
      padding: 10px 12px;
      text-align: left;
      cursor: pointer;
    }
    .options button:hover:not([disabled]) { background: #1e1e1e; color: #fff; }
    .options button.bon  { border-color: #4ade80; background: #071a07; color: #4ade80; }
    .options button.faux { border-color: #ef4444; background: #1a0707; color: #ef4444; }
    .options button[disabled] { cursor: default; opacity: 0.75; }
    .feedback { margin-top: 10px; font-size: 12px; font-style: italic; min-height: 16px; color: #666; }

    .score-box {
      background: #1a1a1a;
      border: 1px solid #2a2a2a;
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 18px;
      color: #888;
      font-size: 13px;
    }
    .score-box .nb { color: #4ade80; font-size: 18px; font-weight: bold; }

    footer {
      text-align: center;
      margin-top: 48px;
      padding: 20px;
      border-top: 1px solid #1a1a1a;
      color: #333;
      font-size: 11px;
    }
  </style>
</head>
<body>
<div class="wrap">

  <div class="header">
    <h1>Programmation Web</h1>
    <p>Université Cheikh Anta Diop · École Supérieure Polytechnique<br>
    <span class="vert">Dr. Mouhamed DIOP</span> — mouhamed.diop@esp.sn</p>
  </div>

  <nav>
    <button id="btn-html" class="actif">📄 HTML</button>
    <button id="btn-css">🎨 CSS</button>
    <button id="btn-js">⚙️ JS</button>
    <button id="btn-quiz">🧠 Quiz</button>
  </nav>

  <!-- PAGE HTML -->
  <div class="page actif" id="page-html">
    <h2>Survol du langage HTML</h2>
    <div class="carte">
      <p><strong>HTML</strong> = HyperText Markup Language. C'est un langage de <strong>description</strong> (pas de programmation). Il structure le contenu d'une page web.</p>
    </div>
    <div class="astuce"><strong>HTML vs CSS</strong>HTML décrit la structure. CSS gère l'apparence. Le W3C recommande de toujours séparer les deux.</div>

    <h3>Balises</h3>
    <p>Une balise est entre &lt; et &gt;. Il y a une ouvrante et une fermante. Certaines sont orphelines.</p>
    <div class="code"><span class="tag">&lt;p&gt;</span>Mon chat est fâché<span class="tag">&lt;/p&gt;</span>    <span class="com">← balise normale</span>
<span class="tag">&lt;br /&gt;</span>                        <span class="com">← balise orpheline</span></div>

    <h3>Structure de base</h3>
    <div class="code"><span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;title&gt;</span>Titre de la page<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    Contenu visible dans le navigateur
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></div>

    <h3>Titres h1 à h6</h3>
    <table>
      <tr><th>Balise</th><th>Rôle</th></tr>
      <tr><td>&lt;h1&gt;</td><td>Titre principal</td></tr>
      <tr><td>&lt;h2&gt;</td><td>Titre de section</td></tr>
      <tr><td>&lt;h3&gt;</td><td>Sous-titre</td></tr>
      <tr><td>&lt;h4&gt; à &lt;h6&gt;</td><td>Rarement utilisés</td></tr>
    </table>

    <h3>Mise en forme</h3>
    <table>
      <tr><th>Balise</th><th>Effet</th></tr>
      <tr><td>&lt;b&gt;</td><td>Gras</td></tr>
      <tr><td>&lt;i&gt;</td><td>Italique</td></tr>
      <tr><td>&lt;u&gt;</td><td>Souligné</td></tr>
      <tr><td>&lt;sup&gt;</td><td>Exposant</td></tr>
      <tr><td>&lt;sub&gt;</td><td>Indice</td></tr>
    </table>

    <h3>Liens</h3>
    <div class="code"><span class="tag">&lt;a</span> <span class="attr">href=</span><span class="str">"page.html"</span><span class="tag">&gt;</span>Lien interne<span class="tag">&lt;/a&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href=</span><span class="str">"https://google.sn"</span> <span class="attr">target=</span><span class="str">"_blank"</span><span class="tag">&gt;</span>Lien externe<span class="tag">&lt;/a&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href=</span><span class="str">"mailto:contact@esp.sn"</span><span class="tag">&gt;</span>Email<span class="tag">&lt;/a&gt;</span></div>

    <h3>Listes</h3>
    <div class="code"><span class="tag">&lt;ul&gt;</span>  <span class="com">← liste non ordonnée</span>
  <span class="tag">&lt;li&gt;</span>Premier<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>Deuxième<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span>

<span class="tag">&lt;ol&gt;</span>  <span class="com">← liste ordonnée (numérotée)</span>
  <span class="tag">&lt;li&gt;</span>Premier<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>Deuxième<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ol&gt;</span></div>

    <h3>Images</h3>
    <div class="code"><span class="tag">&lt;img</span> <span class="attr">src=</span><span class="str">"photo.jpg"</span> <span class="attr">alt=</span><span class="str">"description"</span> <span class="attr">width=</span><span class="str">"200"</span> <span class="tag">/&gt;</span></div>

    <h3>Tableaux</h3>
    <div class="code"><span class="tag">&lt;table</span> <span class="attr">border=</span><span class="str">"1"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;tr&gt;</span>
    <span class="tag">&lt;th&gt;</span>Nom<span class="tag">&lt;/th&gt;</span>  <span class="tag">&lt;th&gt;</span>Prénom<span class="tag">&lt;/th&gt;</span>
  <span class="tag">&lt;/tr&gt;</span>
  <span class="tag">&lt;tr&gt;</span>
    <span class="tag">&lt;td&gt;</span>Diop<span class="tag">&lt;/td&gt;</span>  <span class="tag">&lt;td&gt;</span>Assane<span class="tag">&lt;/td&gt;</span>
  <span class="tag">&lt;/tr&gt;</span>
<span class="tag">&lt;/table&gt;</span></div>
  </div>

  <!-- PAGE CSS -->
  <div class="page" id="page-css">
    <h2>Survol du langage CSS</h2>
    <div class="carte">
      <p><strong>CSS</strong> = Cascading Style Sheets. Il gère la <strong>présentation</strong> : couleurs, polices, marges. Un même HTML peut avoir plusieurs apparences grâce au CSS.</p>
    </div>

    <h3>Où écrire le CSS ?</h3>
    <table>
      <tr><th>Méthode</th><th>Code</th></tr>
      <tr><td>Balise &lt;style&gt;</td><td>&lt;style&gt; p { color: red; } &lt;/style&gt;</td></tr>
      <tr><td>Fichier externe</td><td>&lt;link rel="stylesheet" href="style.css"&gt;</td></tr>
      <tr><td>Style inline</td><td>&lt;p style="color:red;"&gt;</td></tr>
    </table>

    <h3>Syntaxe d'une règle</h3>
    <div class="code"><span class="fn">sélecteur</span> { <span class="attr">propriété</span>: <span class="str">valeur</span>; }

<span class="com">exemple :</span>
<span class="fn">h1</span> { <span class="attr">color</span>: <span class="str">blue</span>; <span class="attr">text-align</span>: <span class="str">center</span>; }</div>

    <h3>Les sélecteurs</h3>
    <div class="code"><span class="fn">p</span> { <span class="attr">color</span>: <span class="str">gray</span>; }          <span class="com">← sélecteur de balise</span>
<span class="fn">.rouge</span> { <span class="attr">color</span>: <span class="str">red</span>; }      <span class="com">← sélecteur de classe ( . )</span>
<span class="fn">#menu</span> { <span class="attr">background</span>: <span class="str">yellow</span>; } <span class="com">← sélecteur d'id ( # )</span></div>

    <h3>Pseudo-classes &amp; regroupement</h3>
    <div class="code"><span class="fn">a:hover</span> { <span class="attr">color</span>: <span class="str">red</span>; }        <span class="com">← au survol</span>
<span class="fn">h1, h2, p</span> { <span class="attr">margin-left</span>: <span class="str">0</span>; }  <span class="com">← regroupement</span>
<span class="fn">div p</span> { <span class="attr">color</span>: <span class="str">gray</span>; }        <span class="com">← p dans un div</span></div>

    <div class="astuce"><strong>Propriétés raccourcies</strong>Exemples : font: bold 14px Arial; · border: 1px solid red; · elles combinent plusieurs valeurs en une ligne.</div>

    <h3>Démo — Style en direct</h3>
    <div class="demo">
      <label>Couleur du texte</label>
      <select id="css-couleur">
        <option value="#4ade80">Vert</option>
        <option value="#f97316">Orange</option>
        <option value="#60a5fa">Bleu</option>
        <option value="#c084fc">Violet</option>
        <option value="#facc15">Jaune</option>
      </select>
      <label>Taille du texte</label>
      <select id="css-taille">
        <option value="13px">Petit — 13px</option>
        <option value="17px">Moyen — 17px</option>
        <option value="22px">Grand — 22px</option>
        <option value="28px">Très grand — 28px</option>
      </select>
      <button class="demo-btn" id="btn-appliquer">▶ Appliquer</button>
      <div class="resultat" id="css-resultat">Le CSS change l'apparence sans toucher au HTML.</div>
    </div>
  </div>

  <!-- PAGE JS -->
  <div class="page" id="page-js">
    <h2>Le langage JavaScript</h2>
    <div class="carte">
      <p><strong>JavaScript</strong> est un langage de script qui rend une page <strong>interactive</strong> : validation de formulaires, animations, calculs côté navigateur, manipulation du DOM.</p>
    </div>

    <h3>Où placer le script ?</h3>
    <div class="code"><span class="tag">&lt;script&gt;</span>
  <span class="com">// code JavaScript ici</span>
<span class="tag">&lt;/script&gt;</span>

<span class="com">ou fichier externe :</span>
<span class="tag">&lt;script</span> <span class="attr">src=</span><span class="str">"script.js"</span><span class="tag">&gt;&lt;/script&gt;</span></div>

    <h3>Variables</h3>
    <div class="code"><span class="kw">var</span> nom   = <span class="str">"Diop"</span>;     <span class="com">← chaîne de caractères</span>
<span class="kw">var</span> age   = <span class="str">20</span>;        <span class="com">← nombre</span>
<span class="kw">var</span> actif = <span class="kw">true</span>;      <span class="com">← booléen</span>
<span class="kw">var</span> x = <span class="str">5</span>, y = <span class="str">10</span>;    <span class="com">← plusieurs variables</span></div>

    <h3>Boites de dialogue</h3>
    <table>
      <tr><th>Fonction</th><th>Rôle</th></tr>
      <tr><td>alert()</td><td>Affiche un message</td></tr>
      <tr><td>prompt()</td><td>Demande une saisie — retourne la valeur</td></tr>
      <tr><td>confirm()</td><td>Demande OK/Annuler — retourne true/false</td></tr>
    </table>

    <h3>Opérateurs</h3>
    <table>
      <tr><th>Opérateur</th><th>Rôle</th><th>Exemple</th></tr>
      <tr><td>+</td><td>Addition / Concaténation</td><td>2+3 · "bon"+"jour"</td></tr>
      <tr><td>-</td><td>Soustraction</td><td>5 - 3</td></tr>
      <tr><td>*</td><td>Multiplication</td><td>2 * 4</td></tr>
      <tr><td>/</td><td>Division</td><td>10 / 2</td></tr>
      <tr><td>%</td><td>Modulo (reste)</td><td>13 % 5 = 3</td></tr>
      <tr><td>++</td><td>Incrémentation</td><td>i++ → i+1</td></tr>
    </table>

    <h3>Conditions</h3>
    <div class="code"><span class="kw">if</span> (age >= 18) {
  <span class="fn">alert</span>(<span class="str">"Majeur"</span>);
} <span class="kw">else</span> {
  <span class="fn">alert</span>(<span class="str">"Mineur"</span>);
}</div>

    <h3>Boucles</h3>
    <div class="code"><span class="com">— boucle for —</span>
<span class="kw">for</span> (<span class="kw">var</span> i = 0; i &lt; 5; i++) {
  document.<span class="fn">write</span>(i);
}

<span class="com">— boucle while —</span>
<span class="kw">var</span> i = 0;
<span class="kw">while</span> (i &lt; 5) {
  document.<span class="fn">write</span>(i);
  i++;
}</div>

    <h3>Fonctions</h3>
    <div class="code"><span class="kw">function</span> <span class="fn">volumeCylindre</span>(r, h) {
  <span class="kw">var</span> pi = 3.14159;
  <span class="kw">return</span> pi * r * r * h;
}
<span class="fn">alert</span>(<span class="fn">volumeCylindre</span>(1, 2));</div>

    <h3>Évènements principaux</h3>
    <table>
      <tr><th>Gestionnaire</th><th>Déclencheur</th></tr>
      <tr><td>onClick</td><td>Clic sur un élément</td></tr>
      <tr><td>onLoad</td><td>Chargement de la page</td></tr>
      <tr><td>onMouseOver</td><td>Souris sur l'élément</td></tr>
      <tr><td>onChange</td><td>Valeur modifiée</td></tr>
      <tr><td>onSubmit</td><td>Envoi de formulaire</td></tr>
    </table>

    <h3>Accès au DOM</h3>
    <div class="code"><span class="com">← lire un élément par son id</span>
document.<span class="fn">getElementById</span>(<span class="str">"monId"</span>);

<span class="com">← modifier son contenu</span>
document.<span class="fn">getElementById</span>(<span class="str">"monId"</span>).innerHTML = <span class="str">"Nouveau !"</span>;

<span class="com">← modifier son style</span>
document.<span class="fn">getElementById</span>(<span class="str">"monId"</span>).style.color = <span class="str">"red"</span>;</div>

    <h3>Démo — Calculer le double</h3>
    <div class="demo">
      <label>Entrez un nombre</label>
      <input type="number" id="js-nombre" placeholder="ex: 23">
      <button class="demo-btn" id="btn-double">▶ Calculer le double</button>
      <div class="resultat" id="js-resultat">Le résultat apparaîtra ici.</div>
    </div>
  </div>

  <!-- PAGE QUIZ -->
  <div class="page" id="page-quiz">
    <h2>Quiz — Teste tes connaissances</h2>
    <div class="score-box">Score : <span class="nb" id="score-val">0</span> / 8</div>

    <div class="question" id="q1">
      <p>1. Le HTML est un langage de programmation ?</p>
      <div class="options">
        <button data-q="q1" data-ok="non" data-msg="Faux — HTML est un langage de DESCRIPTION, pas de programmation.">Vrai</button>
        <button data-q="q1" data-ok="oui" data-msg="Correct — HTML décrit la structure, il ne programme pas.">Faux</button>
      </div>
      <div class="feedback" id="fb-q1"></div>
    </div>

    <div class="question" id="q2">
      <p>2. Quelle balise insère un saut de ligne ?</p>
      <div class="options">
        <button data-q="q2" data-ok="non" data-msg="Non — &lt;p&gt; crée un paragraphe.">&lt;p&gt;</button>
        <button data-q="q2" data-ok="oui" data-msg="Correct — &lt;br /&gt; insère un saut de ligne.">&lt;br /&gt;</button>
        <button data-q="q2" data-ok="non" data-msg="Non — &lt;h1&gt; est un titre de niveau 1.">&lt;h1&gt;</button>
      </div>
      <div class="feedback" id="fb-q2"></div>
    </div>

    <div class="question" id="q3">
      <p>3. En CSS, un sélecteur qui commence par un point ( . ) désigne...</p>
      <div class="options">
        <button data-q="q3" data-ok="non" data-msg="Non — Un identifiant commence par #.">Un identifiant</button>
        <button data-q="q3" data-ok="oui" data-msg="Correct — .maClasse est un sélecteur de classe.">Une classe</button>
        <button data-q="q3" data-ok="non" data-msg="Non — Une pseudo-classe utilise : comme a:hover.">Une pseudo-classe</button>
      </div>
      <div class="feedback" id="fb-q3"></div>
    </div>

    <div class="question" id="q4">
      <p>4. Que retourne confirm() quand on clique OK ?</p>
      <div class="options">
        <button data-q="q4" data-ok="non" data-msg="Non — null vient de prompt() annulé.">null</button>
        <button data-q="q4" data-ok="non" data-msg="Non — confirm() ne retourne pas de texte.">Le texte saisi</button>
        <button data-q="q4" data-ok="oui" data-msg="Correct — confirm() retourne true si OK, false si Annuler.">true</button>
      </div>
      <div class="feedback" id="fb-q4"></div>
    </div>

    <div class="question" id="q5">
      <p>5. Quel attribut ouvre un lien dans un nouvel onglet ?</p>
      <div class="options">
        <button data-q="q5" data-ok="non" data-msg="Non — href contient l'adresse de destination.">href</button>
        <button data-q="q5" data-ok="non" data-msg="Non — title affiche une info-bulle.">title</button>
        <button data-q="q5" data-ok="oui" data-msg="Correct — target=_blank ouvre dans un nouvel onglet.">target="_blank"</button>
      </div>
      <div class="feedback" id="fb-q5"></div>
    </div>

    <div class="question" id="q6">
      <p>6. Que fait i++ en JavaScript ?</p>
      <div class="options">
        <button data-q="q6" data-ok="oui" data-msg="Correct — i++ ajoute 1 à i (incrémentation).">Ajoute 1 à i</button>
        <button data-q="q6" data-ok="non" data-msg="Non — Pour soustraire 1 on utilise i--.">Soustrait 1 à i</button>
        <button data-q="q6" data-ok="non" data-msg="Non — Pour multiplier on écrit i = i * 2.">Multiplie i par 2</button>
      </div>
      <div class="feedback" id="fb-q6"></div>
    </div>

    <div class="question" id="q7">
      <p>7. Quel sélecteur CSS cible &lt;div id="menu"&gt; ?</p>
      <div class="options">
        <button data-q="q7" data-ok="non" data-msg="Non — .menu désigne une classe.">.menu</button>
        <button data-q="q7" data-ok="oui" data-msg="Correct — #menu cible l'attribut id=menu.">#menu</button>
        <button data-q="q7" data-ok="non" data-msg="Non — div menu cible les éléments div à l'intérieur d'un menu.">div menu</button>
      </div>
      <div class="feedback" id="fb-q7"></div>
    </div>

    <div class="question" id="q8">
      <p>8. Quelle méthode JS accède à un élément par son id ?</p>
      <div class="options">
        <button data-q="q8" data-ok="non" data-msg="Non — getElementsByTagName() cherche par balise.">getElementsByTagName()</button>
        <button data-q="q8" data-ok="oui" data-msg="Correct — getElementById() est la méthode standard.">getElementById()</button>
        <button data-q="q8" data-ok="non" data-msg="Non — getElementsByName() cherche par attribut name.">getElementsByName()</button>
      </div>
      <div class="feedback" id="fb-q8"></div>
    </div>
  </div>

  <footer>Université Cheikh Anta Diop · École Supérieure Polytechnique · Dr. Mouhamed DIOP</footer>
</div>

<!-- ✅ Script placé APRÈS le HTML : les éléments existent déjà quand JS s'exécute -->
<!-- C'est la méthode la plus simple et la plus fiable pour GitHub Pages         -->
<script>
  var score = 0;

  function allerA(nom) {
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) pages[i].classList.remove("actif");
    var btns = document.querySelectorAll("nav button");
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove("actif");
    document.getElementById("page-" + nom).classList.add("actif");
    document.getElementById("btn-" + nom).classList.add("actif");
    window.scrollTo(0, 0);
  }

  document.getElementById("btn-html").onclick  = function() { allerA("html"); };
  document.getElementById("btn-css").onclick   = function() { allerA("css");  };
  document.getElementById("btn-js").onclick    = function() { allerA("js");   };
  document.getElementById("btn-quiz").onclick  = function() { allerA("quiz"); };

  document.getElementById("btn-appliquer").onclick = function() {
    var el = document.getElementById("css-resultat");
    el.style.color    = document.getElementById("css-couleur").value;
    el.style.fontSize = document.getElementById("css-taille").value;
  };

  document.getElementById("btn-double").onclick = function() {
    var val = document.getElementById("js-nombre").value;
    var el  = document.getElementById("js-resultat");
    if (val === "") {
      el.textContent = "Entrez un nombre d'abord !";
      el.style.color = "#ef4444";
    } else {
      el.textContent = "Le double de " + val + " est : " + (val * 2);
      el.style.color = "#4ade80";
    }
  };

  var qBtns = document.querySelectorAll(".options button");
  for (var i = 0; i < qBtns.length; i++) {
    qBtns[i].onclick = function() {
      var id  = this.getAttribute("data-q");
      var ok  = this.getAttribute("data-ok");
      var msg = this.getAttribute("data-msg");
      var div = document.getElementById(id);
      if (div.querySelector(".bon") || div.querySelector(".faux")) return;
      var all = div.querySelectorAll("button");
      for (var j = 0; j < all.length; j++) all[j].disabled = true;
      if (ok === "oui") {
        this.classList.add("bon");
        score++;
        document.getElementById("score-val").textContent = score;
      } else {
        this.classList.add("faux");
      }
      var fb = document.getElementById("fb-" + id);
      fb.textContent = msg;
      fb.style.color = (ok === "oui") ? "#4ade80" : "#ef4444";
    };
  }
</script>
</body>
</html>
