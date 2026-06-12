# CONFigureGSMMEASiMEValuationLIMitGMSKPVTimeLOWerUPARtnoDYNamicRange

Module: GSM Measurements
Source: 9be2e2b4db4349b6.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Power vs. Time)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:LOWer:UPARt<no>:DYNamic<Range>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PVTime:LOWer:UPARt<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:PVTime:LOWer:UPARt<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PVTime:LOWer:UPARt<no>:DYNamic<Range> 
<Enable>, <PCLStart>, <PCLEnd>, <Correction>
These commands define and activate dynamic (PCL-dependent) corrections to the lower limit lines for the measured power vs. time. The corrections apply to the modulation schemes GMSK, 8PSK (EPSK) or 16-QAM (QAM16). Each limit line section can consist of different areas (<no>). Each dynamic correction is defined for up to five different PCL ranges (<Range>)).
In the default configuration, the dynamic corrections for all lower limit lines are set to zero and disabled.
Suffix: 
<no>
1..5
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
OFF
<PCLStart>
First PCL in PCL range
Range: 
0  to  31
*RST:
0
<PCLEnd>
Last PCL in PCL range (can be equal to <PCLStart>)
Range: 
0  to  31
*RST:
0
<Correction>
Correction value for power template
Range: 
-100 dB  to  100 dB
*RST:
0 dB
Firmware/Software: 
V1.0.15.20
Options: 
R&S CMW-KM201 (for QAM16)
Top