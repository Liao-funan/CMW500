# SENSeDATAMEASiIPANalysisVOIMsBITRateCMR

Module: Data Application Unit
Source: 4ed32400db4a4d53.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Voice over IMS Results
 > 
SENSe:DATA:MEAS<i>:IPANalysis:VOIMs:BITRate:CMR?
SENSe:DATA:MEAS<i>:IPANalysis:VOIMs:BITRate:CMR? 
<SessionID>, <FlowID>, <Direction>
Queries bitrates and CMR information related to a voice over IMS call.
A query returns all parameters except the <SessionID>:
<FlowID>, <Direction>, <CurrBitrate>, <AvgBitrate>, ..., <MaxCMRBW>
Parameters:
<FlowID>
Flow ID, as returned by 
FETCh:
​
DATA:
​
MEAS<i>:
​
IPANalysis:
​
VOIMs:
​
ALL?
<Direction>
UL |
 
 DL |
 
 UNK
Flow direction uplink, downlink or unknown
Query parameters: 
<SessionID>
Call ID, as returned by 
FETCh:
​
DATA:
​
MEAS<i>:
​
IPANalysis:
​
VOIMs:
​
ALL?
Return values: 
<CurrBitrate>
Current measured bitrate
Default unit: 
bit/s
<AvgBitrate>
Average measured bitrate
Default unit: 
bit/s
<MinBitrate>
Minimum measured bitrate
Default unit: 
bit/s
<MaxBitrate>
Maximum measured bitrate
Default unit: 
bit/s
<CurrCMRBitrate>
Bitrate currently requested for the other direction
Default unit: 
bit/s
<MinCMRBitrate>
Minimum of the bitrates requested for the other direction
Default unit: 
bit/s
<MaxCMRBitrate>
Maximum of the bitrates requested for the other direction
Default unit: 
bit/s
<CurrCMRBW>
String indicating the bandwidth currently requested for the other direction
<MinCMRBW>
String indicating the minimum of the bandwidths requested for the other direction
<MaxCMRBW>
String indicating the maximum of the bandwidths requested for the other direction
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Bitrate\CMR"
Top