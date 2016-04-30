<!--<h1>{{title}}</h1>-->

<div>
<p class="playlistText">selected: {{selected.name}}</p>
  <ul class="playlistList">
    <li ng-repeat="playlist in playlists" ui-sref="playlist({listid: list.id, userid: list.owner.id, listname: list.name})">
      <button class="playlistButton" ng:click="select(playlist)" >{{playlist.name}}</button>
    </li>
  </ul>
</div>​

<div>
  <p> Tracks of {{listname}} </p>
      <ul>
        <li ng-repeat="item in tracks" class="list card">
          <h2>Title: {{item.track.name}}</h2>
          <p> Artist: {{item.track.artists[0].name}}</p>
        </li>
      </ul>
</div>



