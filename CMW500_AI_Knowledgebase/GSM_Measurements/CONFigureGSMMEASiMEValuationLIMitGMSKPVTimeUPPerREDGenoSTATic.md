# CONFigureGSMMEASiMEValuationLIMitGMSKPVTimeUPPerREDGenoSTATic

Module: GSM Measurements
Source: b6c93f57f3184964.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Power vs. Time)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:UPPer:REDGe<no>:STATic
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:UPPer:REDGe<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:UPPer:UPARt<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:UPPer:FEDGe<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:PVTime:UPPer:REDGe<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:PVTime:UPPer:UPARt<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:PVTime:UPPer:FEDGe<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PVTime:UPPer:REDGe<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PVTime:UPPer:UPARt<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PVTime:UPPer:FEDGe<no>:STATic 
<TimeStart>, <TimeEnd>, <RelLevStart>, <RelLevEnd>, <AbsLevStart>, <AbsLevEnd>, <Enable>
These commands define and activate upper limit lines for the measured power vs. time. The lines apply to the modulation schemes GMSK, 8PSK (EPSK) or 16-QAM (QAM16). Each line consists of three sections: rising edge (REDGe), useful part (UPARt) and falling edge (FEDGe). Each section consists of several areas for which relative and absolute limits can be defined (if both are defined the higher limit overrules the lower one).
Suffix: 
<ModOrder>
16
Modulation order (fixed)
<no>
1..4 for rising/falling edge, 1..3 for useful part
Number of the area
Parameters:
<TimeStart> <TimeEnd>
Start and end time of the area
Range: 
-50 µs  to  600 µs
*RST:
See tables below
Default unit: 
s
<RelLevStart> <RelLevEnd>
Start and end level of the relative limit for the area
Range: 
-100 dB  to  10 dB
*RST:
See tables below
Default unit: 
dB
<AbsLevStart> <AbsLevEnd>
Start and end level of the absolute limit for the area
Range: 
-100 dBm  to  10 dBm
*RST:
See tables below
Default unit: 
dBm
Additional parameters: OFF | ON (disables start/end level | enables start/end level using the previous/default values)
<Enable>
ON |
 
 OFF
ON: Enable area 
<no>
OFF: Disable area 
<no>
*RST:
See tables below
Firmware/Software: 
V1.0.0.4 (V1.0.15.0 for 
QAM16
)
Options: 
R&S CMW-KM201 (for QAM16)
The default settings for GSM 900/1800 are according to the following tables. The default settings for GSM850 and GSM400 are identical to GSM900, the ones for GSM 1900 are identical to GSM 1800.
Rising edge GMSK and 8PSK
 
<TimeStart> in µs
<TimeEnd> in µs
<RelLevStart>
(=<RelLevEnd>) in dB
<AbsLevStart>
(=<AbsLevEnd>) in dBm,
<Status>
<Enable>
<no>=1
-38
-28
-59/-48
-36/-48, ON
ON
<no>=2
-28
-18
-30
-17/-20, ON
ON
<no>=3
-18
-10
-6*
OFF
ON
<no>=4
-10
0
4
OFF
ON
Rising edge 16-QAM
 
<TimeStart> in µs
<TimeEnd> in µs
<RelLevStart>
(=<RelLevEnd>) in dB
<AbsLevStart>
(=<AbsLevEnd>) in dBm,
<Status>
<Enable>
<no>=1
-38
-28
-59/-48
-36/-48, ON
ON
<no>=2
-28
-18
-30
-17/-20, ON
ON
<no>=3
-18
-10
-6*
OFF
ON
<no>=4
-10
0
6.5
OFF
ON
Useful part GMSK
 
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
1
OFF
ON
<no>=2
-
-
-
-
OFF
<no>=3
-
-
-
-
OFF
Useful part 8PSK
 
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
4
2.4
OFF
ON
<no>=2
4
538.8
4
OFF
ON
<no>=3
538.8
542.8
2.4
OFF
ON
Useful part 16-QAM
 
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
4
3.5
OFF
ON
<no>=2
4
538.8
6.5
OFF
ON
<no>=3
538.8
542.8
3.5
OFF
ON
Falling edge GMSK and 8PSK
 
<TimeStart> in µs
<TimeEnd> in µs
<RelLevStart>
(=<RelLevEnd>) in dB
<AbsLevStart>
(=<AbsLevEnd>) in dBm,
<Status>
<Enable>
<no>=1
542.8
552.8
GMSK: 1, 8PSK: 4
OFF
ON
<no>=2
552.8
560.8
-6*
OFF
ON
<no>=3
560.8
570.8
-30
-17/-20, ON
ON
<no>=4
570.8
580.8
-59/-48
-54/-48, ON
ON
Falling edge 16-QAM
 
<TimeStart> in µs
<TimeEnd> in µs
<RelLevStart>
(=<RelLevEnd>) in dB
<AbsLevStart>
(=<AbsLevEnd>) in dBm,
<Status>
<Enable>
<no>=1
542.8
552.8
6.5
OFF
ON
<no>=2
552.8
560.8
-6*
OFF
ON
<no>=3
560.8
570.8
-30
-17/-20, ON
ON
<no>=4
570.8
580.8
-59/-48
-54/-48, ON
ON
*) Corrections apply in several PCL ranges, see the commands for dynamic limit
Top