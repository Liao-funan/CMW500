# CONFigureGSMMEASiMEValuationLIMitGMSKPVTimeUPPerREDGenoDYNamicRange

Module: GSM Measurements
Source: 1bb94337aed34059.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Power vs. Time)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:UPPer:REDGe<no>:DYNamic<Range>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:UPPer:REDGe<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:PVTime:UPPer:REDGe<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PVTime:UPPer:REDGe<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:UPPer:UPARt<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:PVTime:UPPer:UPARt<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PVTime:UPPer:UPARt<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:UPPer:FEDGe<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:PVTime:UPPer:FEDGe<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PVTime:UPPer:FEDGe<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
These commands define and activate dynamic (PCL-dependent) corrections to the upper limit lines for the measured power vs. time. The corrections apply to the modulation schemes GMSK, 8PSK (EPSK) or 16-QAM (QAM16) and to the three limit line sections: rising edge (REDGe), useful part (UPARt) and falling edge (FEDGe). Each limit line section consists of several areas (<no>). Each dynamic correction is defined for up to five different PCL ranges (<Range>)).
Suffix: 
<no>
1..4
Number of the area
<Range>
1..5
Number of the PCL range
<ModOrder>
16
Modulation order (fixed)
Parameters:
<Enable>
OFF |
 
 ON
Disable or enable dynamic correction
*RST:
See tables below
<PCLStart>
First PCL in PCL range
Range: 
0  to  31
*RST:
See tables below
<PCLEnd>
Last PCL in PCL range (can be equal to <PCLStart>)
Range: 
0  to  31
*RST:
See tables below
<Correction>
Correction value for power template
Range: 
-100 dB  to  100 dB
*RST:
See tables below
Firmware/Software: 
V1.0.15.20
Options: 
R&S CMW-KM201 (for QAM16)
The default settings for GSM 900/1800 are according to the following tables. The default settings for GSM850 and GSM400 are identical to GSM900, the ones for GSM 1900 are identical to GSM 1800. The default dynamic corrections are equal for all modulation schemes.
Rising edge, area <no> = 3
<Range>
<Enable>
<PCLStart>
<PCLEnd>
<Correction> in dB
1
ON
16 / 11
16 / 11
2.00 /
2
ON
17 / 12
17 / 12
4.00
3
ON
18 / 13
31 / 28
5.00
4
OFF
0
0
0.00
5
OFF
0
0
0.00
The dynamic corrections in all other areas (<no> 
≠
 3, useful part and falling edge) are disabled and set to zero.
Top