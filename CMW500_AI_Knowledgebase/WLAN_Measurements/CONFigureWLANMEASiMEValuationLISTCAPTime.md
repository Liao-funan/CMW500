# CONFigureWLANMEASiMEValuationLISTCAPTime

Module: WLAN Measurements
Source: edc272b9d3424772.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:CAPTime
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:CAPTime 
<CaptureTime>
Defines the total capture time of the measurement. Enter the time required to receive all segments, starting with the trigger event.
If the value is too small and (a part of) a segment is missing, the measurement fails. If the value is too large, the measurement is successful but takes longer than with an ideal value.
Parameters:
<CaptureTime>
Range: 
1E-3 s  to  1 s
*RST:
1E-3 s
Default unit: 
s
Example: 
See 
"Using WLAN List Mode"
Firmware/Software: 
V1.0.10.50
Options: 
R&S CMW-KM012
Top