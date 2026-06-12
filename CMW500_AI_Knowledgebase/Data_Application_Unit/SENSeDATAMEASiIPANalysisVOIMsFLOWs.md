# SENSeDATAMEASiIPANalysisVOIMsFLOWs

Module: Data Application Unit
Source: f524813537064e85.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Voice over IMS Results
 > 
SENSe:DATA:MEAS<i>:IPANalysis:VOIMs:FLOWs?
SENSe:DATA:MEAS<i>:IPANalysis:VOIMs:FLOWs? 
<SessionID>, <FlowID>, <Direction>, <Type>
Queries flow information related to a voice over IMS call.
A query returns all parameters except the <SessionID>:
<FlowID>, <Direction>, <Type>, <Codec>, <SeqNumber>, ..., <Bitrate>
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
<Type>
AUDio |
 
 VIDeo |
 
 UNKNow
Flow type audio, video or unknown
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
<Codec>
String indicating the used codec
<SeqNumber>
Sequence number of the currently processed packet
<NumPack>
Number of already processed packets
<Throughput>
Current audio or video data throughput at the RTP level
Default unit: 
bit/s
<Destport>
Port used at the flow destination
<EVSMode>
String indicating the EVS mode (primary or AMR-WB-IO)
<EVSFormat>
String indicating the EVS format (header-full or compact)
<NumEVSCOMP>
Number of EVS packets with compact format
<NumEVSHP>
Number of EVS packets with header-full format
<VideoResolution>
String indicating the video resolution
<VideoFrate>
Video frame rate in frames per second
<VideoOreintation>
String indicating the counter-clockwise video rotation
<VideoProfile>
String indicating the H.264 profile
<VideoLevel>
String indicating the H.264 level
<VideoConstraint>
String indicating the H.264 constraint set
<Bitrate>
Audio codec rate
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.40, V3.5.50: added <Destport> ... <VideoConstraint>
V3.5.51: added <Bitrate>
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Flows Info tab (lower part)"
Top