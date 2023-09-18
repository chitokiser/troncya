/******/ (function(modules) { // webpackBootstrap
/******/    // 모듈 로딩, 번들링 된 파일의 각 모듈에 대한 정보와 로직
/******/ })({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ (function(module) {

    eval("const TronWeb = require('tronweb');\nconst axios = require('axios');\n\nconst contractAbi = {\n  cyadex: [\n    \"function getprice() public view returns (uint256)\"\n  ],\n};\n\nconst contractAddress = {\n  cyadexAddr: \"TK7pN4Nrnttjirrjdp6vTWVi2Tp3pw6ksL\"\n};\n\nconst tronWeb = new TronWeb({\n  fullHost: 'https://api.trongrid.io',\n  headers: { \"TRON-PRO-API-KEY\": '0de2a20b-8ac7-4092-9ff4-75d9f9227056' },\n  privateKey: 'c4cc526ccd122b6f044f82fa87f1349b3380e80b04535ea17fcfde97a4e1eb2f'\n});\n\nasync function topDataSync() {\n  // BNB Price\n  const responseBinanceTicker = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=TRXUSDT');\n  const bnbPrice = parseFloat(responseBinanceTicker.data.price);\n  document.getElementById(\"bPrice\").innerHTML = bnbPrice.toFixed(6);\n  document.getElementById(\"cPrice\").innerHTML = bnbPrice.toFixed(6);\n\n  // 스마트 계약 인스턴스 생성\n  const cyadexContract = await tronWeb.contract(contractAbi.cyadex).at(contractAddress.cyadexAddr);\n\n  // 스마트 계약 메서드 호출\n  const cyadexPrice = await cyadexContract.getprice().call();\n\n  // cyadexPrice 값을 웹 페이지의 DOM 요소에 표시\n  document.getElementById(\"cyaPrice2\").innerHTML = cyadexPrice.toString();\n}\n\ntopDataSync();\n\n//# sourceURL=webpack:///./src/index.js?");

    /***/ })
    
    /******/ });
    