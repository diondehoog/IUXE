  <div ng-controller="GroupCtrl">
  <form novalidate class="simple-form">
    <p class="agegroupText">Choose the age group:</p>
    
    <div class="toggle">
      <label><input type="radio" ng-model="user.ageGrp" value="young" /><span>Young</span></label>
    </div>
    
     <div class="toggle">
      <label><input type="radio" ng-model="user.ageGrp" value="old" /><span>Old</span></label>
    </div>
    
    <input type="button" ng-click="reset()" value="Reset" />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
  <pre>user = {{user | json}}</pre>
  <pre>master = {{master | json}}</pre>
</div>
