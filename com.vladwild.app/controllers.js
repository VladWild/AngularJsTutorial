'use strict';

/*Controllers*/
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.title = 'Phones';
    $scope.phones = [
        {
            'name': 'Samsung Galaxy Tab',
            'snippet': 'The Samsung Galaxy Tab brings you an ultra-mobile entertainment experience through its 7 display',
            'status': true
        },
        {
            'name': 'Samsung Galaxy S phone',
            'snippet': 'The Samsung Showcase delivers a cinema quality experience like you never seen before.',
            'status': false
        },
        {
            'name': 'DROID 2 Global by Motorola',
            'snippet': 'The first smartphone with a 1.2 GHz processor and global capabilities.',
            'status': true
        }
    ];

    $scope.today = new Date();

    //������ �� ������ � �������
    $scope.searchAndStatus = function (phoneItem) {
        return phoneItem.name.indexOf($scope.searchPhone) > -1 && phoneItem.status;
    };

    //-- ����������

    var titleSort = ['Sort Descending', 'Sort Ascending']
    $scope.titleSort = titleSort[1];

    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function (fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
            $scope.titleSort = $scope.titleSort === titleSort[0] ? titleSort[1] : titleSort[0];
        } else {
            //������, ����� ������ ����� �� ���������
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    }
});