
/*
 determines when to end a regular expression... gets funky
*/

var data_ = '';
var data_index_ = 0;
var in_function_ = false, in_function_build_string_ = '';
var line_number_ = 0;

function regex(data, data_index, in_function, line_number, build_string) { 
 data_ = data;
 data_index_ = data_index;
 in_function_ = in_function;
 in_function_build_string_ = build_string;
 line_number_ = line_number;
 return recurse(data_index_);
}

function recurse() { 

}

module.exports = regex;