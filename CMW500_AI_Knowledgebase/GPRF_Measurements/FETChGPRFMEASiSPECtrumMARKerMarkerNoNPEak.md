# FETChGPRFMEASiSPECtrumMARKerMarkerNoNPEak

Module: GPRF Measurements
Source: 2607ccbca13144d1.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Spectrum Analyzer Commands
 > 
Marker
 > 
FETCh:GPRF:MEAS<i>:SPECtrum:MARKer<MarkerNo>:NPEak?
FETCh:GPRF:MEAS<i>:SPECtrum:MARKer<MarkerNo>:NPEak? 
<Detector>, <Statistic>
Moves marker <MarkerNo> to the next lower (or equal) peak, relative to the current marker position. Returns the X and Y value of the new marker position.
The trace is selected by <Detector> and <Statistic>.
Suffix: 
<MarkerNo>
1..2
Marker number
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
Trace type
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