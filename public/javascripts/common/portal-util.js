/** 
 * PORTAL Util: define public methods
 * @author: Henry
 **/

/* Declare */
PORTAL.validateInput = null;
PORTAL.getListPageSize = null;
PORTAL.updatePagination = null;
PORTAL.sortTableByField = null;
PORTAL.filterIdInArray = null;

/* Implement */
PORTAL.validateInput = function(id, tips) {
	var $this = $('#' + id);
	if (!$this.val()) {
		$this.parent().addClass('has-error');
		$this.next().text(tips).fadeIn('slow');
	} else {
		$this.parent().removeClass('has-error');
		$this.next().text('').fadeOut('slow');
	}
};

PORTAL.getListPageSize = function (gap, rowHeight) {
    var rows = 0;
    rows = Math.floor((document.documentElement.clientHeight - gap) / rowHeight); 
    return rows;
};

PORTAL.updatePagination = function (el, totalCount, pageSize, numDisplayEntries, updatePage){
    $('#' + el).pagination(totalCount, {
        current_page : 0,
        items_per_page : pageSize,
        num_display_entries : numDisplayEntries,
        callback : function(page_id){                                     
            updatePage(page_id);
        },
        load_first_page : false,
        prev_text : '&laquo;',
        next_text : '&raquo;'
    });
};

PORTAL.sortTableByField = function (thArray, callback) {
    var sortField, order;
    thArray.click(function (event) {
        sortField = $(this).attr('data-id');
        
        if ($(this).hasClass('headerSortDown')) {
            order = 'desc';
        } else {
            order = 'asc';
        }
        callback(sortField, order);
    });
};

PORTAL.filterIdInArray = function (ids, existIds, allArray) {
    var result = [];

    function getObjById (id, array) {
        for (var i=0; i<array.length; i++) {
            if (array[i].id === id) {
                return array[i];
            }
        }
        return null;
    }

    for (var i=0; i<ids.length; i++) {
        if ($.inArray(ids[i], existIds) === -1) {
            result.push(getObjById(parseInt(ids[i]), allArray));
        }
    }
    
    return result;
};