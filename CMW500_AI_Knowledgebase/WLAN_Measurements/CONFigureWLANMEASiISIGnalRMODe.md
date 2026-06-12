# CONFigureWLANMEASiISIGnalRMODe

Module: WLAN Measurements
Source: 55ede5cbbbf24ac1.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:WLAN:MEAS<i>:ISIGnal:RMODe
CONFigure:WLAN:MEAS<i>:ISIGnal:RMODe 
<ReceiveMode>
Sets the receive mode.
Not all standards support MIMO. If you set a standard that is incompatible with the current receive mode, the receive mode automatically reverts to SISO.
Parameters:
<ReceiveMode>
SISO |
 
 CMIMo |
 
 SMIMo
SISO
: SISO signal
CMIMo
: Composite MIMO, requires R&S CMW-KM652
SMIMo
: Switched MIMO, requires R&S CMW-KM653
*RST:
SISO
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Receive Mode"
Top