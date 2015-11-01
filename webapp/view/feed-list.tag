<feed-list>
  <div class="list-group">
    <a each={feeds} class="list-group-item" onclick={onSelect} href="#">{title}</li>
  </div>

  <style>
    feed-list {
      display: block;
      overflow-y: auto;
    }
    feed-list > div {
      margin-bottom: 10px;
    }
  </style>


  <script>
    var self = this

    self.on('mount', function() {
      RiotControl.trigger('load_feed')
    })

    RiotControl.on('feed_loaded', function (feeds) {
      self.feeds = feeds
      self.update()
    })

    onSelect(e) {
      feed = e.item
      RiotControl.trigger('load_item_list', feed)
    }

  </script>

</feed-list>
