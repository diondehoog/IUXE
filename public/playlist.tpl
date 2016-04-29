<h1>{{title}}</h1>

<div>
<p>selected: {{selected.name}}</p>
  <ul>
    <li ng-repeat="playlist in playlists" ui-sref="playlist({listid: list.id, userid: list.owner.id, listname: list.name})">
      <button ng:click="select(playlist)" >{{playlist.name}}</button>
    </li>
  </ul>
</div>​



