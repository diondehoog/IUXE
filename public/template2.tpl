  <div ng-controller="GroupCtrl">
  <form novalidate class="simple-form">
    <p class="agegroupText">Choose the age group:</p>
    
    <div class="toggle">
      <input type="radio" id = "younggrp" ng-model="user.ageGrp" name="toggle" value="young" />
      <label for="younggrp">Young</label>
    </div>
    
    <div class="toggle">
      <input type="radio" id = "oldgrp" ng-model="user.ageGrp" name="toggle" value="old" />
      <label for="oldgrp">Old</label>
    </div>
    
    <!--
    <input type="button" ng-click="reset()" value="Reset" />
    <input type="submit" ng-click="update(user)" value="Save" />
    -->
  </form>
  <!--
  <pre>user = {{user | json}}</pre>
  <pre>master = {{master | json}}</pre>
  -->
</div>
