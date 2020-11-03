function jumpSearch(search_arr, search_val) {
    let startIndex = 0;
    let endIndex = search_arr.length - 1;

    while (startIndex <= endIndex) {

    }

    return search_val + ' not found';

}

function getSearchResult() {
    let searchVal = $(".jump [data-id |='search_string'").val();
    let searchArray = $(".jump [data-id |='search_array'").val();
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

    console.time("jump_search_time");

    let start = window.performance.now();
    /* Calling jump search function */
    let res = jumpSearch(searchArray, searchVal);

    $(".jump [data-id |='result_box'").val(res);
    $(".jump [data-id |='exe_time_box'").val(window.performance.now() - start);

    console.timeEnd("jump_search_time");
}