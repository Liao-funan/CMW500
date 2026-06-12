# FETChDATAMEASiIPANalysisDPCPDPLayer

Module: Data Application Unit
Source: ab01404b19234447.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Data Pie Charts Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:DPCP:DPLayer?
FETCh:DATA:MEAS<i>:IPANalysis:DPCP:DPLayer? 
<LayerDepth>
Queries the "Data per Layer" results.
After the reliability indicator, three values are returned for each result table row:
<Reliability>, {<Layer>, <LayerData>, <LayerPercent>}
row 1
, {...}
row 2
, ...
Query parameters: 
<LayerDepth>
FEATure |
 
 APP |
 
 L7 |
 
 L4 |
 
 L3
Selects the highest layer at which the packets are analyzed
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Layer>
String with the contents of column "Layer" (feature, application or protocol)
<LayerData>
Amount of transported data, as absolute value
Default unit: 
byte
<LayerPercent>
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
"Data Per Layer"
Top