function jumpSearch(search_arr, search_val) {
    let startIndex = 0;
    let endIndex = search_arr.length - 1;
    let steps = Math.floor(Math.sqrt(search_arr.length));

    
    /* while (startIndex <= endIndex) {
        startIndex = startIndex + steps;
        console.log("Loop startIndex at: " + startIndex);

        if (search_val >= search_arr[startIndex]) {
            while (startIndex > endIndex) {
                startIndex--;
                console.log("re-setting startIndex at: " + startIndex);
            }
        }

        if (search_val <= search_arr[startIndex]) {
            endIndex = startIndex;
            startIndex = endIndex - steps;
            console.log("re-setting startIndex at: " + startIndex);

            while (startIndex <= endIndex) {
                if (search_val == search_arr[startIndex]) {
                    console.log("Found value");
                    return startIndex;
                }
                startIndex++;
            }

            return search_val + ' not found';
        }

    } */

}

function getJumpSearchResult() {
    let searchVal = $(".jump-search").find("[data-id |='search_string']").val();
    let searchArray = $(".jump-search").find("[data-id |='search_array']").val();
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

    let start = window.performance.now();

    console.time("search_time");
    /* Calling jump search function */
    let res = jumpSearch(searchArray, searchVal);

    console.timeEnd("search_time");

    $(".jump-search").find("[data-id |='result_box']").val(res);
    $(".jump-search").find("[data-id |='exe_time_box']").val(window.performance.now() - start);

}