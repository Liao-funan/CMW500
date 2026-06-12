# CONFigureWCDMaMEASiTPCLIMitULCMPA

Module: WCDMA Measurements
Source: 15fb6d316acb441e.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ULCM:PA
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ULCM:PA 
<InitialPwrStep>, <PowerStep>, <PowerStepGroup>
Configures a power step limit for the measurement mode "UL Compressed Mode", CM pattern A.
Parameters:
<InitialPwrStep>
Symmetrical tolerance value for UE TX power in the first slot after the gap
Range: 
0 dB  to  10 dB
*RST:
4.3 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit)
<PowerStep>
Symmetrical tolerance value for UE TX power in a recovery period
Range: 
0 dB  to  10 dB
*RST:
1.7 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit)
<PowerStepGroup>
Symmetrical tolerance value for the aggregate UE TX power in the recovery period comprising the 7 rising or falling power steps after each gap
Range: 
0 dB  to  10 dB
*RST:
5.3 dB
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