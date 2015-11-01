function ItemContentStore() {
  var self = this
  riot.observable(self)

  self.on('load_item_content', function (item) {
    mfRpc.getItem(item.id, function (data) {
      self.trigger('item_content_loaded', data.content)
    })
  })
}
