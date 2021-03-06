/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var App = require('app');

App.ReloadPopupMixin = Em.Mixin.create({

  reloadPopup: null,

  showReloadPopup: function () {
    var self = this;
    if (!this.get('reloadPopup')) {
      this.set('reloadPopup', App.ModalPopup.show({
        primary: null,
        secondary: null,
        showFooter: false,
        header: this.t('app.reloadPopup.header'),
        body: "<div id='reload_popup' class='alert alert-info'><div class='spinner'><span>" +
          this.t('app.reloadPopup.text') + "</span></div></div><div><a href='javascript:void(null)' onclick='location.reload();'>" +
          this.t('app.reloadPopup.link') + "</a></div>",
        encodeBody: false,
        onClose: function () {
          self.set('reloadPopup', null);
          this._super();
        }
      }));
    }
  },

  closeReloadPopup: function () {
    var reloadPopup = this.get('reloadPopup');
    if (reloadPopup) {
      reloadPopup.onClose();
    }
  }

});
