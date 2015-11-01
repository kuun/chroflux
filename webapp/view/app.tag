<app class="container full-width app-padding">
  <div class="row row-padding full-width full-height">
    <feed-list class="col-md-3 feed-list-padding full-height"></feed-list>
    <item-list class="col-md-3 item-list-padding full-height"></item-list>
    <item-view class="col-md-6 item-view full-height"></item-view>
  </div>

  <style>
    html, body, app {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    app {
      display: block;
      width: 100%;
    }
    .row-padding {
      margin: 0px;
      padding: 0px;
    }
    .app-padding {
      margin: 0px;
      padding: 0px;
    }
    .feed-list-padding {
      margin: 1px;
      padding-left: 2px;
      padding-right: 0px;
      /*max-width: 300px;*/
    }
    .item-list-padding {
      margin: 1px;
      padding-left: 0px;
      padding-right: 0px;
    }
    .item-view {
      float: right;
      width: calc(50% - 5px);
    }
    .full-width {
      width: 100%;
    }
    .full-height {
      height: 100%;
    }
  </style>
</app>
