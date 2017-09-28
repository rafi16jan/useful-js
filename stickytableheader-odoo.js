function doStickyTable() {
    $(document).ready(function() {
       $('table.o_treeview_table').stickyTableHeaders({scrollableArea: $('.o_content')[0], fixedOffset: 0.1});
    });
}

var interval = setInterval(function () {
    if ($('table.o_treeview_table') !== null) {
        doStickyTable();
        clearInterval(interval);
    }
}, 100);
