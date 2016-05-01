  <div ng-controller="GroupCtrl">
  <form novalidate class="simple-form">
    <p class="agegroupText">Choose the age group:</p>: 
    <input type="radio" ng-model="user.ageGrp" value="young" /><p class="agegroupText">Young</p>
    <input type="radio" ng-model="user.ageGrp" value="old" /><p class="agegroupText">Old</p><br />
    
    <input type="button" ng-click="reset()" value="Reset" />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
  <pre>user = {{user | json}}</pre>
  <pre>master = {{master | json}}</pre>
</div>
