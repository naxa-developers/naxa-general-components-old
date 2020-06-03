import React from 'react';
import './exportdatatable.scss';
import PropTypes from 'prop-types';

 

const ExportBtn = ({tableid,exportedfilename  }) => {
  console.log(tableid,'table');
  function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    console.log(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
  }
  return(
  <button onClick={()=>{exportTableToExcel(tableid,exportedfilename)}}>EXPORT</button>
)};

// Badge.propTypes = {
//   label: PropTypes.string,
//   notification_number: PropTypes.number,
//   color: PropTypes.string,
//   borderColor: PropTypes.string
// };

// Badge.defaultProps = {
//   label: 'Notification',
//   notification_count: 0,
//   color: '#337ab7',
//   borderColor:'#2e6da4'
// };
export default ExportBtn;
