<item-view>
  <div id='item-content'>
  </div>

  <style>
    item-view {
      overflow-y: auto;
      display: block;
      padding: 20px;
      padding-top: 10px;
    }
  </style>


  <script>
    var self = this

    self.on('mount', function () {
      self.itemView = $('item-view')
      self.itemView.scrollTop(0)
    })

    RiotControl.on('item_content_loaded', function (content) {
      self.itemContent.html(content)
    })
    </script>
</item-view>
