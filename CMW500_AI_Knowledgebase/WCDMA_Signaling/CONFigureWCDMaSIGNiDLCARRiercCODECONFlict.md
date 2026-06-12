# CONFigureWCDMaSIGNiDLCARRiercCODECONFlict

Module: WCDMA Signaling
Source: 4d9cb2a5970d4085.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
General Settings
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:CODE:CONFlict?
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:CODE:CONFlict? 
Queries the channelization code conflict status of the physical channels:
OFF
: channel causes no code conflict
ON
: code settings of this channel conflict with the code settings of another channel
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<OCNS>
OFF |
 
 ON
<PCPICH>
OFF |
 
 ON
<SCPICH>
OFF |
 
 ON
<PCCPCH>
OFF |
 
 ON
<SCCPCH>
OFF |
 
 ON
<PICH>
OFF |
 
 ON
<AICH>
OFF |
 
 ON
<DPCH>
OFF |
 
 ON
<HSSCCH1>
OFF |
 
 ON
<HSSCCH2>
OFF |
 
 ON
<HSSCCH3>
OFF |
 
 ON
<HSSCCH4>
OFF |
 
 ON
<HSPDSCH>
OFF |
 
 ON
<EAGCH>
OFF |
 
 ON
<EHICH>
OFF |
 
 ON
<ERGCH>
OFF |
 
 ON
<FDPCH>
OFF |
 
 ON
Example: 
See 
"Configuring Physical Channel DL Settings"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"Code Conflict"
Top