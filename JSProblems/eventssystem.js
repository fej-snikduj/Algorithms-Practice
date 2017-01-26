var song = {};

song.play = function() {
  // tlp.play();
  // fp.play();
  _.each(this._reactions, function(cb) {
    cb();
  }
};

var tlp = {
  play: function () {};
};

var fp = {
  play: function() {};
};

var mp = {
  play: function() {};
};

song._reactions = [];

reactions.push(tlp.play, fp.play);

song.onPlay = function(cb) {
  this._reactions.push(cb);
}

var addEventSystem = function(target) {
  target._reactions = {};
  target.on = function(event, cb) {
    this._reactions[event] = [];
    this._reactions[event].push(cb);
  };
  target.trigger = function(event) {
    _.each(this._reactions[event], function(cb) {`
      cb();
    })
  }
};

