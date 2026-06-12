# CONFigureBLUetoothMEASiMEValuationLIMitEDRateFSTability

Module: Bluetooth Measurements
Source: d864974e25075.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Limit Settings
 > 
Limits (Modulation EDR)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:EDRate:FSTability
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:EDRate:FSTability 
<Wi>, <WiplusW0max>, <W0max>, <WiEnabled>(3), <WiW0maxEnabled>(3), <W0maxEnabled>(3)
Defines and activates upper limits for the frequency stability.
Parameters:
<Wi>
Limit for the initial center frequency error
Range: 
0 Hz  to  250E+3 Hz
*RST:
75E+3 Hz
<WiplusW0max>
Limit for the overall uncompensated frequency error
Range: 
0 Hz  to  250E+3 Hz
*RST:
75E+3 Hz
<W0max>
Limit for the maximum compensated frequency error in the DPSK portion of the packet
Range: 
0 Hz  to  250E+3 Hz
*RST:
10E+3 Hz
<WiEnabled>
OFF |
 
 ON
Enable limits for current, average, and maximum results (3 values)
*RST:
ON
<WiW0maxEnabled>
OFF |
 
 ON
Enable limits for current, average, and maximum results (3 values)
*RST:
ON
<W0maxEnabled>
OFF |
 
 ON
Enable limits for current, average, and maximum results (3 values)
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"EDR"
Top