console.log('scripts loaded');

var token = $('#api-token').val();
$.ajaxSetup({
  headers: {
    "token": token
  }
});

var app = app || {};

app.Trade = Backbone.Model.extend({
  defaults: {
    'company_symbol': 'tbd',
    'number_of_shares': 0,
    'share_purchase_price': 0,
    'trade_type': 'tbd'
  }
});

app.TradeCollection = Backbone.Collection.extend({
  model: app.Trade,
  url: '/api/trades'
});

app.TradeView = Backbone.View.extend({
  tagName: 'tr',
  className: 'trade',
  template: _.template( $('#trade-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  }
});

app.TradeListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo( this.collection, 'add', this.render );
  },
  render: function(){
    this.$el.empty();
    this.$el.append('<tr class="header-row"><td>Symbol</td><td>Number of Shares</td><td>Purchase Price</td><td>Trade Type</td></tr>');
    var trades = this.collection.models;
    var view;
    for ( var i = 0; i < trades.length; i++ ){
      view = new app.TradeView({
        model: trades[ i ]
      });
      view.render();
      this.$el.append( view.$el );
    }
  }
});

app.trades = new app.TradeCollection();

app.tradePainter = new app.TradeListView({
  collection: app.trades,
  el: $('#trades-table')
});

app.trades.fetch();


// Stock Backbone Models/Views

app.Stock = Backbone.Model.extend({
    initialize: function(options)   {
      if (options.stock_symbol)
      this.stock_symbol = options.stock_symbol;
        },
    url: function()
    {
        return "http://dev.markitondemand.com/Api/v2/Quote?symbol="+this.stock_symbol;
    },
});

app.StockCollection = Backbone.Collection.extend({
  model: app.Stock,
  url: this.model.url()
});



app.StockView = Backbone.View.extend({
  tagName: 'tr',
  className: 'stock',
  template: _.template( $('#stock-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events: {
        'click button' : 'getstocks'
    },
  getstocks: function() {

          var stockSymbol = this.$el.find('input').val();
          var stocks = new app.StockCollection({stock_symbol: stock_symbol});

          stocks.fetch();
      }
});
