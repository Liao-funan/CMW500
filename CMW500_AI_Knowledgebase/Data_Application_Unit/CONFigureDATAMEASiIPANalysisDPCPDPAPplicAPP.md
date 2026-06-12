# CONFigureDATAMEASiIPANalysisDPCPDPAPplicAPP

Module: Data Application Unit
Source: d3d527d8093744a0.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Data Pie Charts Settings and Results
 > 
CONFigure:DATA:MEAS<i>:IPANalysis:DPCP:DPAPplic:APP
CONFigure:DATA:MEAS<i>:IPANalysis:DPCP:DPAPplic:APP 
<AppSelected>
Selects a layer of the "Data per Application" pie chart view.
You can navigate from the current layer to the next lower or higher layer. The initial current layer is the application layer. The lower layers are layer 7, layer 4 and layer 3.
To query the entries (strings) of the current layer, see 
FETCh:
​
DATA:
​
MEAS<i>:
​
IPANalysis:
​
DPCP:
​
DPAPplic?
.
Parameters:
<AppSelected>
String with an entry of the current layer: Navigates to the next lower layer for this entry
"Back" or string unknown at the current layer: Navigates back to the next higher layer
Example: 
See 
"Performing IP Analysis"
Firmware/Software: 
V3.2.40
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Data Per Application"
Top