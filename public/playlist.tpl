<h1>{{title}}</h1>

{{getNewReleases}}

<ul ng-repeat="playlist in playlists" ui-sref="playlist({listid: list.id, userid: list.owner.id, listname: list.name})">
  <li>{{playlist.name}}</li>
</ul>

<iframe src="https://embed.spotify.com/?uri=spotify:track:2SkTXkFpM6AnunYEArAmNQ&view=coverart" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
