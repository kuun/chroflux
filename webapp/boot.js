// register store
RiotControl.addStore(new FeedStore())
RiotControl.addStore(new ItemListStore())
RiotControl.addStore(new ItemContentStore())

riot.mount('app') // Kickoff the Riot app.
