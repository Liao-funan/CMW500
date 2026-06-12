# FETChNIOTMEASiMEValuationTRACeIEMissions

Module: NBIoT Measurements
Source: a2b864a937854066.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Inband Emission Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:IEMissions?
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:IEMissions? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:IEMissions? 
Returns the values of the inband emissions trace. See also 
"View Inband Emissions"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of power values, one value per subcarrier
For 15 kHz SC spacing, 12 power values are returned.
For 3.75 kHz SC spacing, 48 power values are returned.
Range: 
-100 dB  to  10 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Top