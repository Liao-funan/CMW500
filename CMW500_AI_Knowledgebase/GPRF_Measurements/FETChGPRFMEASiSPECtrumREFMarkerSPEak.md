# FETChGPRFMEASiSPECtrumREFMarkerSPEak

Module: GPRF Measurements
Source: f01c81fdc0194cac.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Spectrum Analyzer Commands
 > 
Marker
 > 
FETCh:GPRF:MEAS<i>:SPECtrum:REFMarker:SPEak?
FETCh:GPRF:MEAS<i>:SPECtrum:REFMarker:SPEak? 
<Detector>, <Statistic>
Moves the reference marker to the highest peak of the trace determined by <Detector> and <Statistic> and returns the X and Y value of the new marker position.
Query parameters: 
<Detector>
AVERage |
 
 RMS |
 
 SAMPle |
 
 MINPeak |
 
 MAXPeak |
 
 AUTopeak
Selects the detector type, see 
"Detector hotkey"
.
<Statistic>
CURRent |
 
 AVERage |
 
 MAXimum |
 
 MINimum
Selects the trace type
Return values: 
<Reliability>
See 
"Reliability Indicator"
<XValue>
X value
<YValue>
Y value
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V3.2.10
Options: 
R&S CMW-KM010
Manual operation: 
See 
"Marker hotkeys"
Top