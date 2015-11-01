<item-list>
  <div class="list-group">
    <a each={items} class="list-group-item" onclick={onSelect} href="#">{title}</li>
  </div>

  <style>
    item-list {
      overflow-y: auto;
      display: block;
    }
    item-list >  {
      margin-left: 0px;
      margin-bottom: 10px;
    }
  </style>

  <script>
    var self = this

    self.items = []

    self.on('mount', function () {
      self.itemList = $('item-list')
    })

    RiotControl.on('item_list_loaded', function (items) {
      self.items = items
      self.update()
      self.itemList.scrollTop(0)
    })

    onSelect(e) {
      RiotControl.trigger('load_item_content', e.item)
    }
  </script>
</item-list>
