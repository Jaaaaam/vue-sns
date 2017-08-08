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
  height: 100%; }

.card {
  background-color: #fff; }
  .card p {
    color: #616161 !important; }
    .card .card-title {
      font-weight: bold;
      color: #1BB28F; }
    .card .card-header {
      height: 50px;
      background-color: #1EB18F;
      padding: 10px;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold; }

.card .card-content .high-prio {
color: #f44336; }
.card .card-content .mid-prio {
color: #ff9800; }
.card .card-content .low-prio {
color: #ffeb3b; }

.card .card-content .event-date {
  margin-bottom: 10px;
  color: #9e9e9e;
  text-transform: uppercase;
  font-weight: bold; }
.card .card-content .event-name .material-icons {
  color: #1EB18F; }
.card .card-content .date-added {
  font-size: 13px;
  color: #9e9e9e !important;
  font-weight: bold;
  margin-top: 5px; }

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

  .round-image-small {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    border: 1px solid #23D1A3; }

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
