# CONFigureWLANMEASiMEValuationCOMPensationEFTaps

Module: WLAN Measurements
Source: 41daaf3c507c4fab.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:COMPensation:EFTaps
CONFigure:WLAN:MEAS<i>:MEValuation:COMPensation:EFTaps 
<Enable>[, <Value>]
This command is relevant for DSSS signals only. It determines if and how accurate the transmit filter is estimated.
Parameters:
<Enable>
ON |
 
 OFF
Enables or disables TX filter estimation
*RST:
ON
<Value>
3 |
 
 5 |
 
 7 |
 
 9 |
 
 11 |
 
 13 |
 
 15
Number of equalizer filter taps
The value can only be modified for the R&S
 
CMW100/CMW with MUA.
*RST:
11
Additional value: OFF (indicates that the TX filter estimation is disabled)
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"DSSS Tx Filter Estimation"
Top