# CONFigureGSMMEASiMEValuationLIMitGMSKPVTimeLOWerUPARtnoSTATic

Module: GSM Measurements
Source: 4a6000a29db74218.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Power vs. Time)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:LOWer:UPARt<no>:STATic
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:LOWer:UPARt<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:PVTime:LOWer:UPARt<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PVTime:LOWer:UPARt<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
These commands define and activate lower limit lines for the measured power vs. time. The lines apply to the "useful part" of a burst for modulation schemes GMSK, 8PSK (EPSK) or 16-QAM (QAM16). Each line can consist of several areas for which relative and absolute limits can be defined (if both are defined the lower limit overrules the higher one).
Suffix: 
<no>
1..5
Number of the area
<ModOrder>
16
Modulation order (fixed)
Parameters:
<TimeStart>
Start time of the area
Range: 
-50 µs  to  600 µs
*RST:
See table below
<TimeEnd>
End time of the area
Range: 
-50 µs  to  600 µs
*RST:
See table below
<RelLevStart>
Start level of the relative limit for the area
Range: 
-100 dB  to  10 dB
*RST:
See table below
<RelLevEnd>
End level of the relative limit for the area
Range: 
-100 dB  to  10 dB
*RST:
See table below
<AbsLevStart>
Start level of the absolute limit for the area
Range: 
-100 dBm  to  10 dBm
*RST:
See table below
Additional parameters: OFF | ON (disables start and end level | enables start and end level using the previous/default values)
<AbsLevEnd>
End level of the absolute limit for the area
Range: 
-100 dBm  to  10 dBm
*RST:
See table below
Additional parameters: OFF | ON (disables start and end level | enables start and end level using the previous/default values)
<Enable>
OFF |
 
 ON
ON:
 Enable area 
<no>
OFF:
 Disable area 
<no>
*RST:
See table below
Firmware/Software: 
V1.0.0.4 (V1.0.15.0 for 
QAM16
)
Options: 
R&S CMW-KM201 (for QAM16)
The default settings are according to the following tables.
GMSK
 
<TimeStart> in µs
<TimeEnd> in µs
<RelLevStart>
(=<RelLevEnd>) in dB
<AbsLevStart>
(=<AbsLevEnd>) in dBm,
<Status>
<Enable>
<no>=1
0
542.8
-1
OFF
ON
<no>=2 to 5
-
-
-
-
OFF
8PSK
 
<TimeStart> in µs
<TimeEnd> in µs
<RelLevStart>
(=<RelLevEnd>) in dB
<AbsLevStart>
(=<AbsLevEnd>) in dBm,
<Status>
<Enable>
<no>=1
0
2
-2
OFF
ON
<no>=2
2
4
0
OFF
ON
<no>=3
4
538.8
-20
OFF
ON
<no>=4
538.8
540.8
0
OFF
ON
<no>=5
540.8
542.8
-2
OFF
ON
16-QAM
 
<TimeStart> in µs
<TimeEnd> in µs
<RelLevStart>
(=<RelLevEnd>) in dB
<AbsLevStart>
(=<AbsLevEnd>) in dBm,
<Status>
<Enable>
<no>=1
0
2
-3
OFF
ON
<no>=2
2
4
0
OFF
ON
<no>=3
4
538.8
undefined
OFF
ON
<no>=4
538.8
540.8
0
OFF
ON
<no>=5
540.8
542.8
-3
OFF
ON
Top