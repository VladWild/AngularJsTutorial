'use strict';

/*Controllers*/
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
        {
            'name': 'Samsung Galaxy Tab',
            'snippet': 'The Samsung Galaxy Tab brings you an ultra-mobile entertainment experience through its 7 display'
        },
        {
            'name': 'Samsung Galaxy S phone',
            'snippet': 'The Samsung Showcase delivers a cinema quality experience like you never seen before.'
        },
        {
            'name': 'DROID 2 Global by Motorola',
            'snippet': 'The first smartphone with a 1.2 GHz processor and global capabilities.'
        }
    ];
});