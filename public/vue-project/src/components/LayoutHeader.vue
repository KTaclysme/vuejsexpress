<template>
  <div class=layout>
    <!-- NavBar -->
    <div class="navbar">
      <ul>
        <li>
          <h1><router-link class="navtitle" to="/">ZEPENDAX</router-link></h1>
        </li>
        <li><router-link class="navchar" to="/produit">Produits</router-link></li>
        <li><router-link class="navchar" to="/connexion">Connexion</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      msg: 'Layout'
    }
  }
}
</script>
<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
}

.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
}

.layout ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.navbar li {
  float: left;
}

.footer li {
  float: right;
}

.navtitle {
  text-decoration: none;
  color: white;
}

.layout li .navchar {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.layout li .navchar:hover {
  background-color: #111;
}
</style>
