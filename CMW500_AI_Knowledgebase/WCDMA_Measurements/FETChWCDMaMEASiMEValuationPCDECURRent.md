# FETChWCDMaMEASiMEValuationPCDECURRent

Module: WCDMA Measurements
Source: d481a87ddc9f4860.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CD Monitor Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:PCDE:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:PCDE:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:PCDE:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:PCDE:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:PCDE:MAXimum? 
Returns the peak code domain error (PCDE) results. In addition to the current PCDE value, the maximum PCDE value can be retrieved.
See also 
"Detailed Views: CD Monitor"
Return values: 
<Reliability>
"Reliability Indicator"
<PCDError>
Peak code domain error
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<PCDErrorPhase>
IPHase |
 
 QPHase
Phase where the peak code domain error was measured
IPHase
: I-Signal
QPHase
: Q-Signal
<PCDErrorCodeNo>
Code number for which the PCDE was measured
Range: 
0  to  255
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.2.7
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top