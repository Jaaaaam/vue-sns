<template lang="html">
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'Foo',
        desc: 'longlonglong description'
      }, {
        date: '2016/11/12',
        title: 'Bar'
      }]
    }
  }
}
</script>

<style lang="css">
  .__vev_calendar-wrapper {
    position: absolute;
    top: 80px;
    bottom: 20px;
    left: 0px;
    right: 0px;
  }

  @media (max-width: 1366px) {
    .__vev_calendar-wrapper {
      margin-right: 20px;
    }
  }
</style>
