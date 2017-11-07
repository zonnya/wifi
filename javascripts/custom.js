


$(document).ready(function () {
    var win_w = $('.body-wrap').width();
    var win_h = $(window).height();

    $('.gamburger').click(function(){
      $(this).toggleClass('open');
      $('.gamburger__content').toggleClass('open');
      return false;
    });

    $('.gamburger__close').click(function(){
      $('.gamburger').toggleClass('open');
      $('.gamburger__content').toggleClass('open');
      return false;
    });




  // google.charts.load("current", {packages:["corechart"]});
      // google.charts.setOnLoadCallback(drawChart);
      // function drawChart() {
      //   var data = google.visualization.arrayToDataTable([
      //     ['Task', 'percent'],
      //     ['ICO tokensale', 33],
      //     ['pre-ICO tokensale', 10],
      //     ['заморожено на 1 год', 39],
      //     ['bounty program', 3],
      //     ['advisers', 3],
      //     ['founders', 7],
      //     ['team', 5]
      //   ]);

      //   var options = {
      //     pieHole: 0.4,
      //     backgroundColor: "transparent",
      //     legend: 'none',
      //     tooltip: { trigger: 'none' },
      //     chartArea: {
      //       left: 0,
      //       top: 0,
      //       width: '100%',
      //       height: '100%',
      //     },
      //     slices: {
      //       {color: "#ffffff"
      //     },
      //     pieSliceTextStyle:{
      //       color: "#ffffff"
      //     }

      //   };

      //   var chart = new google.visualization.PieChart(document.getElementById('token__chart_1'));
      //   chart.draw(data, options);
      // }

    if($('#token__chart_1').length){
        $('#token__chart_1').highcharts({
            chart: {
                renderTo: 'container',
                type: 'pie',
                spacing:[0, 0, 0, 0 ],
                backgroundColor: 'transparent',
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false

            },

            colors: ['transparent'],
            credits: {
                enabled: false
            },

            title: {
                text: ''
            },
                  
            tooltip: {
                enabled: false,
                formatter: function () {
                    return '<b>' + this.point.name + '</b>';
                }
            },

            series: [{
                data: [
                    {x:'заморожено на 1 год',  y:39, id:"token__chart_1_pie_3"},
                    {x:'ICO tokensale', y:33, id:"token__chart_1_pie_1"},
                    {x:'pre-ICO tokensale',  y:10, id:"token__chart_1_pie_2"},
                    {x:'founders',  y:7, id:"token__chart_1_pie_6"},
                    {x:'bounty program',  y:3, id:"token__chart_1_pie_4"},
                    {x:'advisers',  y:3, id:"token__chart_1_pie_5"},
                    {x:'team',  y:5, id:"token__chart_1_pie_7"},
                ],
                innerSize: '40%',
                states: {
                    hover: {
                      color: '#3178d8'
                    }
                },
                point:{
                  events: {
                    mouseOver: function (event) {
                      var chart_item = this.id;
                      $('.token__text_block [for="' + chart_item + '"]').addClass('hover');
                    },

                    mouseOut: function (event) {
                        var chart_item = this.id;
                        $('.token__text_block [for="' + chart_item + '"]').removeClass('hover');
                    }
                  }
                }
            }],
            plotOptions: {
                pie: {
                    dataLabels: {
                        distance: -30,                    
                        enabled: true,
                        format: '{y}%',
                        connectorPadding: 0,
                        y: -6,
                        style: {
                          color: "#ffffff",
                          textOutline: '0',
                          fontWeight: "light",
                          fontSize: "16px"
                        }
                    },
               
                },            
            }
        });
    };

    if($('#token__chart_2').length){
        $('#token__chart_2').highcharts({
            chart: {
                renderTo: 'container',
                type: 'pie',
                spacing:[0, 0, 0, 0 ],
                backgroundColor: 'transparent',
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false

            },

            colors: ['transparent'],
            credits: {
                enabled: false
            },

            title: {
                text: ''
            },
                  
            tooltip: {
                enabled: false,
                formatter: function () {
                    return '<b>' + this.point.name + '</b>';
                }
            },

            series: [{
                data: [
                    {x:'Разработка программного обеспечения',  y:10, id:"token__chart_2_pie_2"},
                    {x:'Привлечение рекламодателей',  y:15, id:"token__chart_3_pie_3"},
                    {x:'Непредвиденные расходы',  y:5, id:"token__chart_4_pie_4"},
                    {x:'>Правовая поддержка и администрирование.',  y:10, id:"token__chart_5_pie_5"},
                    {x:'Развитие и продвижение компании', y:60, id:"token__chart_2_pie_1"}
                ],
                states: {
                    hover: {
                      color: '#0cc5a9'
                    }
                },
                point:{
                    events: {
                        mouseOver: function (event) {
                          var chart_item = this.id;
                          $('.token__text_block [for="' + chart_item + '"]').addClass('hover');
                        },

                        mouseOut: function (event) {
                            var chart_item = this.id;
                            $('.token__text_block [for="' + chart_item + '"]').removeClass('hover');
                        }
                    }
                }
            }],
            plotOptions: {
                pie: {
                    dataLabels: {
                        distance: -60,                    
                        enabled: true,
                        format: '{y}%',
                        connectorPadding: 0,
                        y: -6,
                        style: {
                            color: "#ffffff",
                            textOutline: '0',
                            fontWeight: "light",
                            fontSize: "18px"
                        }
                    },
                 
                },            
            }
        });
    };



    $('.token__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // fade: true,
      // infinite: true,
      prevArrow: '<div class="slick-arrow slick-prev"></div>',
      nextArrow: '<div class="slick-arrow slick-next"></div>',
      appendArrows: $('.token__nav'),
      arrows: true,
      adaptiveHeight: true,
      dots: false
    });


    $(document).click(function(event) {
     
      if (!$(event.target).closest(".menu__wrap").length){
        $('.gamburger').removeClass('open');
        $('.gamburger__content').removeClass('open');
      }
    });

    $(window).resize(function(){
      win_w = $('.container').width();
      $('.gamburger').removeClass('open');
      $('.gamburger__content').removeClass('open');


    });


  }
);