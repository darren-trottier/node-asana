/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Attachments = require('../../lib/resources/attachments');

describe('Attachments', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var attachments = new Attachments(dispatcher);
      assert.equal(attachments.dispatcher, dispatcher);
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      var id = 1;
      attachments.findById(id);
      assert(this.get.calledWithExactly('/attachments/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      attachments.findById(id, params);
      assert(this.get.calledWithExactly('/attachments/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      attachments.findById(id, params);
      assert(this.get.calledWithExactly('/attachments/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      attachments.findById(id, params);
      assert(this.get.calledWithExactly('/attachments/NaN', params));
    });
  });

  describe('#findByTask', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      var id = 1;
      attachments.findByTask(id);
      assert(
        dispatcher.get.calledWithExactly('/tasks/1/attachments', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      attachments.findByTask(id, params);
      assert(this.get.calledWithExactly('/tasks/1/attachments', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      attachments.findByTask(id, params);
      assert(this.get.calledWithExactly('/tasks/1/attachments', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      attachments.findByTask(id, params);
      assert(
        dispatcher.get.calledWithExactly('/tasks/NaN/attachments', params));
    });
  });
});