<h1>{{title}}</h1>

{{getNewReleases}}

<ul ng-repeat="playlist in playlists" ui-sref="playlist({listid: list.id, userid: list.owner.id, listname: list.name})">
  <li>{{playlist.name}}</li>
</ul>


