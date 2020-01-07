let stockBoard = angular.module('stockBoard', ['ngStorage']);
const stockTickers = [
  { ticker: 'BTI', target: 35 },
  { ticker: 'PM', target: 70 },
  { ticker: 'BBBY', target: 10 },
  { ticker: 'SWN', target: 2 },
  { ticker: 'PRU', target: 65 },
  { ticker: 'ABBV', target: 65 },
  { ticker: 'NEM', target: 30 },
  { ticker: 'WRK', target: 33 },
  { ticker: 'KR', target: 24 },
  { ticker: 'XEC', target: 45 },
  { ticker: 'AMD', target: 15 },
  { ticker: 'INTC', target: 25 },
  { ticker: 'ACH', target: 7 },
  { ticker: 'AIR', target: 18 },
  { ticker: 'IVZ', target: 16 },
  { ticker: 'T', target: 25 },
  { ticker: 'XOM', target: 65 },
  { ticker: 'PBCT', target: 14 },
  { ticker: 'KEY', target: 13 },
  { ticker: 'PFE', target: 30 },
  { ticker: 'RF', target: 9 },
  { ticker: 'LRCX', target: 80 },
  { ticker: 'TOT', target: 40 },
  { ticker: 'GSH', target: 15.5 },
  { ticker: 'CHL', target: 40 },
  { ticker: 'SHI', target: 25 },
  { ticker: 'AOS', target: 45 },
  { ticker: 'BMI', target: 25 },
  { ticker: 'BKR', target: 23 },
  { ticker: 'BBSI', target: 25 },
  { ticker: 'BBY', target: 25 },
  { ticker: 'BYND', target: 18 },
  { ticker: 'BIG', target: 20 },
  { ticker: 'CHRW', target: 60 },
  { ticker: 'COG', target: 15 },
  { ticker: 'WHD', target: 24 },
  { ticker: 'CAH', target: 38 },
  { ticker: 'CARG', target: 30 },
  { ticker: 'CCL', target: 30 },
  { ticker: 'CRS', target: 30 },
  { ticker: 'DHI', target: 32 },
  { ticker: 'DRI', target: 63 },
  { ticker: 'DLX', target: 26 },
  { ticker: 'DKS', target: 30 },
  { ticker: 'EMN', target: 60 },
  { ticker: 'ETN', target: 47 },
  { ticker: 'ECA', target: 4 },
  { ticker: 'HAL', target: 16 },
  { ticker: 'HOG', target: 15 },
  { ticker: 'PEAK', target: 22 },
  { ticker: 'HP', target: 40 },
  { ticker: 'INGR', target: 75 },
  { ticker: 'JNJ', target: 120 },
  { ticker: 'JCI', target: 34 },
  { ticker: 'JNPR', target: 22 },
  { ticker: 'KALU', target: 85 },
  { ticker: 'KMT', target: 20 },
  { ticker: 'KDP', target: 25 },
  { ticker: 'KIM', target: 14 },
  { ticker: 'LEA', target: 115 },
  { ticker: 'LEG', target: 22 },
  { ticker: 'LEVI', target: 17 },
  { ticker: 'MAN', target: 55 },
  { ticker: 'MRO', target: 11 },
  { ticker: 'FIZZ', target: 45 },
  { ticker: 'NWL', target: 15 },
  { ticker: 'NKE', target: 70 },
  { ticker: 'OC', target: 45 },
  { ticker: 'O', target: 55 },
  { ticker: 'PDCO', target: 19 },
  { ticker: 'PBF', target: 22 },
  { ticker: 'RL', target: 62 },
  { ticker: 'RJF', target: 75 },
  { ticker: 'RTN', target: 150 },
  { ticker: 'REG', target: 57 },
  { ticker: 'SNY', target: 40 },
  { ticker: 'SLB', target: 31 },
  { ticker: 'TAK', target: 17 },
  { ticker: 'TPR', target: 25 },
  { ticker: 'TDS', target: 24 },
  { ticker: 'UNM', target: 27 },
  { ticker: 'VTR', target: 52 },
  { ticker: 'WBA', target: 45 },
  { ticker: 'WMT', target: 60 },
  { ticker: 'WELL', target: 65 },
  { ticker: 'WAL', target: 42 },
  { ticker: 'XLNX', target: 40 },
  { ticker: 'XYL', target: 40 },
  { ticker: 'ZION', target: 20 },
  { ticker: 'QCOM', target: 45 }
];

stockBoard.controller('StockBoardController', function ($scope, $http, $localStorage) {
  $scope.stocks = [];

  function getStockData(pieceOfPath, object, stockDataStorage) {
    $http({
      method: 'GET',
      url: `https://financialmodelingprep.com/api/v3/${pieceOfPath}/${object.ticker}`
    }).then(function successCallback(response) {
      if (pieceOfPath === 'company/profile') {
        if (Object.keys(response.data).length) {
          stockDataStorage.companyProfile = response;
          stockDataStorage.targetRest = (stockDataStorage.companyProfile.data.profile.price - object.target).toFixed(2);
          if (stockDataStorage.targetRest <= 5) {
            stockDataStorage.cssClass = 'cloose';
            if (stockDataStorage.targetRest <= 2) {
              stockDataStorage.cssClass = 'soclose';
            };
          };
        } else {
          stockDataStorage.cssClass = 'no-data';
          stockDataStorage.companyProfile = response;
          stockDataStorage.companyProfile.data.symbol = object.ticker;
        }
      }
      if (pieceOfPath === 'financial-ratios') {
        stockDataStorage.financialRatios = response;
      }
    }, function errorCallback(response) {
      console.error('Get request error', response);
    });
  }

  function fetchStocksData(stockTickers) {
    $scope.stocks = [];
    stockTickers.forEach(object => {
      let stockDataStorage = {};
      getStockData('company/profile', object, stockDataStorage);
      getStockData('financial-ratios', object, stockDataStorage);
      stockDataStorage.priceTarget = object.target;
      $scope.stocks.push(stockDataStorage);
    });
    $localStorage.stocks = $scope.stocks;
  }

  $scope.fetchFreshData = () => {
    $localStorage.stocks = [];
    fetchStocksData(stockTickers);
  }

  if ($localStorage.stocks) {
    $scope.stocks = $localStorage.stocks;
  } else {
    fetchStocksData(stockTickers);
  }
});