// TODO: Add comments
(function (win, $) {
  // NOTE: Create Details.prototype and define layer
  function Details() {
    this.item = $('<div class="detail-layer"></div>');
  }

  // NOTE: List of layer capabilities
  Details.prototype.close = function (clr) {
    this.item.css('background', clr);
  };

  Details.prototype.position = function(left, top) {
    this.item.css('left', left);
    this.item.css('top', top);
  };

  Details.prototype.get = function () {
    // console.log(this.item);
    return this.item;
  };

  function DetailsBuilder() {
    this.item = new Details();
    this.init();
  }

  DetailsBuilder.prototype.init = function() {
    this.item.color('blue');
  };

  DetailsBuilder.prototype.get = function() {
    return this.item;
  };

  var DetailsFactory = function() {
    this.types = {};
    // once instantiated, get a reference of this.item
    this.create = function(type) {
      return new this.types[type]().get();
    };

    // NOTE: Updated abstract factory so that it accepts builders
    // NOTE: Test for prototype.initialize & get
    this.register = function(type, cls) {
      if (cls.prototype.init && cls.prototype.get) {
        this.types[type] = cls;
      }
    };
  };

  // NOTE: set all properties, all functions are going
  // to live inside of here, because we dont want
  // them to execute and start until we are ready to
  // create them and return them.
  var DetailGeneratorSingleton = (function () {
    var instance;

    function init() {
      var _detailLayer = [];
      var _stage = $('.advert');

      // NOTE: Register Builders
      // TODO: Extract this Factory and the items registered to it
      // TODO: Send this factory in to give more control allowing the
      // Generator more flexibility
      var _detailsFactory = new DetailsFactory();
      _detailsFactory.register('blue', DetailsBuilder);


      function create(msg, type) {
        // TODO: save to refer to specific attributes of detailLayer
        var detailLayer = _detailsFactory.create(type).get();
        // _position(detailLayer, left, top);
        return detailLayer;
      }

      function show(detailLayer) {
        _stage.append(detailLayer);
        _detailLayer.push(detailLayer);
      }

      function index() {
        return _detailLayer.length;
      }

      // Return public API
      return {
        index: index,
        create: create,
        add: add,
      };
    }

    return {
      getInstance: function () {
        if(!instance) {
          instance = init();
        }
        return instance;
      },
    }
  })();

  $(win.document).ready(function () {
    $('#influencer_dashboard').click(function(e) {
      console.log('E', e)
      var GenerateDetails = DetailGeneratorSingleton.getInstance();
      var detailLayer = GenerateDetails.create(
        // e target data values.
      );
      // registered and set on the page
      GenerateDetails.show(detailLayer);
    });

  });
})(window, jQuery);
