<template>
  <div>
    <side-panel></side-panel>
    <main-panel></main-panel>
  </div>
</template>

<script>
import SidePanel from './components/SidePanel/SidePanel'
import MainPanel from './components/MainPanel/MainPanel'
export default {
  components: { 'sidePanel': SidePanel,
    'mainPanel': MainPanel
  }
}
</script>

<style>
html, body, main-wrapper {
  background-color: #EAEAEA;
  height: 100%; }

.card {
  background-color: #fff; }
  .card p {
    color: #616161 !important; }

.round-image {
  height: 120px;
  width: 120px;
  border-radius: 60px;
  border: 3px solid #B3B3B3; }

.round-image-medium {
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: 2px solid #23D1A3; }

.light-green-border {
  border: 2px solid #23D1A3;
  padding: 5px; }

p, ul, h5 {
  color: #616161 !important; }

span.badge.new {
  background-color: #1EB18F; }

.custom-button {
  box-shadow: none;
  background-color: #E9FDCB;
  color: #1EB18F;
  border: 2px solid #23D1A3;
  text-transform: none;
  font-weight: bold; }
</style>
