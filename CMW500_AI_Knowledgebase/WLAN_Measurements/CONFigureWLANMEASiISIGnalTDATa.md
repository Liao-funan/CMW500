# CONFigureWLANMEASiISIGnalTDATa

Module: WLAN Measurements
Source: bbd1dcecf9574533.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:WLAN:MEAS<i>:ISIGnal:TDATa
CONFigure:WLAN:MEAS<i>:ISIGnal:TDATa 
<FileName>
Specifies the training data source to be used as the reference signal for CMIMO measurements.
Parameters:
<FileName>
"No Data" |
 
 "Internal" |
 
 "<file name>"
"No Data"
: Use no training data.
"Internal"
: Use in-memory data, acquired during preceding training mode runs. In-memory data must be available.
"<file name>"
: Use the training data file with the specified name, in the directory 
@USERDATA\MIMOData
.
*RST:
"No Data"
Example: 
See 
"CMIMO Training Mode"
Firmware/Software: 
V2.1.10
Options: 
R&S CMW-KM652
Manual operation: 
See 
"Training Data"
Top