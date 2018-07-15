/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/

/**
 * @license AngularJS v1.2.2
 * (c) 2010-2012 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.7
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/**
 * angular-growl - v0.4.0 - 2013-11-19
 * https://github.com/marcorinck/angular-growl
 * Copyright (c) 2013 Marco Rinck; Licensed MIT
 */

/**
 * angular-ui-utils - Swiss-Army-Knife of AngularJS tools (with no external dependencies!)
 * @version v0.1.0 - 2013-12-29
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/*
 AngularJS v1.2.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/

/*!
 * angular-translate - v2.2.0 - 2014-06-03
 * http://github.com/PascalPrecht/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */

/**
	 * Bindonce - Zero watches binding for AngularJs
	 * @version v0.3.1
	 * @link https://github.com/Pasvaz/bindonce
	 * @author Pasquale Vazzana <pasqualevazzana@gmail.com>
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */

/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

//// This is a file copied by your subgenerator
//define([
//  './../controllers',
//  '../../helpers/tableHelper',
//  'common/directives/simpleGrid'
//], function (mod,tableHelper,companyGridModel) {
//  mod.controller('auth.domainConfirmController', controllerFn);
//
//  controllerFn.$inject = [
//    '$scope',
//    '$injector',
//    '$state',
//    '$stateParams',
//    'aliyunConsoleRequest',
//    '$cacheFactoryHelper',
//    'secureRequest'
//  ];
//  function controllerFn($scope, $injector,$state,$stateParams,aliyunConsoleRequest,$cacheFactoryHelper, secureRequest){
//    var vm = this;
//
//    secureRequest.getMobileAndEmail().then(function(response) {
//      vm.phoneNumber = response.mobile || "";
//    });
//
//    vm.accept = true;
//    vm.domainFormData = $cacheFactoryHelper.get('auth.domainFormData');
//    if( ! (vm.domainFormData && vm.domainFormData.authResult) ){
//      $state.go('auth.domain',{type:$state.params.type});
//      return;
//    }
//    vm.prevFormData = vm.domainFormData.preStepInfo;
//
//    function saveToAccount(e,data){
//      vm.submiting = true;
//      aliyunConsoleRequest({
//        serviceModule: 'authRequest',
//        serviceAction: 'setRealNameInfo',
//        params: angular.extend(data || {} ,{
//          certifiedFrom:"DOMAIN",
//          //由于历史原因，account中字段拼写错了
//          accountCertifyType:vm.prevFormData.regType == 'PERSONAL' ? 'PERSIONAL': 'ENTERPRISE',
//          name:vm.prevFormData.cCompany,
//          licenseType:vm.prevFormData.licenseType,
//          licenseNumber:vm.prevFormData.number,
//          authDomain: vm.prevFormData.domainName
//        })
//      }).then(function(res){
//        //保存成功后跳转到成功页，否则跳转到失败页
//        vm.submiting = false;
//        $state.go('auth.home');
//      },function(){
//
//      })['finally'](function(){
//        vm.submiting = false;
//      });
//    };
//    $scope.$on('phoneChecker:success',saveToAccount);
//
//    $scope.$on('$destroy',function(){
//      $cacheFactoryHelper.put('auth.domainFormData','');
//    });
//
//  };
//});

//// This is a file copied by your subgenerator
//define([
//  './../controllers',
//  '../../helpers/tableHelper',
//  '../../models/auth/domainFormModel',
//  'common/directives/simpleGrid'
//], function (mod,tableHelper,domainFormModel,companyGridModel) {
//  mod.controller('auth.domainController', controllerFn);
//
//  controllerFn.$inject = [
//    '$scope',
//    '$injector',
//    '$stateParams',
//    '$state',
//    'aliyunConsoleRequest',
//    '$cacheFactoryHelper'
//  ];
//  function controllerFn($scope, $injector,$stateParams,$state,aliyunConsoleRequest,$cacheFactoryHelper){
//    var vm = this;
//    //校验类型，企业还是个人（根据用户查询时填写的证件号区分,'ID','TAIWAN_PEOPLE','PASSPORT'这几个是个人）
//    var authType;
//
//    angular.extend(vm,domainFormModel);
//
//    //必须重置，否则再次进来会保留上次的数据,因为html有缓存
//    vm.formData = {};
//
//    vm.onSubmit = function(result){
//      /**
//       * 获取备案结果
//       */
//      aliyunConsoleRequest({
//        serviceModule: 'accountRequest',
//        serviceAction: 'checkDomainAuditInfo',
//        params: formatParams()
//      }).then(function(res){
//        if(res){
//          $cacheFactoryHelper.put('auth.domainFormData',{
//            preStepInfo: angular.extend({},formatParams(),{
//              licenseType:vm.formData.licenseType,
//              number:vm.formData.number
//            }),
//            authResult:res
//          });
//          $state.go('auth.domainConfirm',{type:authType});
//          return;
//        }
//        $state.go('auth.fail',{type:'domain'});
//
//      },function(){
//
//      })['finally'](function(){
//        vm.submiting = false;
//      });
//
//    };
//
//
//    function formatParams(){
//      var params = {
//        domainName:vm.formData.domainName,
//        regType: vm.formData.regType,
//        captchaCode: vm.formData.captchaCode
//      };
//      if(vm.formData.regType == "COMPANY"){
//        angular.extend(params,{
//          cCompany:vm.formData.cCompany,
//          companyNumber:vm.formData.number
//        });
//      }else{
//        angular.extend(params,{
//          cCompany:vm.formData.cCompany,
//          idNumber:vm.formData.number
//        });
//      }
//      return params;
//    }
//
//  }
//});

/*
 Highcharts JS v3.0.7 (2013-10-24)

 (c) 2009-2013 Torstein Hønsi

 License: www.highcharts.com/license
*/
