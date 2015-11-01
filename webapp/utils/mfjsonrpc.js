var mfRpc = {
  _jsonRpc: function (method, success, params) {
    $.ajax({
      url:  '/rpcproxy',
      type: 'POST',
      processData: false,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        jsonrpc: '2.0',
        method: method,
        params: params,
        id: 1
      }),
      success: function (data) {
        success(data.result)
      }
    })
  },

  // all success callback type: function (result)
  // if the rpc call has response, it's result

  // result: software version, eg: {version: 'master'}
  getAppVersion: function (success) {
    this._jsonRpc('app.version', success)
  },

  // result: list of feeds
  // eg: [
  //   {
  //     "download_content" : "0",
  //     "enabled" : "1",
  //     "etag" : null,
  //     "feed_url" : "http://www.lemonde.fr/rss/une.xml",
  //     "id" : "1",
  //     "last_checked" : null,
  //     "last_modified" : null,
  //     "parsing_error" : "0",
  //     "site_url" : "http://www.lemonde.fr/rss/une.xml",
  //     "title" : "Le Monde.fr - Actualité à la Une"
  //   }
  // ]
  getFeedList: function (success) {
    this._jsonRpc('feed.list', success)
  },

  // result: feed info, key-value pair
  // eg: [
  //   {
  //     "download_content" : "0",
  //     "enabled" : "1",
  //     "etag" : null,
  //     "feed_url" : "http://www.lemonde.fr/rss/une.xml",
  //     "id" : "1",
  //     "last_checked" : null,
  //     "last_modified" : null,
  //     "parsing_error" : "0",
  //     "site_url" : "http://www.lemonde.fr/rss/une.xml",
  //     "title" : "Le Monde.fr - Actualité à la Une"
  //   }
  // ]
  getFeedInfo: function (feedId, success) {
    this._jsonRpc('feed.info', success, {'feed_id': feedId})
  },

  // result: feed_id(integer)
  createFeed: function (url, success) {
    this._jsonRpc('feed.create', success, {'url': url})
  },

  // result: bool
  deleteFeed: function (feedId, success) {
    this._jsonRpc('feed.delete', success, {'feed_id': feedId})
  },

  // result: bool
  deleteAllFeeds: function (success) {
    this._jsonRpc('feed.delete_all', success)
  },

  // result: bool
  updateFeed: function (feedId, success) {
    this._jsonRpc('feed.update', success, {'feed_id': feedId})
  },

  // feedId: integer
  // offset: null or integer
  // limit: null or integer
  // result: list of items, eg: [
  //   {
  //       "bookmark" : "0",
  //       "content" : "&lt;p&gt;La fermeture de quatre usines affecte 1 250 salariés, soit 30 % des effectifs de la marque en Espagne.&lt;/p&gt;",
  //       "feed_id" : "1",
  //       "id" : "bcc94722",
  //       "site_url" : "http://www.lemonde.fr/rss/une.xml",
  //       "status" : "unread",
  //       "title" : "Des milliers de manifestants à Madrid contre la fermeture d'usines Coca-Cola",
  //       "updated" : "1392486765",
  //       "url" : "http://www.lemonde.fr/europe/article/2014/02/15/des-milliers-de-manifestants-a-madrid-contre-la-fermeture-d-usines-coca-cola_4367428_3214.html#xtor=RSS-3208"
  //   }
  // ]
  getFeedItemList: function (feedId, offset, limit, success) {
    this._jsonRpc('item.feed.list', success,
      {'feed_id': feedId, 'offset': offset, 'limit': limit})
  },

  // result: integer
  getFeedItemCount: function (feedId, success) {
    this._jsonRpc('item.feed.count', success, {'feed_id': feedId})
  },

  // offset: null or integer
  // limit: null or integer
  // result: list of items
  getBookmarkList: function (offset, limit, success) {
    this._jsonRpc('item.bookmark.list', success, {'offset': offset, 'limit': limit})
  },

  // result: integer
  getBookmarkCount: function (success) {
    this._jsonRpc('item.bookmark.count', success)
  },

  // result: bool
  addBookmark: function (itemId, success) {
    this._jsonRpc('item.bookmark.create', success, {'item_id': itemId})
  },

  // result: bool
  deleteBookmark: function (itemId, success) {
    this._jsonRpc('item.bookmark.delete', success, {'item_id': itemId})
  },

  // result: list of items
  getAllUnreadItems: function (success) {
    this._jsonRpc('item.list_unread', success)
  },

  // result: integer
  getAllUnreadItemCount: function (success) {
    this._jsonRpc('item.count_unread', success)
  },

  // result: list of items
  getReadItems: function (offset, limit, success) {
    this._jsonRpc('item.list_read', success)
  },

  // result: integer
  getReadItemCount: function (success) {
    this._jsonRpc('item.count_read', success)
  },

  // result: item info, eg: {
  //   "author" : "",
  //   "bookmark" : "1",
  //   "content" : "La fermeture de quatre usines affecte 1 250 salariés, soit 30 % des effectifs de la marque en Espagne.",
  //   "feed_id" : "1",
  //   "id" : "bcc94722",
  //   "status" : "unread",
  //   "title" : "Des milliers de manifestants à Madrid contre la fermeture d'usines Coca-Cola",
  //   "updated" : "1392486765",
  //   "url" : "http://www.lemonde.fr/europe/article/2014/02/15/des-milliers-de-manifestants-a-madrid-contre-la-fermeture-d-usines-coca-cola_4367428_3214.html#xtor=RSS-3208"
  // }
  getItem: function (itemId, success) {
    this._jsonRpc('item.info', success, {'item_id': itemId})
  },

  // result: bool
  deleteItem: function (itemId, success) {
    this._jsonRpc('item.delete', success, {'item_id': itemId})
  },

  // result: bool
  markItemAsRead: function (itemId, success) {
    this._jsonRpc('item.mark_as_read', success, {'item_id': itemId})
  },

  // result: bool
  markItemAsUnread: function (itemId, success) {
    this._jsonRpc('item.mark_as_unread', success, {'item_id': itemId})
  },

  // result: bool
  flushAllReadItems: function (success) {
    this._jsonRpc('item.flush', success)
  },

  // result: bool
  markAllItemsAsRead: function (success) {
    this._jsonRpc('item.mark_all_as_read', success)
  },

  // status: 'read', 'unread', 'removed'
  // items: arrray of item ids
  // result: bool
  setItemsStatus: function (status, items, success) {
    this._jsonRpc('item.set_list_status', success, {'status': status, 'items': items})
  },

  // desc: get all items(read and unread)
  // result: list of items
  getAllItems: function (success) {
    this._jsonRpc('item.get_all', success)
  },

  // desc: get all items status(unread and read)
  // result: list of items id and status, eg: {
  //   "02043706" : "unread",
  //   "03b2f912" : "read"
  // }
  getAllItemsStatus: function (success) {
    this._jsonRpc('item.get_all_status')
  },

  // desc: get all items since a date(unread and read)
  // since: unix timestamp
  // result: list of items
  getAllItemsSince: function (since, success) {
    this._jsonRpc('item.get_all_since', success, {'timestamp': since})
  }
}
