<template>
  <div class=layout>
    <!-- Footer -->
    <div class="footer">
      <ul>
        <li><router-link class="navchar" to="default.asp">Home</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
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
