# SENSeDATACONTrolIMS2HISTory

Module: Data Application Unit
Source: f57cbe03afd241e7.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Service Control and Information
 > 
SENSe:DATA:CONTrol:IMS2:HISTory?
SENSe:DATA:CONTrol:IMS2:HISTory? 
<ID>
Queries details for a selected event log entry.
The returned sequence depends on the type of the entry. Examples:
Four values are returned for a message entry of the type 3GPP, 3GPP2 or RCS pager mode:
<SMSTimestamps>, <SMSType>, <SMSEncoding>, <SMSText>
Eight values are returned for each recorded state of a call entry:
{
<HistoryState>, <HistoryTimestamps>, <SignalingType>, <AudioCodecType>, <AMRAlignMode>, <AMRMode>, <VideoCodec>, <VideoAttributes>
}
state 1
, {...}
state 2
, ..., {...}
state n
If a parameter is not relevant for a state, 
INV
 is returned for this parameter.
Query parameters: 
<ID>
String selecting the event log entry
To query IDs, see 
SENSe:
​
DATA:
​
CONTrol:
​
IMS2:
​
EVENts?
.
Return values: 
<SMSTimestamps>
Timestamp of the message transfer as string in the format 
"hh:mm:ss"
<SMSType>
TGPP |
 
 TGPP2 |
 
 OGPP |
 
 OGPP2 |
 
 OPAGer |
 
 TPAGer
TGPP
: mobile-terminating message, 3GPP
TGPP2
: mobile-terminating message, 3GPP2
OGPP
: mobile-originating message, 3GPP
OGPP2
: mobile-originating message, 3GPP2
OPAGer
: mobile-originating message, RCS pager mode
TPAGer
: mobile-terminating message, RCS pager mode
<SMSEncoding>
GSM7 |
 
 GSM8 |
 
 UCS |
 
 ASCI |
 
 IAF5 |
 
 NENC |
 
 BASE64
Encoding of the message
<SMSText>
Message text as string
<HistoryState>
OK |
 
 NOK |
 
 PROGgres |
 
 RINGing |
 
 ESTablished |
 
 HOLD |
 
 RESumed |
 
 RELeased |
 
 MEDiaupdate |
 
 BUSY |
 
 DECLined |
 
 RCSTxt |
 
 INITialmedia |
 
 FILetransfer |
 
 SRVCcrelease |
 
 TERMinated |
 
 CANCeled |
 
 REJected
Status of the call
<HistoryTimestamps>
Timestamp of the call as string in the format 
"hh:mm:ss"
<SignalingType>
PRECondit |
 
 NOPRecondit |
 
 SIMPle |
 
 REQU100 |
 
 REQuprecondi |
 
 WOTPrec183 |
 
 EARLymedia
Signaling type of the call
<AudioCodecType>
NARRowband |
 
 WIDeband |
 
 EVS
Audio codec type of the call
<AMRAlignMode>
OCTetaligned |
 
 BANDwidtheff
AMR voice codec alignment mode of the call
<AMRMode>
Codec mode as string
<VideoCodec>
H263 |
 
 H264
Video codec of the video call
<VideoAttributes>
Video codec attributes of the video call
Example: 
See 
"Sending a short message over IMS to the DUT"
Usage: 
Query only
Firmware/Software: 
V3.5.10, some values have been added in later releases
Manual operation: 
See 
"Query of event details"
Top