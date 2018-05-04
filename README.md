<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="vendible-1.0">Vendible 1.0</h1>
<p><strong>Vendible 1.0</strong> is an e-commerce site that allows a user to sign in with Google, browse merchandise, add items to cart, and purchase by use of the built-in Stripe API payment module. The Front End (React/Redux) and Back End (Node/Express) were built in two separate projects and uploaded to two Heroku server platforms. The database of shopping items was created and is stored in a NoSQL format on MLab.</p>
<h2 id="links">Links</h2>
<p>Live site: <a href="https://vendible.herokuapp.com/">https://vendible.herokuapp.com/</a><br>
Vendible Server Repo:  <a href="https://github.com/drerichards/vendible-server">https://github.com/drerichards/vendible-server</a></p>
<h2 id="screenshots">Screenshots</h2>
<p><strong>Home Page</strong><br>
<img src="https://res.cloudinary.com/andrerichards/image/upload/v1515840931/portfolio/vend1.jpg" alt="Home Page"></p>
<p><strong>Products Page</strong><br>
<img src="https://res.cloudinary.com/andrerichards/image/upload/v1515840931/portfolio/vend2.jpg" alt="Products Page"></p>
<h2 id="api-documentation">API Documentation</h2>
<h4 id="google">Google+</h4>
<p>The Google+ API enables developers to build on top of the Google+ platform.</p>
<pre><code>https://www.googleapis.com/auth/plus.login
</code></pre>
<h4 id="stripe">Stripe</h4>
<p>Stripe is a suite of payment APIs that offers a payment platform to accept and process payments online for easy-to-use commerce solutions.</p>
<pre><code>var stripe = require("stripe")(
    "sk_test_BQokikJOvBiI2HlWgH4olfQ2");
stripe.charges.create({  
	amount: 2000,  
	currency: "usd",  
	source: "tok_amex", // obtained with Stripe.js  
	description: "Charge for chloe.jackson@example.com"
}, function(err, charge) {
	// asynchronously called
});
</code></pre>
<h2 id="technologies">Technologies:</h2>
<ul>
<li>Front End
<ul>
<li>HTML</li>
<li>CSS/Flexbox</li>
<li>Javascript</li>
<li>React</li>
<li>Redux</li>
<li>Bootstrap</li>
</ul>
</li>
<li>Back End
<ul>
<li>Node</li>
<li>Express</li>
<li>MongoDB/MLab</li>
<li>Mongoose</li>
<li>Passport (Google Strategy)</li>
</ul>
</li>
</ul>
</div>
</body>

</html>
