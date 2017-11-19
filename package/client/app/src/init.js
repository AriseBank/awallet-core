(function() {
  'use strict';

  angular.module('acoclient.filters', []);
  angular.module('acoclient.services', []);
  angular.module('acoclient.components', []);
  angular.module('acoclient.directives', []);
  angular.module('acoclient.addons', []);
  angular.module('acoclient.accounts', ['ngMaterial', 'acoclient.filters', 'acoclient.addons']);
  
})();