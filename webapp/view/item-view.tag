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
    #item-content p {
      font-size: 120%;
    }
    #item-content img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  </style>


  <script>
    var self = this

    self.on('mount', function () {
      self.itemView = $('item-view')
      self.itemContent = $('#item-content')
    })

    RiotControl.on('item_content_loaded', function (content) {
      self.itemContent.html(content)
      self.itemView.scrollTop(0)
    })
    </script>
</item-view>
