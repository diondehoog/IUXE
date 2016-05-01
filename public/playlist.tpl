<!--<h1>{{title}}</h1>-->

<p> click me for player <button ng:click="displayPlayer('spotify:track:2SHtP0auCWMCVTtxiO7t6G')">{{selectedPlaylist.name}}</button> </p>

<div>
<p class="playlistText">Selected playlist: {{selectedPlaylist.name}}</p>
  <ul class="playlistList">
    <li ng-repeat="playlist in playlists" ui-sref="playlist({listid: list.id, userid: list.owner.id, listname: list.name})">
      <button class="playlistButton" ng:click="selectPlaylist(playlist)" >{{playlist.name}}</button>
    </li>
  </ul>
</div>​

<!-- show json output of given data
<pre>
  {{currentTrack | json}}
</pre>
-->
<p> Next Song <button ng:click="nextSongFromList()">{{selectedPlaylist.name}}</button> </p>
<p> Songindex: {{songIndex}} </p>
<p> Current Track name: {{currentTrack.name}} </p>
<p> Current Track URI: {{currentTrack.uri}} </p>

<iframe ng-src="{{iframe_url}}" width="400" height="80" frameborder="0" allowtransparency="true"> </iframe>

<div>
  <p> Tracks of {{selectedPlaylist.name}} </p>
      <ul>
        <li ng-repeat="item in tracks" class="list card">
          <p>Title: {{item.track.name}}</p>
          <p> Artist: {{item.track.artists[0].name}}</p>
        </li>
      </ul>
</div>




