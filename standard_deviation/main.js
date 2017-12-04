function calculate(){
  var s = document.getElementById("inputbox").value;
  var u =[], temp = [], t=0, output_value="";
  var level=[1, 1.64, 1.96, 2.576, 3.291, 3.891, 4.417, 4.892];
  var conlevel=[];
  var sum = 0; n= 0;
  var k = s.split(",");
  for (var i = 0; i < k.length; i++) {
    temp[i] = parseInt(k[i]); 
    u[i]= temp[i];
    sum += u[i];
    n++;   
  }
  var mean =sum/n ;
  for (var j = 0; j < n; j++) {
    t += deviation(u[j],mean);    
  }
  popluation_deviation = Math.sqrt(t/n);
  sample_deviation = Math.sqrt(t/(n-1));
  popluation_variance = Math.pow(popluation_deviation, 2);
  sample_variance = Math.pow(sample_deviation, 2);
  standard_meanerror = sample_deviation/Math.sqrt(n);
  for (var i = 0; i < level.length; i++) {
    conlevel_low = mean - standard_meanerror*level[i];
    conlevel_high = mean + standard_meanerror*level[i];
    conlevel[i] = conlevel_low.toString()+" - "+conlevel_high.toString();    
  }
   
/*Output */
  output_value += "<h2 class='result'>Result</h2>";
  output_value +="<table>";
  output_value +="<tr><th>Sample Standard Deviation, s</th>";
  output_value +="<td>"+sample_deviation.toString()+"</td></tr>";
  output_value +="<tr><th>Variance(Sample Standard), s<sup>2</sup></th>";
  output_value +="<td>"+sample_variance.toString()+"</td></tr>";
  output_value +="<tr><th>Population Standard Deviation, &sigma;</th>";
  output_value +="<td>"+popluation_deviation.toString()+"</td></tr>";
  output_value +="<tr><th>Variance(Population Standard), &sigma;<sup>2</sup></th>";
  output_value +="<td>"+popluation_variance.toString()+"</td></tr>";
  output_value +="<tr><th>Total Numbers, N</th>";
  output_value +="<td>"+n.toString()+"</td></tr>";
  output_value +="<tr><th>Sum:</th>";
  output_value +="<td>"+sum.toString()+"</td></tr>";
  output_value +="<tr><th>Mean(Average):</th>";
  output_value +="<td>"+mean.toString()+"</td></tr>";
  output_value +="<tr><th>Standard Error of the Mean(SE<sub>x̄</sub> ):</th>";
  output_value +="<td>"+standard_meanerror.toString()+"</td></tr></table>";
  output_value +="<div>&nbsp;</div>";
  output_value +="<h3>Confidence Interval Approximations, If sampling distribution of the mean follows normal distribution</h3>";
  output_value +="<div>&nbsp;</div><table>";
  output_value +="<thead class='confidence_level'><tr><th>Confidence Level</th><td>Range</td></tr></thead>";
  output_value +="<tbody><tr><th>68.3%, SE<sub>x̄</sub></th>";
  output_value +="<td>" + conlevel[0] + "</td></tr>";
  output_value +="<tbody><tr><th>90%, 1.645SE<sub>x̄</sub></th>";
  output_value +="<td>" + conlevel[1] + "</td></tr>";
  output_value +="<tbody><tr><th>95%, 1.960SE<sub>x̄</sub></th>";
  output_value +="<td>" + conlevel[2] + "</td></tr>";
  output_value +="<tbody><tr><th>99%, 2.576SE<sub>x̄</sub></th>";
  output_value +="<td>" + conlevel[3] + "</td></tr>";
  output_value +="<tbody><tr><th>99.9%, 3.291SE<sub>x̄</sub></th>";
  output_value +="<td>" + conlevel[4] + "</td></tr>";
  output_value +="<tbody><tr><th>99.99%, 3.891SE<sub>x̄</sub></th>";
  output_value +="<td>" + conlevel[5] + "</td></tr>";
  output_value +="<tbody><tr><th>99.999%, 4.417SE<sub>x̄</sub></th>";
  output_value +="<td>" + conlevel[6] + "</td></tr>";
  output_value +="<tbody><tr><th>99.9999%, 4.892SE<sub>x̄</sub></th>";
  output_value +="<td>" + conlevel[7] + "</td></tr></tbody></table>";
  output_value +="<h3>Column Chart of the Values</h3>"   
  document.getElementById("output").innerHTML = output_value;

  /*Show the column chart of values */
    $('#valuechartc').highcharts({
      chart: {type: 'column'},
      title: {text: ''},
      xAxis: {enabled: false},
      yAxis: {title: {text: ''}},
      legend: {enabled: false},
      tooltip: {enabled: true,formatter: function() {return this.y;}},
        series: [{
          data: u
          
        }]
      });
  
}

function deviation(x,y){
   s=Math.pow((x-y),2);
   return s;
}



