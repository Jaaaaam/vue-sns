<template lang="html">
  <div class="events">
    <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  </div>
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
  .events {
    background-color: #eeeeee;
    position: absolute;
    top: 64px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .__vev_calendar-wrapper {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 0px;
    right: 0px;
    background-color: transparent;

  }

  .cal-body {
    background-color: #E9FDCB;
  }

  @media (max-width: 1366px) {
    .__vev_calendar-wrapper {
      margin-right: 20px;
    }
  }
</style>
