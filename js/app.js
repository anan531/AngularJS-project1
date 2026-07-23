var app=angular.module('campus360',[]);


app.controller("dashboardcontroller",function($scope){

    $scope.collegename="FIsat";
    $scope.Name="Ananya T";
    $scope.email="ananyat@gmail.com";
    $scope.regno="007/MCA";
    $scope.dep="CA";
    $scope.course="MCA";
    $scope.totalstudents=1200;

    console.log("Dashboard Contoller Loaded Successfully");
    $scope.students=[

        "Arya","Jyothika","Archana","Akshara"

    ];

        $scope.fees=25000;
        $scope.today=new Date();
        $scope.departments=[

            "CSE","MCA","MBA","EEE","ECE"

        ];

        $scope.selectedDepartment="CSE";
        $scope.isDisabled=true;
        $scope.allowAdmission=function(){

            $scope.isDisabled=false;

        };


        $scope.isReadOnly=true;
        $scope.toggleReadOnly=function(){

            $scope.isReadOnly=!$scope.isReadOnly;

        }

$scope.student={};

    $scope.addstudent=function(){

        $scope.totalstudents++;

        $scope.showstudents=true;

        $scope.showDashboard=true;



    };



});