# CONFigureWLANSIGNiCONNectionHOTSpotCUTil

Module: WLAN Signaling
Source: 68fd079f762c4572.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Hotspot 2.0 Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:CUTil
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:CUTil 
<StationCount>, <ChannelUtilization>, <AdmissionCapacity>
Configures the contents of the BSS load element.
Parameters:
<StationCount>
Number of stations that are currently associated with the BSS
Range: 
0  to  65535
*RST:
1
<ChannelUtilization>
Percentage of time, that the access point sensed the primary channel was busy
Range: 
0 %  to  100 %
*RST:
0 %
Default unit: 
%
<AdmissionCapacity>
Remaining time available via explicit admission control, in units of 32 μs/s
Range: 
0  to  31250
*RST:
31250
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.5.40
Manual operation: 
See 
"Station Count, Channel Utilization, Available Admission Capacity"
Top