/* 
    @Author: Chandrakant K
*/

function binarySearch(search_arr, search_val) {
    search_arr = search_arr.sort((next, c) => { return next - c })
    let startIndex = 0;
    let endIndex = search_arr.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (search_arr[middleIndex] == search_val) {
            console.log(search_val + " Found on the index number: " + middleIndex);
            return middleIndex;
        }

        if (search_val > search_arr[middleIndex]) {
            startIndex = middleIndex + 1;
            console.log("re-setting startIndex at: " + startIndex);
        }

        if (search_val < search_arr[middleIndex]) {
            endIndex = middleIndex - 1;
            console.log("re-setting endIndex at: " + startIndex);
        }

    }
    console.log(search_val + ' not found');
    return search_val + ' not found';

}

function getSearchResult() {
    let searchVal = $(".binary [data-id |='search_string'").val();
    let searchArray = $(".binary [data-id |='search_array'").val();
    let message = '';

    if (!searchArray || (searchArray && searchArray.trim() == '')) {
        alert("Enter Array elemnts in [ ]");
        return false;
    }

    try {
        searchArray = searchArray ? JSON.parse(searchArray) : [];
    } catch (e) {
        alert("Enter Array elemnts in [ ]");
        return false;
    }

    if (searchVal == null || searchVal == '') {
        alert("Enter valid search number");
        return false;
    }

    console.time("binary_search_time");

    let start = window.performance.now();
    /* Calling binary search function */
    let res = binarySearch(searchArray, searchVal);

    $(".binary [data-id |='result_box'").val(res);
    $(".binary [data-id |='exe_time_box'").val(window.performance.now() - start);

    console.timeEnd("binary_search_time");
}