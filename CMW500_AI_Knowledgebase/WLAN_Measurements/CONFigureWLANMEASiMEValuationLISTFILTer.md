# CONFigureWLANMEASiMEValuationLISTFILTer

Module: WLAN Measurements
Source: 44cbdef07fda414f.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:FILTer
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:FILTer 
<Mode>
Selects the channel filter estimation mode for DSSS signals. Channel filter estimation can be performed once per segment (first burst of the segment) or it can be repeated for each burst. For measurement speed optimization, select FOPS.
Parameters:
<Mode>
FOPS |
 
 FABurst
FOPS
: Filter once per segment, channel estimation for first burst of each segment
FABurst
: Filter all bursts, channel estimation for all bursts
*RST:
FOPS
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KM012
Manual operation: 
See 
"List Mode > Filter"
Top