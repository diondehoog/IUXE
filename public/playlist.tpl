<h1>{{title}}</h1>

<div>
<p>selected: {{selected.name}}</p>
  <ul>
    <li ng-repeat="playlist in playlists" ui-sref="playlist({listid: list.id, userid: list.owner.id, listname: list.name})">
      <a class="playlistButton" ng:click="select(playlist)" >{{playlist.name}}</a>
    </li>
  </ul>
</div>​



