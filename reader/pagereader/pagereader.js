/*global angular*/
/*jslint node: true */
/*jslint plusplus: true*/

'use strict';

var app = angular.module('readerApp', ['ui.bootstrap', 'ngCookies']);

app.controller('readerController', function ($scope, $http, $location, $window, $document, $cookies) {

    $scope.getPageUrl = function (p) {
        var url;
        url = "/pagereader/" + $scope.documentId + "?page=" + p + "&width=" + $scope.IMAGE_MAX_NATIVE_WIDTH;
        if ($scope.revProxy) {
            url = "/" + $scope.revProxy + url;
        }
        return url;
    };

    $scope.loadPage = function (firstCall) {
        var bookmark, imgUrl = $scope.getPageUrl($scope.currPageNb),
            expireDate = new Date();
        if (firstCall) {
            imgUrl = imgUrl + '&opening=true';
        }
        $scope.isLoading = true;
        $scope.comicImg.src = imgUrl;

        // store bookmark
        $http.put($scope.buildBookmarkApiUrl() + $scope.documentId, $scope.currPageNb, {
            withCredentials: true
        });        
    };

    $scope.nextPage = function () {
        $scope.currentWay = $scope.WAY.FORWARD;
        if (($scope.prevPageType === $scope.PAGETYPE.LEFT && $scope.pageSplit === $scope.SPLIT.L2R) || ($scope.prevPageType === $scope.PAGETYPE.RIGHT && $scope.pageSplit === $scope.SPLIT.R2L)) {
            $scope.prevPageType = $scope.drawContent();
            //            $scope.prevPageType = $scope.applyPageSplit();
        } else {
            if ($scope.currPageNb < $scope.nbPages - 1) {
                $scope.currPageNb = $scope.currPageNb + 1;
                $scope.loadPage();
            }
        }

    };

    $scope.previousPage = function () {
        $scope.currentWay = $scope.WAY.BACKWARD;
        if (($scope.prevPageType === $scope.PAGETYPE.RIGHT && $scope.pageSplit === $scope.SPLIT.L2R) || ($scope.prevPageType === $scope.PAGETYPE.LEFT && $scope.pageSplit === $scope.SPLIT.R2L)) {
            $scope.prevPageType = $scope.drawContent();
            //            $scope.prevPageType = $scope.applyPageSplit();
        } else {
            if ($scope.currPageNb > 0) {
                $scope.currPageNb = $scope.currPageNb - 1;
                $scope.loadPage();
            }
        }
    };

    $scope.toggleMenu = function () {
        $scope.displayMenu = !$scope.displayMenu;
    };

    $scope.imgLoaded = function () {
        // hide loading spinner
        $scope.isLoading = false;
        $scope.prevPageType = $scope.PAGETYPE.SINGLE;
        ///        $scope.prevPageType = $scope.applyPageSplit();
        $window.scrollTo(0, 0);
        $scope.prevPageType = $scope.drawContent();
        $scope.preloadNextPages();
        $scope.$apply();
    };

    $scope.goToPage = function () {
        var goToNb = $window.prompt('Choose page number', '');
        if (goToNb !== null) {
            goToNb = parseInt(goToNb, 10);
            if ((goToNb <= $scope.nbPages) && (goToNb > 0) && (goToNb - 1 !== $scope.currPageNb)) {
                $scope.currentWay = $scope.WAY.FORWARD;
                $scope.currPageNb = goToNb - 1;
                $scope.loadPage();
            }
        }
    };

    $scope.handleKey = function (event) {
        var charCode = event.which || event.keyCode;
        if (charCode === 37 || charCode === 33) {
            // left arrow
            $scope.previousPage();
        } else if (charCode === 39 || charCode === 34) {
            // right arrow
            $scope.nextPage();
        } else if (charCode === 27) {
            // escape
            event.preventDefault(); // http://stackoverflow.com/questions/7218581/esc-key-not-getting-recognized-in-firefox
            history.back();
        } else if (charCode === 77) {
            // 'm'
            $scope.displayMenu = !$scope.displayMenu;
        } else if (charCode === 71) {
            // 'g'
            $scope.goToPage();
        } else if (charCode === 32) {
            // space
            if ($window.pageYOffset + $window.innerHeight >= $scope.getDocHeight()) {
                $scope.nextPage();
            }
        }
    };

    $scope.getDocHeight = function () {
        var dcmt = document;
        return Math.max(
            dcmt.body.scrollHeight,
            dcmt.documentElement.scrollHeight,
            dcmt.body.offsetHeight,
            dcmt.documentElement.offsetHeight,
            dcmt.body.clientHeight,
            dcmt.documentElement.clientHeight
        );
    };

    $scope.updatePageSize = function () {
        switch ($scope.pageSize) {
            case 0:
                $scope.pageStyle = "fillWidth";
                break;
            case 1:
                $scope.pageStyle = "fillHeight";
                break;
            case 2:
                $scope.pageStyle = "original";
                break;
        }
        //        $scope.applyPageSplit();
    };


    $scope.drawContent = function () {
        var canvas = document.getElementById('contentCanvas'),
            context = canvas.getContext('2d'),
            newPageType,
            showLeftPage;

        if ($scope.comicImg.width > $scope.comicImg.height && $scope.pageSplit !== 2) { // '2' is 'no split'

            // determine which page to show (left or right)
            if ($scope.prevPageType === $scope.PAGETYPE.SINGLE) {
                if ($scope.currentWay === $scope.WAY.FORWARD) {
                    showLeftPage = $scope.pageSplit === $scope.SPLIT.L2R;
                } else {
                    showLeftPage = $scope.pageSplit === $scope.SPLIT.R2L;
                }
            } else {
                if ($scope.prevPageType === $scope.PAGETYPE.LEFT) {
                    if ($scope.currentWay === $scope.WAY.FORWARD) {
                        showLeftPage = $scope.pageSplit === $scope.SPLIT.R2L;
                    } else {
                        showLeftPage = $scope.pageSplit === $scope.SPLIT.L2R;
                    }
                } else {
                    if ($scope.currentWay === $scope.WAY.FORWARD) {
                        showLeftPage = $scope.pageSplit === $scope.SPLIT.R2L;
                    } else {
                        showLeftPage = $scope.pageSplit === $scope.SPLIT.L2R;
                    }
                }
            }

            canvas.width = $scope.comicImg.naturalWidth / 2;
            canvas.height = (($scope.comicImg.naturalWidth / 2) * $scope.comicImg.naturalHeight) / $scope.comicImg.naturalWidth;
            if (showLeftPage) {
                canvas.width = $scope.comicImg.naturalWidth / 2;
                canvas.height = $scope.comicImg.naturalHeight;
                context.drawImage($scope.comicImg, 0, 0, $scope.comicImg.naturalWidth, $scope.comicImg.naturalHeight, 0, 0, $scope.comicImg.naturalWidth, $scope.comicImg.naturalHeight);
                newPageType = $scope.PAGETYPE.LEFT;
            } else {
                canvas.width = $scope.comicImg.naturalWidth / 2;
                canvas.height = $scope.comicImg.naturalHeight;
                context.drawImage($scope.comicImg, 0, 0, $scope.comicImg.naturalWidth, $scope.comicImg.naturalHeight, -$scope.comicImg.naturalWidth / 2, 0, $scope.comicImg.naturalWidth, $scope.comicImg.naturalHeight);
                newPageType = $scope.PAGETYPE.RIGHT;
            }

        } else {

            canvas.width = $scope.comicImg.naturalWidth;
            canvas.height = $scope.comicImg.naturalHeight;
            context.drawImage($scope.comicImg, 0, 0, $scope.comicImg.naturalWidth, $scope.comicImg.naturalHeight, 0, 0, $scope.comicImg.naturalWidth, $scope.comicImg.naturalHeight);
            newPageType = $scope.PAGETYPE.SINGLE;
        }
        return newPageType;
    };


    $scope.preloadNextPages = function () {
        var p = 0,
            i = 0,
            images = [];
        for (i = 0; i < $scope.PRELOAD_IMG_NB; i++) {
            p = $scope.currPageNb + i + 1;
            if (p < $scope.nbPages - 1) {
                images[i] = new Image();
                images[i].src = $scope.getPageUrl(p);
            } else {
                break;
            }
        }
    };

    $scope.writeReaderSettings = function () {
        var expireDate = new Date();
        expireDate.setFullYear(expireDate.getFullYear() + 1);
        $cookies.put($scope.READER_SETTINGS, $scope.pageSize + '#' + $scope.pageSplit, {
            'expires': expireDate,
            'samesite': 'lax'
        });
    };

    $scope.buildBookmarkApiUrl = function () {
        var bookmarkUrl = $scope.BOOKMARK_API_URL;
        if ($scope.revProxy && $scope.revProxy !== "") {
            bookmarkUrl = '/' + $scope.revProxy + bookmarkUrl;
        }
        bookmarkUrl += 'docId=';
        return bookmarkUrl;
    };

    ////////////////////
    // INITIALIZATION //
    ////////////////////

    // a few constants
    $scope.SPLIT = {
        L2R: 0,
        R2L: 1,
        NONE: 2
    };
    $scope.PAGETYPE = {
        SINGLE: 0,
        LEFT: 1,
        RIGHT: 2
    };
    $scope.WAY = {
        FORWARD: 0,
        BACKWARD: 1
    };
    $scope.READER_SETTINGS = 'PageReaderSettings';
    $scope.PRELOAD_IMG_NB = 2;
    $scope.IMAGE_MAX_NATIVE_WIDTH = 1536;
    $scope.BOOKMARK_FINISHED = 'FINISHED';
    $scope.BOOKMARK_API_URL = "/user-api/bookmark?";


    // get URL parameters
    var readerSettings, readerSettingsArray, bookmark, searchObject = $location.search();
    $scope.documentId = searchObject.docId;
    $scope.currPageNb = parseInt(searchObject.startIndex, 10);
    $scope.nbPages = parseInt(searchObject.nbPages, 10);
    $scope.revProxy = searchObject.revProxy;

    // default values
    $scope.comicImg = new Image();
    $scope.comicImg.onload = $scope.imgLoaded;
    $scope.displayMenu = false;
    $scope.displayLoadingMsg = false;
    $scope.isLoading = false;
    $scope.displayGoToField = true;
    $scope.pageSize = 0;
    $scope.pageStyle = "fillWidth";
    $scope.pageSplit = $scope.SPLIT.L2R;
    $scope.currentWay = $scope.WAY.FORWARD;
    $scope.prevPageType = $scope.PAGETYPE.SINGLE;

    readerSettings = $cookies.get($scope.READER_SETTINGS);
    if (readerSettings) {
        readerSettingsArray = readerSettings.split('#');
        $scope.pageSize = parseInt(readerSettingsArray.shift(), 10);
        $scope.pageSplit = parseInt(readerSettingsArray.shift(), 10);
    }

    // add listeners
    $scope.$watch('pageSize', $scope.updatePageSize);
    $scope.$watch('pageSize', $scope.writeReaderSettings);
    $scope.$watch('pageSplit', $scope.drawContent);
    $scope.$watch('pageSplit', $scope.writeReaderSettings);

    // get bookmark then load page    
    $http.get($scope.buildBookmarkApiUrl() + $scope.documentId, {
        withCredentials: true
    }).then(function (response) {
        if (response.status === 200) {
            bookmark = response.data;
            $scope.currPageNb = parseInt(bookmark, 10);
        }
        $scope.loadPage(true);
    }, function (response) {
        // load page even in case of error
        $scope.loadPage(true);
    });
    
    // END INITIALIZATION
});
