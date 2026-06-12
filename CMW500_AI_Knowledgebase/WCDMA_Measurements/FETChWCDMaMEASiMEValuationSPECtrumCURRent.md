# FETChWCDMaMEASiMEValuationSPECtrumCURRent

Module: WCDMA Measurements
Source: b8e310d0c982464e.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Results
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:SPECtrum:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:SPECtrum:CURRent? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:SPECtrum:AVERage? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:SPECtrum:MAXimum? 
[<ACLRMode>]
READ:WCDMa:MEAS<i>:MEValuation:SPECtrum:CURRent? 
[<ACLRMode>]
READ:WCDMa:MEAS<i>:MEValuation:SPECtrum:AVERage? 
[<ACLRMode>]
READ:WCDMa:MEAS<i>:MEValuation:SPECtrum:MAXimum? 
[<ACLRMode>]
CALCulate:WCDMa:MEAS<i>:MEValuation:SPECtrum:CURRent? 
CALCulate:WCDMa:MEAS<i>:MEValuation:SPECtrum:AVERage? 
CALCulate:WCDMa:MEAS<i>:MEValuation:SPECtrum:MAXimum? 
Returns the ACLR power and spectrum emission single value results of the multi-evaluation measurement. The current, average and maximum values can be retrieved.
See also 
"Detailed Views: ACLR"
 and 
"Detailed Views: Spectrum Emission Mask"
The return values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each of the results 1 to 18, 29 and 30 listed below. The frequency positions are only returned by 
FETCh
 and 
READ
 commands.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Query parameters: 
<ACLRMode>
ABSolute |
 
 RELative
ABSolute
: ACLR power displayed in dBm as absolute value
RELative
: ACLR power displayed in dB relative to carrier power
Query parameter is only relevant for 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return a limit check independent from the used 
<ACLRMode>
.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_CarrierPower>
Power at the nominal carrier UL frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<3_ACLRminus2> <4_ACLRminus1> <5_ACLRplus1> <6_ACLRplus2>
Power of the adjacent channels (±1
st
 adjacent channels at ±5 MHz from the UL frequency, ±2
nd
 adjacent channels at ±10 MHz from the UL frequency)
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<7_OBW>
Occupied bandwidth
Range: 
0 MHz  to  10 MHz
Default unit: 
Hz
<8_MarginABIJ> <9_MarginBCJK> <10_MarginCDKL> <11_MarginEFMN> <12_MarginFENM> <13_MarginDCLK> <14_MarginCBKJ> <15_MarginBAJI>
Margin between 1 MHz trace and limit line in the eight emission mask areas. A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Range: 
-100 dB  to  90 dB
Default unit: 
dB
<16_UEpower>
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<17_MarginHAD> <18_MarginHDA>
Margin between 1 MHz trace and limit line H. A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Range: 
-130 dB  to  130 dB
Default unit: 
dB
<19_FreqABIJ> <20_FreqBCJK> <21_FreqCDKL> <22_FreqEFMN> <23_FreqFENM> <24_FreqDCLK> <25_FreqCBKJ> <26_FreqBAJI> <27_FreqHAD> <28_FreqHDA>
Frequency offsets between the margin points and the center frequency in the 10 emission mask areas.
These values are only returned for 
FETCh
 and 
READ
 commands. They are skipped in 
CALCulate
 commands.
Range: 
-12500 kHz to 12500 kHz (for DC HSUPA: -19500 kHz to 19500 kHz)
Default unit: 
Hz
<29_CarrierPowerL> <30_CarrierPowerR>
Power at the nominal carrier frequency; left/right carrier of the dual carrier HSPA connection
Range: 
-90 dBm  to  0 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
V3.0.20: added result 
<19_FreqAB>
 to 
<28_FreqHDA>
V3.2.70: added 
<ACLRMode>
V3.2.80: added 
<29_CarrierPowerL>
, 
<30_CarrierPowerR>
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top