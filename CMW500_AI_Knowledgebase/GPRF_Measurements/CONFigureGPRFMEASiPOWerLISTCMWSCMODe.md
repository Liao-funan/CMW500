# CONFigureGPRFMEASiPOWerLISTCMWSCMODe

Module: GPRF Measurements
Source: 2196bd54b1334dd7.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:CMWS:CMODe
CONFigure:GPRF:MEAS<i>:POWer:LIST:CMWS:CMODe 
<CMWSConnMode>
Specifies how the input connector is selected for GPRF power list mode measurements with the R&S
 
CMWS or an instrument with integrated connector bench.
Parameters:
<CMWSConnMode>
GLOBal |
 
 LIST
GLOBal:
 The same input connector is used for all list entries. It is selected in the same way as without list mode, for example via 
ROUTe:GPRF:MEAS<i>:SCENario:SALone
.
LIST:
 The input connector is configured individually for each list entry. See 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
LIST:
​
CMWS:
​
CONNector
 and 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
LIST:
​
CMWS:
​
CONNector:
​
ALL
.
*RST:
GLOB
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"Connector Mode"
Top