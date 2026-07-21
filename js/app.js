var app=angular.module('campus360',[]);


app.controller("dashboardcontroller",function($scope){

    $scope.collegename="FISAT";
    $scope.Name="Ananya T";
    $scope.email="ananyat@gmail.com";
    $scope.regno="007/MCA";
    $scope.dep="CA";
    $scope.course="MCA";
    $scope.totalstudents="0";

    console.log("Dashboard Contoller Loaded Successfully");
    $scope.students=[

        "Arya","Jyothika","Archana","Akshara"

    ];

    $scope.addstudent=function(){

        $scope.totalstudents++;

        $scope.showstudents=true;

        $scope.showDashboard=true;

    };



});