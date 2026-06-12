# CONFigureAUDioMEASiANALogSCOunt

Module: Audio Measurements
Source: c67b3b2ff2ca4978.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
General Measurement Settings
 > 
CONFigure:AUDio:MEAS<i>:ANALog:SCOunt
CONFigure:AUDio:MEAS<i>:ANALog:SCOunt 
<StatCountSing>, <StatCountMult>, <StatCountFFTN>
CONFigure:AUDio:MEAS<i>:DIGital:SCOunt 
<StatCountSing>, <StatCountMult>, <StatCountFFTN>
Specifies the statistic counts for all audio signal types. The statistic count is equal to the number of measurement intervals per single shot.
See also: 
"Statistical Settings"
Parameters:
<StatCountSing>
Single tone measurements statistic count
Range: 
1  to  1000
*RST:
20
<StatCountMult>
Multitone measurements statistic count
Range: 
1  to  1000
*RST:
20
<StatCountFFTN>
FFT noise measurements statistic count
Range: 
1  to  1000
*RST:
20
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Statistic Counter"
Top