  <div ng-controller="GroupCtrl">
  <form novalidate class="simple-form">
    Age Group: 
    <input type="radio" ng-model="user.ageGrp" value="young" />Young
    <input type="radio" ng-model="user.ageGrp" value="old" />Old<br />
    
    <input type="button" ng-click="reset()" value="Reset" />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
  <pre>user = {{user | json}}</pre>
  <pre>master = {{master | json}}</pre>
</div>