function ItemListStore() {
  riot.observable(this)

  var self = this
  self.itemMap = {}

  self.on('load_item_list', function (feed) {
    items = self.itemMap[feed.id]
    if (items) {
      self.trigger('item_list_loaded', items)
      return
    }
    mfRpc.getFeedItemList(feed.id, 0, 50, function (data) {
      self.itemMap[feed.id] = data
      self.trigger('item_list_loaded', data)
    })
  })
}
