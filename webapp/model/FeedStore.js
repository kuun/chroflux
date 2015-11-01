function FeedStore() {
  riot.observable(this)

  var self = this
  self.feeds = []

  self.on('load_feed', function () {
    mfRpc.getFeedList(function (result) {
      if (result) {
        self.feeds = result
      }
      self.trigger('feed_loaded', self.feeds)
    })
  })


}
