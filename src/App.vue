<template>
  <div id="app">
    <div id="nav">
      ( 전략패턴:
      <router-link to="/">List</router-link>|
      <router-link to="/cart">Cart</router-link>) |
      상태 패턴:
      <router-link to="/vending-machine">자판기</router-link>|
      <router-link to="/post-office">우체국</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
