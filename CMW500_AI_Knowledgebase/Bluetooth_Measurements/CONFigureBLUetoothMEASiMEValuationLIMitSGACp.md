# CONFigureBLUetoothMEASiMEValuationLIMitSGACp

Module: Bluetooth Measurements
Source: 0028e431a271444e.htm

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
Limits (Spectrum)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:SGACp
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:SGACp 
<PTxLimit>, <ExcPTxLimit>, <NoOfExLimit>, <Ptxm26N1relLim>, <Ptxm26P1relLim>, <PTxEnable>, <NoOfExcEnable>, <Ptxm26N1relEnab>, <Ptxm26P1relEnab>
Defines and enables the upper limits for the "Spectrum Gated ACP" measurement for EDR packets: "PTx", "Exceptions PTx", "No. of Exceptions", P
Tx
–
26 dB
–
1 (rel), P
Tx
–
26 dB
 +1 (rel), and limit check enabling.
Parameters:
<PTxLimit>
Range: 
-80 dBm  to  -10 dBm
*RST:
-20 dBm
<ExcPTxLimit>
Range: 
-80 dBm  to  -10 dBm
*RST:
-40 dBm
<NoOfExLimit>
Range: 
0  to  16
*RST:
3
<Ptxm26N1relLim>
Range: 
-80 dB  to  0 dB
*RST:
-26 dB
<Ptxm26P1relLim>
Range: 
-80 dB  to  0 dB
*RST:
-26 dB
<PTxEnable>
OFF |
 
 ON
*RST:
ON
<NoOfExcEnable>
OFF |
 
 ON
*RST:
ON
<Ptxm26N1relEnab>
OFF |
 
 ON
*RST:
ON
<Ptxm26P1relEnab>
OFF |
 
 ON
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"Gated ACP (EDR)"
Top