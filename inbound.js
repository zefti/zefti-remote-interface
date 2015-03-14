var Request = require('zefti-request');
var Remote = function(options){
  this.db = new Request(options);
  this.db = db;
  return this;
};



Remote.prototype.create = function(hash, options, cb){
  this.db.post({method:create, hash:hash, options:options, cb:cb});
};

Remote.prototype.find = function(hash, fieldMask, options, cb){
  this.db.post({method:find, hash:hash, fieldMask:fieldMask, options:options, cb:cb});
};

Remote.prototype.findById = function(id, fieldMask, options, cb){
  this.db.post({method:findById, hash:hash, fieldMask:fieldMask, options:options, cb:cb});
};

Remote.prototype.upsert = function(hash, update, options, cb){
  this.db.post({method:upsert, hash:hash, update:update, options:options, cb:cb});
};

Remote.prototype.update = function(hash, update, options, cb){
  this.db.post({method:update, hash:hash, update:update, options:options, cb:cb});
};

Remote.prototype.updateById = function(id, update, options, cb){
  this.db.post({method:updateById, id:id, update:update, options:options, cb:cb});
};

Remote.prototype.remove = function(hash, options, cb){
  this.db.post({method:remove, hash:hash, options:options, cb:cb});
};

Remote.prototype.removeById = function(id, options, cb) {
  this.db.post({method: remove, id: id, options: options, cb: cb});
}

Remote.prototype.removeFields = function(hash, update, options, cb){
  this.db.post({method:removeFields, hash:hash, update:update, options:options, cb:cb});
};

Remote.prototype.removeFieldsById = function(id, fields, options, cb){
  this.db.removeFieldsById({method:removeFieldsById, id:id, fields:fields, options:options, cb:cb});
};

Remote.prototype.addToSet = function(hash, item, options, cb){
  this.db.post({method:addToSet, hash:hash, item:item, options:options, cb:cb});
};

Remote.prototype.addToSetById = function(id, item, options, cb){
  this.db.post({method:addToSetById, id:id, item:item, options:options, cb:cb});
};

Remote.prototype.removeFromSet = function(hash, item, options, cb){
  this.db.post({method:removeFromSet, hash:hash, item:item, options:options, cb:cb});
};

Remote.prototype.removeFromSetById = function(id, item, options, cb){
  this.db.post({method:removeFromSetById, id:id, item:item, options:options, cb:cb});
};

Remote.prototype.expire = function(hash, options, cb){
  this.db.post({method:expire, hash:hash, options:options, cb:cb});
};

Remote.prototype.expireById = function(id, options, cb){
  this.db.post({method:expireById, id:id, options:options, cb:cb});
};

Remote.prototype.getNewId = function(options, cb){
  this.db.post({method:getNewId, options:options, cb:cb});
};


  module.exports = Remote;