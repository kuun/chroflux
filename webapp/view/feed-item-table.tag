<feed-item-table>
  <div>
    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">Title</th>
          <th>URL</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
          <tr each={items}>
          <td class="mdl-data-table__cell--non-numeric">{title}</td>
          <td>{url}</td>
          <td>{date}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <script>
    this.items = [
      {
        title: 'Google',
        url: 'www.google.com',
        date: '2015-10-15'
      },
      {
        title: 'Faceboock',
        url: 'www.facebook.com',
        date: '2015-10-15'
      },
      {
        title: 'Twitter',
        url: 'www.twitter.com',
        date: '2015-10-15'
      }
    ]
  </script>
</feed-item-table>
