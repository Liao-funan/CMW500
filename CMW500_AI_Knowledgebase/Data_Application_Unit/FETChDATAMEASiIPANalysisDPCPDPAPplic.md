# FETChDATAMEASiIPANalysisDPCPDPAPplic

Module: Data Application Unit
Source: a458d4c33b4443c3.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Data Pie Charts Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:DPCP:DPAPplic?
FETCh:DATA:MEAS<i>:IPANalysis:DPCP:DPAPplic? 
Queries the "Data per Application" results of the current layer. To navigate between the layers, see 
CONFigure:
​
DATA:
​
MEAS<i>:
​
IPANalysis:
​
DPCP:
​
DPAPplic:
​
APP
.
After the reliability indicator, three values are returned for each result table row:
<Reliability>, {<App>, <AppData>, <AppPercent>}
row 1
, {...}
row 2
, ...
Return values: 
<Reliability>
See 
"Reliability Indicator"
<App>
String with the contents of column "Application" (application or protocol)
<AppData>
Amount of transported data, as absolute value
Default unit: 
byte
<AppPercent>
Amount of transported data, as percentage of total transported data
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.40
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Data Per Application"
Top