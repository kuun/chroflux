<feed-group-list>
  <ul class="feed-group-list">
    <li each={opts.feedGroups} class="{isSeleted ? 'selected-feed-group' : ''}">
      <span class="feed-group-fold-handler" onclick="{parent.toggleFold}">
        {isFolded ? '+' : '-'}
      </span>
      <label class="feed-group-name">{groupName}</label>
      <feed-list feeds="{feeds}" riot-style={isFolded ? 'display: none' : ' '}></feed-list>
    </li>
  </ul>

  <style>
    feed-group-list > ul {
      max-width: 250px;
      height: 100%;
      border: 2px solid #cbcbf2;
      border-radius: 3px;
      margin-left: 1px;
      padding: 2px;
    }
    .feed-group-list {
        list-style-type: none;
        padding: 2px;
        margin: 2px;
    }
    .feed-group-fold-handler {
      display: inline-block;
      padding-right: 5px;
      font-size: 150%;
      vertical-align: text-bottom;
      color: #3c3c3c;
      cursor: default;
    }
    .feed-group-fold-handler:hover {
      color: #041d01;
      font-weight: bold;
    }
    .feed-group-name {
        font-size: 150%;
    }
    selected-feed-group {
      background-color: #856ef5;
    }
  </style>

  <script>
    var self = this

    // group fields:
    // groupName
    // feeds
    // isFolded
    self.feedGroups = opts.feedGroups

    mfRpc.getFeedList(function (feeds) {
      self.allFeeds = feeds
      console.log(feeds)
    })

    toggleFold(e) {
      var feed = e.item
      if (feed.isFolded) {
          feed.isFolded = false
      } else {
          feed.isFolded = true
      }
      mfRpc.getAppVersion(function (data) {
        console.log(data)
      })
    }

  </script>
</feed-group-list>
