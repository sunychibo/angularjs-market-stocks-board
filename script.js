let stockBoard = angular.module('stockBoard', ['ngStorage']);
const stockTickers = [
  { ticker: 'BTI', zScore: 1.31, target: 35 },
  { ticker: 'PM', zScore: 4.26, target: 70 },
  { ticker: 'BBBY', zScore: 3.37, target: 10 },
  { ticker: 'SWN', zScore: 0.79, target: 2 },
  { ticker: 'PRU', zScore: null, target: 65 },
  { ticker: 'ABBV', zScore: 2.11, target: 65 },
  { ticker: 'NEM', zScore: 1.83, target: 30 },
  { ticker: 'WRK', zScore: 1.28, target: 33 },
  { ticker: 'KR', zScore: 3.78, target: 24 },
  { ticker: 'XEC', zScore: 1.6, target: 45 },
  { ticker: 'AMD', zScore: 10.83, target: 15 },
  { ticker: 'INTC', zScore: 4.23, target: 25 },
  { ticker: 'ACH', zScore: 1.15, target: 7 },
  { ticker: 'AIR', zScore: 3.63, target: 18 },
  { ticker: 'IVZ', zScore: 0.64, target: 16 },
  { ticker: 'T', zScore: 1.11, target: 25 },
  { ticker: 'XOM', zScore: 3.62, target: 65 },
  { ticker: 'PBCT', zScore: null, target: 14 },
  { ticker: 'KEY', zScore: null, target: 13 },
  { ticker: 'PFE', zScore: 2.72, target: 30 },
  { ticker: 'RF', zScore: null, target: 9 },
  { ticker: 'LRCX', zScore: 6.72, target: 80 },
  { ticker: 'TOT', zScore: 1.51, target: 40 },
  { ticker: 'GSH', zScore: 2.83, target: 15.5 },
  { ticker: 'CHL', zScore: 2.3, target: 40 },
  { ticker: 'SHI', zScore: 4.59, target: 25 },
  { ticker: 'AOS', zScore: 6.18, target: 45 },
  { ticker: 'BMI', zScore: 14.6, target: 25 },
  { ticker: 'BKR', zScore: 1.5, target: 23 },
  { ticker: 'BBSI', zScore: 2.22, target: 25 },
  { ticker: 'BBY', zScore: 4.22, target: 25 },
  { ticker: 'BYND', zScore: 40.6, target: 18 },
  { ticker: 'BIG', zScore: 3.35, target: 20 },
  { ticker: 'CHRW', zScore: 7.73, target: 60 },
  { ticker: 'COG', zScore: 3.92, target: 15 },
  { ticker: 'WHD', zScore: 7.07, target: 24 },
  { ticker: 'CAH', zScore: 3.71, target: 38 },
  { ticker: 'CARG', zScore: 20.75, target: 30 },
  { ticker: 'CCL', zScore: 2.35, target: 30 },
  { ticker: 'CRS', zScore: 2.74, target: 30 },
  { ticker: 'DHI', zScore: 5.36, target: 32 },
  { ticker: 'DRI', zScore: 2.18, target: 63 },
  { ticker: 'DLX', zScore: 2.16, target: 26 },
  { ticker: 'DKS', zScore: 2.51, target: 30 },
  { ticker: 'EMN', zScore: 2.24, target: 60 },
  { ticker: 'ETN', zScore: 2.94, target: 47 },
  { ticker: 'ECA', zScore: 0.99, target: 4 },
  { ticker: 'HAL', zScore: 2.86, target: 16 },
  { ticker: 'HOG', zScore: 1.41, target: 15 },
  { ticker: 'PEAK', zScore: 1.43, target: 22 },
  { ticker: 'HP', zScore: 3.16, target: 40 },
  { ticker: 'INGR', zScore: 3.54, target: 75 },
  { ticker: 'JNJ', zScore: 4.29, target: 120 },
  { ticker: 'JCI', zScore: 1.81, target: 34 },
  { ticker: 'JNPR', zScore: 1.67, target: 22 },
  { ticker: 'KALU', zScore: 3.57, target: 85 },
  { ticker: 'KMT', zScore: 3.5, target: 20 },
  { ticker: 'KDP', zScore: 1.2, target: 25 },
  { ticker: 'KIM', zScore: 0.97, target: 14 },
  { ticker: 'LEA', zScore: 3.14, target: 115 },
  { ticker: 'LEG', zScore: 3.31, target: 22 },
  { ticker: 'LEVI', zScore: 4.42, target: 17 },
  { ticker: 'MAN', zScore: 4.07, target: 55 },
  { ticker: 'MRO', zScore: 1.82, target: 11 },
  { ticker: 'FIZZ', zScore: 11.9, target: 45 },
  { ticker: 'NWL', zScore: 0.62, target: 15 },
  { ticker: 'NKE', zScore: 8.22, target: 70 },
  { ticker: 'OC', zScore: 2.2, target: 45 },
  { ticker: 'O', zScore: 2.08, target: 55 },
  { ticker: 'PDCO', zScore: 3.13, target: 19 },
  { ticker: 'PBF', zScore: 3.43, target: 22 },
  { ticker: 'RL', zScore: 3.86, target: 62 },
  { ticker: 'RJF', zScore: null, target: 75 },
  { ticker: 'RTN', zScore: 4.24, target: 150 },
  { ticker: 'REG', zScore: 1.3, target: 57 },
  { ticker: 'SNY', zScore: 1.85, target: 40 },
  { ticker: 'SLB', zScore: 1.56, target: 31 },
  { ticker: 'TAK', zScore: 0.98, target: 17 },
  { ticker: 'TPR', zScore: 1.95, target: 25 },
  { ticker: 'TDS', zScore: 1.38, target: 24 },
  { ticker: 'UNM', zScore: null, target: 27 },
  { ticker: 'VTR', zScore: 0.95, target: 52 },
  { ticker: 'WBA', zScore: 3.62, target: 45 },
  { ticker: 'WMT', zScore: 4.11, target: 60 },
  { ticker: 'WELL', zScore: 1.37, target: 65 },
  { ticker: 'WAL', zScore: null, target: 42 },
  { ticker: 'XLNX', zScore: 8.94, target: 40 },
  { ticker: 'XYL', zScore: 3.24, target: 40 },
  { ticker: 'ZION', zScore: null, target: 20 },
  { ticker: 'QCOM', zScore: 4.2, target: 45 },
  { ticker: 'CVX', zScore: 3.2, target: 80 }
];

const apiKey = 'e1757cbd74185dab17656c0488f934f6';
stockBoard.controller('StockBoardController', function ($scope, $http, $localStorage) {
  $scope.stocks = [];

  function getStockData(pieceOfPath, object, stockDataStorage) {
    $http({
      method: 'GET',
      url: `https://financialmodelingprep.com/api/v3/${pieceOfPath}/${object.ticker}?apikey=${apiKey}`
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
    stockTickers.forEach((object, index) => {
      setTimeout(function(){
        let stockDataStorage = {};
        getStockData('company/profile', object, stockDataStorage);
        getStockData('financial-ratios', object, stockDataStorage);
        stockDataStorage.zScore = object.zScore;
        stockDataStorage.priceTarget = object.target;
        $scope.stocks.push(stockDataStorage);
      }, 1000 * (index + 1));
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