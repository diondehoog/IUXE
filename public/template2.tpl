  <div ng-controller="GroupCtrl">
  <form novalidate class="simple-form">
    <p class="agegroupText">Choose the age group:</p>
    
    <div class="toggle">
      <label><input type="radio" ng-model="user.ageGrp" name="toggle" value="young"><span>On</span></label>    
    </div>
    <div class="toggle">
      <label><input type="radio" ng-model="user.ageGrp" name="toggle" value="old"><span>Off</span></label>
    </div>
    <br>
    <input type="button" ng-click="reset()" value="Reset" />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
  <pre>user = {{user | json}}</pre>
  <pre>master = {{master | json}}</pre>
</div>
