var app = angular.module('appoint', []);
app.controller('appointCtrl', function($scope, $window, $rootScope) {




    $scope.test = {};
    $scope.test.name = ''
    $scope.name = $window.localStorage.getItem('names');
    $scope.head = $window.localStorage.getItem('heading');
    // console.log('$scope.thomas:', $window.localStorage.getItem('names'));
    // $scope.department = $('#jelect').attr('data-text', $scope.head);
    if ($scope.head == undefined || $scope.head == '' || $scope.head == null) {
        $scope.head = 'Select department';
        $scope.department = undefined;
    }
    if ($scope.name == undefined || $scope.name == '' || $scope.name == null) {
        $scope.name = 'Select category';
        $scope.department = undefined;
    }
    // $scope.thomas = angular.element('#jelect').text();
    console.log('$scope.name:', $scope.name);
    console.log('$scope.head:', $scope.head);
    // alert($scope.name)
    $scope.newvalues = [];
    $scope.newvalues.push($scope.head);
    console.log('$scope.head:', $scope.newvalues);

    if ($scope.head == 'Select department') {
        // alert('yes it is')
        $scope.Bariatric = [{
            val: 'Select category'
        }];
        $scope.depNames = $scope.name;
    }

    $scope.data = [{
        name: $scope.head,
        disable: true,

    }, {
        name: 'Gastro Intestinal'
    }, {
        name: 'Cancer'
    }, {
        name: 'Urology'
    }, {
        name: 'Bariatric'
    }, {
        name: 'Other Procedures'
    }];
    $scope.depName = $scope.data[0].name;

    if ($scope.head == 'Bariatric') {
        $scope.Bariatric = [{
            val: 'Adjustable Gastric'
        }, {
            val: 'Bariatric Surgery'
        }, {
            val: 'Bilopancreatic Diversion'
        }, {
            val: 'Duodenal Switch'
        }, {
            val: 'Gastric Bypass Surgery'
        }, {
            val: 'Sleeve Gastrectomy'
        }];
        // console.log('Bariatric---------------------', $scope.Bariatric);
        $scope.depNames = $scope.name;
    } else if ($scope.head == 'Cancer') {
        $scope.Bariatric = [{
            val: $scope.name,
            disable: true,

        }, {
            val: 'LiverResection'
        }, {
            val: 'Malignant'
        }, {
            val: 'Whipples Procedure'
        }];
        $scope.depNames = $scope.name;
    } else if ($scope.head == 'Gastro Intestinal') {
        $scope.Bariatric = [{
            val: $scope.name,
            disable: true,

        }, {
            val: 'Antrectomy'
        }, {
            val: 'Appendectomy'
        }, {
            val: 'Bowel Resection Surgery'
        }, {
            val: 'Cholecystectomy Surgery'
        }, {
            val: 'Gallstone Removal Surgery'
        }, {
            val: 'Gallstone Removal Surgery'
        }, {
            val: 'Gastrectomy'
        }, {
            val: 'Hiatus Hernia Surgery'
        }, {
            val: 'Incisional Hernia Repair Surgery'
        }, {
            val: 'Pancreatectomy Surgery'
        }, {
            val: 'Peptic Ulcer Surgery'
        }, {
            val: 'Splenectomy Surgery'
        }];
        $scope.depNames = $scope.name;
    } else if ($scope.head == 'Urology') {
        $scope.Bariatric = [{
            val: $scope.name,
            disable: true,

        }, {
            val: 'Adrenalectomy Surgery'
        }, {
            val: 'Cystocele Repair Surgery'
        }, {
            val: 'Kidney Stone Removal'
        }, {
            val: 'Nephrectomy'
        }, {
            val: 'Pyeloplasty'
        }, {
            val: 'Radical Prostatectomy'
        }, {
            val: 'Varicocele Repair Surgery'
        }];
        $scope.depNames = $scope.name;
    } else if ($scope.head == 'Other Procedures') {
        $scope.Bariatric = [{
            val: $scope.name,
            disable: true,

        }, {
            val: 'Glossectomy Surgery'
        }, {
            val: 'Laparotomy Surgery'
        }, {
            val: 'Single Incision'
        }, {
            val: 'Varicose Veins Surgery'
        }];
        $scope.depNames = $scope.name;
    } else if ($scope.head == 'Gynacology') {
        $scope.Bariatric = [{
            val: $scope.name,
            disable: true,

        }, {
            val: 'Ectopicpregnancy'
        }, {
            val: 'Endometriosis Surgery'
        }, {
            val: 'Hysterectomy Surgery'
        }, {
            val: 'InVitro Fertilization Treatment'
        }, {
            val: 'Oophorectomy Surgery'
        }, {
            val: 'Ovarian Cysts Surgery'
        }, {
            val: 'Pelvic Inflammatory Surgery'
        }, {
            val: 'Pelvic Ultra Sound Procedure'
        }, {
            val: 'Salpingostomy Surgery'
        }];
        $scope.depNames = $scope.name;
    }
    if ($scope.name == undefined || $scope.name == '') {
        $scope.depNames = 'Select category';
        $scope.department = undefined;
    }
    $scope.check = function() {
        // alert($scope.depName);
        // $scope.depName1=$scope.Bariatric[0].name;
        if ($scope.depName == 'Bariatric') {
            $scope.Bariatric = [{
                val: 'Adjustable Gastric'
            }, {
                val: 'Bariatric Surgery'
            }, {
                val: 'Bilopancreatic Diversion'
            }, {
                val: 'Duodenal Switch'
            }, {
                val: 'Gastric Bypass Surgery'
            }, {
                val: 'Sleeve Gastrectomy'
            }];
            // console.log('Bariatric', $scope.Bariatric);
        } else if ($scope.depName == 'Cancer') {
            $scope.Bariatric = [{
                val: 'LiverResection'
            }, {
                val: 'Malignant'
            }, {
                val: 'Whipples Procedure'
            }];
            // console.log('thomasssssssssssssssssssssssssssssssss', $scope.name);
        } else if ($scope.depName == 'Gastro Intestinal') {
            $scope.Bariatric = [{
                val: 'Antrectomy'
            }, {
                val: 'Appendectomy'
            }, {
                val: 'Bowel Resection Surgery'
            }, {
                val: 'Cholecystectomy Surgery'
            }, {
                val: 'Gallstone Removal Surgery'
            }, {
                val: 'Gallstone Removal Surgery'
            }, {
                val: 'Gastrectomy'
            }, {
                val: 'Hiatus Hernia Surgery'
            }, {
                val: 'Incisional Hernia Repair Surgery'
            }, {
                val: 'Pancreatectomy Surgery'
            }, {
                val: 'Peptic Ulcer Surgery'
            }, {
                val: 'Splenectomy Surgery'
            }];
            // console.log('thomasssssssssssssssssssssssssssssssss', $scope.name);

        } else if ($scope.depName == 'Urology') {
            $scope.Bariatric = [{
                val: 'Adrenalectomy Surgery'
            }, {
                val: 'Cystocele Repair Surgery'
            }, {
                val: 'Kidney Stone Removal'
            }, {
                val: 'Nephrectomy'
            }, {
                val: 'Pyeloplasty'
            }, {
                val: 'Radical Prostatectomy'
            }, {
                val: 'Varicocele Repair Surgery'
            }];
            // console.log('thomasssssssssssssssssssssssssssssssss', $scope.name);

        } else if ($scope.depName == 'Other Procedures') {
            $scope.Bariatric = [{
                val: 'Glossectomy Surgery'
            }, {
                val: 'Laparotomy Surgery'
            }, {
                val: 'Single Incision'
            }, {
                val: 'Varicose Veins Surgery'
            }];
        } else if ($scope.depName == 'Gynacology') {
            $scope.Bariatric = [{
                val: 'Ectopicpregnancy'
            }, {
                val: 'Endometriosis Surgery'
            }, {
                val: 'Hysterectomy Surgery'
            }, {
                val: 'InVitro Fertilization Treatment'
            }, {
                val: 'Oophorectomy Surgery'
            }, {
                val: 'Ovarian Cysts Surgery'
            }, {
                val: 'Pelvic Inflammatory Surgery'
            }, {
                val: 'Pelvic Ultra Sound Procedure'
            }, {
                val: 'Salpingostomy Surgery'
            }];
        }
        $scope.depNames = $scope.Bariatric[0].val;
    };

    $scope.$watch('depName', function(v) {
        // console.log('depName change', v);
        // console.log('$scope.name change', $scope.name);
    });

    // console.log('$scope.name', $scope.name);
    // console.log('$scope.head', $scope.head);
    $scope.send = function() {
        // $scope.department = $('#jelect').attr('data-text');
        // console.log('nameDep:', $scope.department);
        $scope.department = $scope.depName;
        // console.log('nameDep:', $scope.department);
    };

    if ($scope.department == 'Cancer') {

        // console.log('Bariatric', $scope.Bariatric);
    };

    $scope.check1 = function() {


    }
    $scope.reset = function() {
        // alert('hoi')
        $window.localStorage.clear();
        // $window.location.href = '../appointment-form.html';
    };

});
