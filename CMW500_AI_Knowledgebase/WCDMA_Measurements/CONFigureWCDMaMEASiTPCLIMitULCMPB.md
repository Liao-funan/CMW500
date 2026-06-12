# CONFigureWCDMaMEASiTPCLIMitULCMPB

Module: WCDMA Measurements
Source: 21fc3432a75c438d.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Limits
 > 
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ULCM:PB
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ULCM:PB 
<InitialPwrStep>, <PowerStep>
Configures a power step limit for the measurement mode "UL Compressed Mode", CM pattern B.
Parameters:
<InitialPwrStep>
Symmetrical tolerance value for the UE TX power in the first slot after the gap
Range: 
0 dB  to  10 dB
*RST:
3.2 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit)
<PowerStep>
Symmetrical tolerance value for the UE TX power in the nonCM - CM and CM - nonCM power step
Range: 
0 dB  to  10 dB
*RST:
2.3 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.2.60
Manual operation: 
See 
"Limits"
Top