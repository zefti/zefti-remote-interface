var Remote = function(db){
  this.db = db;
  return this;
};



Remote.prototype.create = function(hash, options, cb){
  this.db.put({method:'create', hash:hash, options:options}, {path:'/create'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.find = function(hash, fieldMask, options, cb){
  this.db.post({method:'find', hash:hash, fieldMask:fieldMask, options:options}, {path:'/find'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.findById = function(id, fieldMask, options, cb){
  this.db.post({method:'findById', id:id, fieldMask, fieldMask, options:options}, {path:'/findbyid'}, function(err, res){
    cb(err, res);
  });
}

Remote.prototype.upsert = function(hash, update, options, cb){
  this.db.post({method:'upsert', hash:hash, update:update, options:options}, {path:'/upsert'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.update = function(hash, update, options, cb){
  this.db.post({method:'update', hash:hash, update:update, options:options}, {path:'/update'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.updateById = function(id, update, options, cb){
  this.db.post({method:'updateById', id:id, update:update, options:options}, {path:'/updatebyid'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.remove = function(hash, options, cb){
  this.db.del({method:'remove', hash:hash, options:options}, {path:'/remove'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.removeById = function(id, options, cb) {
  this.db.del({method: 'remove', id: id, options: options}, {path: '/removebyid'}, function (err, res) {
    cb(err, res);
  });
}

Remote.prototype.removeFields = function(hash, update, options, cb){
  this.db.del({method:'removeFields', hash:hash, update:update, options:options}, {path:'/removefields'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.removeFieldsById = function(id, fields, options, cb){
  this.db.del({method:'removeFieldsById', id:id, fields:fields, options:options}, {path:'/removefieldsbyid'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.addToSet = function(hash, item, options, cb){
  this.db.post({method:'addToSet', hash:hash, item:item, options:options}, {path:'/addtoset'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.addToSetById = function(id, item, options, cb){
  this.db.post({method:'addToSetById', id:id, item:item, options:options}, {path:'/addtosetbyid'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.removeFromSet = function(hash, item, options, cb){
  this.db.post({method:'removeFromSet', hash:hash, item:item, options:options}, {path:'/removefromset'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.removeFromSetById = function(id, item, options, cb){
  this.db.post({method:removeFromSetById, id:id, item:item, options:options}, {path:'/removefromsetbyid'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.expire = function(hash, options, cb){
  this.db.post({method:expire, hash:hash, options:options}, {path:'/expire'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.expireById = function(id, options, cb){
  this.db.post({method:expireById, id:id, options:options}, {path:'/expirebyid'}, function(err, res){
    cb(err, res);
  });
};

Remote.prototype.getNewId = function(options, cb){
  this.db.post({method:getNewId, options:options}, {path:'/getnewid'}, function(err, res){
    cb(err, res);
  });
};


module.exports = Remote;