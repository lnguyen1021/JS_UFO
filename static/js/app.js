// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select('#filter-btn');

button.on('click',function(){
    //preventing page from refreshing after clicking button
    d3.event.preventDefault();
    //need to select the enter date
    var dateQuery= d3.select('#datetime');
    //now need to get the value
    var dateQueryValue =dateQuery.property('value');

    // creating a new date value to check the year
    var parsed = new Date(dateQueryValue);

    //making sure query date is not empty
    if (parsed.getYear()==110 && dateQueryValue!==''){
        function queryDate(date){
            if (Date.parse(dateQueryValue) ===Date.parse(date.datetime)){
                return date.datetime;
            }
        };
        //filtering data and making sure there is filtered data
        var filterData = data.filter(queryDate);
        
        if (filterData!=''){
            var createT = function(d){
                var tbody=d3.select('tbody');
                //clears our table each time createT is called
                tbody.html('');
                //iterates through each object()
                d.forEach(function (v){
                    //appends a row for each object
                    var row =tbody.append('tr');
                    //goes into each object's value then takes the value and appends the td to the row and adds in the text
                    Object.values(v).forEach(function(val){
                        row.append('td').text(val);
                    });
                    
                });
            };
            createT(filterData)
        } else{
            window.alert('There is no data for this date (dataset only contains data for the month of January!')
            var tbody=d3.select('tbody');
            //clears our table each time createT is called
            tbody.html('');
        };
    } else{
        var tbody=d3.select('tbody');
            //clears our table each time createT is called
            tbody.html('');
        window.alert('Please provide a valid date (dataset only contains data from 2010)!')
    };
});