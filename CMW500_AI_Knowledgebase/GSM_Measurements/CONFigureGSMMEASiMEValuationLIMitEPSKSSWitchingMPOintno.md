# CONFigureGSMMEASiMEValuationLIMitEPSKSSWitchingMPOintno

Module: GSM Measurements
Source: 478ae3196ccf4df7.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum Switching)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:SSWitching:MPOint<no>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:SSWitching:MPOint<no> 
<PowerLimit1>, ..., <PowerLimit10>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:SSWitching:MPOint<no> 
<PowerLimit1>, ..., <PowerLimit10>, <Enable>
Define and activate a limit line for the modulation schemes 8PSK and 16-QAM for a certain frequency offset. The specified limits apply at the reference power values defined by 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
EPSK:
​
SSWitching:
​
PLEVel
 and 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
QAM<ModOrder>:
​
SSWitching:
​
PLEVel
. Between the reference power values the limits are determined by linear interpolation.
Suffix: 
<no>
1..20
Number of the frequency offset value.
The offsets are defined by the command 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
SSWitching:
​
OFRequence
<ModOrder>
16
Modulation order (fixed)
Parameters:
<PowerLimit1> ... <PowerLimit10>
Relative power limit applicable at the corresponding reference power
Range: 
-60 dB  to  30 dB
*RST:
see table below
Default unit: 
dB
<Enable>
OFF |
 
 ON
ON:
 Enable limits for the given 
<no>
OFF:
 Disable limits for the given 
<no>
*RST:
see table below
Firmware/Software: 
V1.0.0.4 (V1.0.15.0 for 
QAM16
)
Options: 
R&S CMW-KM201 (for QAM16)
The default GSM 900/1800/1900 settings are according to the following tables. The default settings for GSM850, GSM GT800, and GSM400 are identical to GSM900.
Default values GSM 900 for <Enable> (ON/OFF) and <PowerLimit> (values in dB) depending on <no>
<no>
Enable
Limit1
Limit2
Limit3
Limit4
Limit5
Limit6
Limit7
Limit8
Limit9
Limit10
1
ON
-13
-15
-17
-19
-21
-23
-23
-23
-23
-23
2
ON
-21
-21
-21
-21
-23
-25
-26
-26
-26
-26
3
ON
-21
-21
-21
-21
-23
-25
-27
-29
-31
-32
4
ON
-24
-24
-24
-24
-26
-28
-30
-32
-34
-36
5 to 20
OFF
0
0
0
0
0
0
0
0
0
0
Default values GSM 1800 for <Enable> (ON/OFF) and <PowerLimit> (values in dB) depending on <no>
<no>
Enable
Limit1
Limit2
Limit3
Limit4
Limit5
Limit6
Limit7
Limit8
Limit9
Limit10
1
ON
-16
-18
-20
-22
-23
-23
-23
-23
-23
OFF, 0
2
ON
-21
-21
-22
-24
-25
-26
-26
-26
-26
OFF, 0
3
ON
-21
-21
-22
-24
-26
-28
-30
-31
-32
OFF, 0
4
ON
-24
-24
-25
-27
-29
-31
-33
-35
-36
OFF, 0
5 to 20
OFF
0
0
0
0
0
0
0
0
0
0
Default values GSM 1900 for <Enable> (ON/OFF) and <PowerLimit> (values in dB) depending on <no>
<no>
Enable
Limit1
Limit2
Limit3
Limit4
Limit5
Limit6
Limit7
Limit8
Limit9/10
1
ON
-19
-20
-22
-23
-23
-23
-23
-23
OFF, 0
2
ON
-22
-22
-24
-25
-26
-26
-26
-26
OFF, 0
3
ON
-22
-22
-24
-26
-28
-30
-31
-32
OFF, 0
4
ON
-25
-25
-27
-29
-31
-33
-35
-36
OFF, 0
5 to 20
OFF
0
0
0
0
0
0
0
0
0
Top