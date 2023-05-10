
/*
 determines the end of an html comment
*/

var update_function_and_update_data = require('../data');

var data_ = '';
var data_index_ = 0;
var line_number_ = 0;
var original_line_number = 0;

function html_comment(data_index, line_number) { 
 data_ = update_function_and_update_data.data;
 data_index_ = data_index;
 line_number_ = line_number;
 original_line_number = line_number;
 return recurse(data_index_);
}

function recurse(data_index_) { 

 if(data_index_ > data_.length) { 
  throw new Error(
   "html comment End of file"
  )
 }

 if(update_function_and_update_data.data.charAt(data_index_) === '\n') { 
  line_number_ = line_number_ + 1;
 }

 if(
  update_function_and_update_data.data.charAt(data_index_) === '-' && 
  update_function_and_update_data.data.charAt(data_index_ + 1) === '-' && 
  update_function_and_update_data.data.charAt(data_index_ + 2) === '>'
 ) { 
  data_index_ = data_index_ + 3; 
  return {
   data_index: data_index_, 
   line_number: line_number_
  }
 }

 data_index_ = data_index_ + 1;
 return recurse(data_index_);

}

module.exports = html_comment;