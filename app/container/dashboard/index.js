'use strict';

require('angular').module('BeerLog')
.component('dashboard', {
  template: require('./dashboard.html'),
  controller: ['$log', 'clipboard', 'pageService', function($log, clipboard, pageService) {
    this.$onInit = () => {
      this.pageSelectPages = [];
      this.pageSelectShowAll = false;
      this.pageSelectSelect = null;
      this.pageSelectHandleSelect = (page) => {
        this.pageSelectShowAll = !this.pageSelectShowAll;
        this.pageSelectSelected = page;
        this.pageEditorPage = page;
      };
      this.pageEditorPage = {title: '', content: '', showInNav: false};
      this.pageEditorHandleSubmit = (page) => {
        pageService.create(page)
        .then(page => {
          $log.log('ITS ON THERE', page);
          let found = false;

          this.pageSelectPages.map(item => {
            if(page.id == item.id) {
              found = true;
              return page;
            }
            return item;
          });
          if(!found) this.pageSelectPages.push(page);
          this.pageEditorPage = {title: '', content: '', showInNav: false};
        })
        .catch($log.error);
      };
      this.handlePageNew = () => {
        this.pageEditorPage = {title: '', content: '', showInNav: false};
      };
      this.handlePageCopy = (page) => {
        clipboard.copyText(`[](/#!/home/${page.id})`);
      };
      this.handlePageDelete = (page) => {
        pageService.delete(page)
        .then(() => {
          this.pageSelectPages = this.pageSelectPages[0];
        });
      };
      pageService.fetchAll()
      .then(pages => {
        this.pageSelectPages = pages;
        this.pageSelectSelected = pages[0];
      });
    };
  }],
});
