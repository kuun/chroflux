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
    #item-content pre {
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }
    #item-content img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }
    #item-content h1, #item-content h2, #item-content h3, #item-content h4, #item-content h5, #item-content h6 {
      color: rgb(40, 50, 62);
      border-color: rgb(181, 192, 206);
      border-bottom-style: solid;
      border-bottom-width: 1px;
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
