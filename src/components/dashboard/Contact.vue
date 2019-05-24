<template>
  <main>
    <img src="../../assets/images/pic5.jpg" alt=""/>
    <h2>Контакти</h2>
    <br>
    <ul class="contact">
      <li class="fa-envelope-o">kafedra.itp@gmail.com</li>
      <li class="fa-phone">(0472) 73-02-35</li>
      <li class="fa-home">1-й корпус, ауд. 603<br/> бульвар Шевченка, 460, Черкаси, Черкаська область.<br/>
        18000
      </li>
      <br>
    </ul>
  </main>
</template>

<script>
  export default {
    name: "Contact"
  }
</script>

<style lang="scss" scoped>
  ul.contact {
    list-style: none;
    padding: 0;
  }

  ul.contact li {
    text-decoration: none;
    border-top: solid 1px rgba(210, 215, 217, 0.75);
    margin: 1.5em 0 0 0;
    padding: 1.5em 0 0 3em;
    position: relative;
  }

  ul.contact li:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }

  ul.contact li:before {
    color: #f56a6a;
    display: inline-block;
    font-size: 1.5em;
    height: 1.125em;
    left: 0;
    line-height: 1.125em;
    position: absolute;
    text-align: center;
    top: 1em;
    width: 1.5em;
  }

  ul.contact li:first-child {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  ul.contact li:first-child:before {
    top: 0;
  }

  ul.contact li a {
    color: inherit;
  }

</style>
