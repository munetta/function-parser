
/*
 dermines the end of an html comment
*/

var data_ = '';
var data_index_ = 0;

function html_comment(data, data_index) { 
 data_ = data;
 data_index_ = data_index;
 recurse(data_index_);
}

function recurse(data_index_) { 

}

module.exports = html_comment;