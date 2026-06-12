# CALCulateBLUetoothMEASiMEValuationPENCodingEDRateCURRent

Module: Bluetooth Measurements
Source: 1981b48cfb884f0e.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Differential Phase Encoding  Results (EDR)
 > 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PENCoding:EDRate:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:PENCoding:EDRate:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PENCoding:EDRate:CURRent:C? 
READ:BLUetooth:MEAS<i>:MEValuation:PENCoding:EDRate:CURRent? 
Returns the "Differential Phase Encoding" results for EDR packets (single values).
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<NominalPower>
Average power during the carrier-on state
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
<BitErrorRate>
Number of bit errors in the received burst, as a percentage of the total number of bits received
Range: 
0 %  to  100 %
Default unit: 
%
<Packets0Errors>
Number of bit error free packets received, as a percentage of all the bursts received
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Differential Phase Encoding Measurements"
Usage: 
Query only
Firmware/Software: 
V3.2.50
V3.2.81: added command 
FETCh:...:CURRent:C
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top